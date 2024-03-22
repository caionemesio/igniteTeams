import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";
import GroupsCard from "@components/GroupCard";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";
export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera de Itapi', 'amigo estou aqui'])
  const navigation = useNavigation()
  function handleNewGroup() {
    navigation.navigate("new")
  }
  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }
  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (<GroupsCard
          onPress={() => handleOpenGroup(item)}
          title={item} />)}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />
      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>

  )
}
