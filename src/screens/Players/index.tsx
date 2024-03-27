import Header from "@components/Header"
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles"
import Highlight from "@components/Highlight"
import ButtonIcon from "@components/ButtonIcon"
import Input from "@components/Input"
import Filter from "@components/Filter"
import { Alert, FlatList, TextInput } from "react-native"
import { useEffect, useRef, useState } from "react"
import PlayerCard from "@components/PlayerCard"
import ListEmpty from "@components/ListEmpty"
import Button from "@components/Button"
import { useNavigation, useRoute } from "@react-navigation/native"
import { AppError } from "@utils/AppError"
import playerAddByGroup from "@storage/player/playerAddByGroup"
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam"
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO"
import Loading from "@components/Loading"
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup"
import { groupRemoveByName } from "@storage/group/groupRemoveByName"

type RouteParams = {
  group: string
}

export default function Players() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const route = useRoute()
  const { group } = route.params as RouteParams
  const newPlayerInputRef = useRef<TextInput>(null)


  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "Informe o nome da pessoa para adicionar")
    }
    const newPlayer = {
      name: newPlayerName,
      team
    }
    try {
      await playerAddByGroup(newPlayer, group)
      fetchPlayersByTeam()
      newPlayerInputRef.current?.blur()
      setNewPlayerName('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar')
      }
    }
  }
  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playerGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)

    } catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
    } finally {
      setIsLoading(false)
    }
  }
  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remover Pessoa', 'Não foi possível remover essa pessoa')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo.')
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover',
      'Deseja remover a turma?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove() }

      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input
          inputRef={newPlayerInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
      {isLoading ? <Loading /> :
        <FlatList
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              onRemove={() => { handlePlayerRemove(item.name) }}
              name={item.name} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}
        />
      }
      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  )
}