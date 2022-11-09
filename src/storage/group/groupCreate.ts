import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

import { getAllGroups } from "./getAllGroups";

import { AppError } from "@utils/AppError";

export async function groupCreate( newGroup: string ) {
  try{
    // pega os grupos que já estão salvos no dispositivo (caso existam)
    const storedGroups = await getAllGroups();

    // verifica se já existe um grupo com o nome recebido
    const groupAlreadyExists = storedGroups.includes(newGroup);
    // includes() verifica se já existe dentro do array o parâmetro informado (retorna true ou false)

    if(groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome");
    }

    // transforma o objeto (grupos armazenados no dispositivo) em string
    const storage = JSON.stringify([...storedGroups, newGroup]);

    // armazena os grupos atualiazados dentro da chave passada
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch(error) {
    throw error;
  }
}