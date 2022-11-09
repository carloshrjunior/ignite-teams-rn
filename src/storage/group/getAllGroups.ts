import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function getAllGroups() {
  try {
    // busca pelas informações que estão armazenadas no dispositivo
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    // getItem() busca dados que estão armazendas na chave passada
  
    const groups: string[] = storage ? JSON.parse(storage) : [];
  
    return groups;

  } catch(error) {
    throw error;
  }
}