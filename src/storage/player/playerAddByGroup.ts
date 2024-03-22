import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@utils/AppError";

export default async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    const storedPlayer = await playersGetByGroup(group)

    const playerAlredyExists = storedPlayer.filter(player => player.name === newPlayer.name)
    if (playerAlredyExists.length > 0) {
        throw new AppError("Essa pessoa já está adicionada em um time aqui.")
    }
    const storage = JSON.stringify([...storedPlayer, newPlayer])
    try {
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch (error) {
        throw (error)
    }
}