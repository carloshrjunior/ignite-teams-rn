// useCallback: Garante que a função não seja executada de forma desnecessária muitas vezes
// useCallback + useFocusEffect = +performace
import { useState, useCallback } from 'react';
import { Alert, FlatList, View, Text } from 'react-native';

// useNavigation: Hook de navegação
// useFocusEffet: Identificar quando o foco está de volta na tela principal (precisa do useCallback)
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { getAllGroups } from '@storage/group/getAllGroups';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { GroupCard } from '@components/GroupCard';
import { HighLight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  // buscar grupos
  async function fetchGroups() {
    try {

      setIsLoading(true);

      const data = await getAllGroups();
      setGroups(data);

    } catch(error) {
      console.log(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas");
    } finally {
      setIsLoading(false);
    }
  }

  // acessa a tela do grupo 
  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header/>

      <HighLight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      {
        isLoading ? <Loading/> :
      
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item}
              onPress={() => handleOpenGroup(item)}  
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1}}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?"/>}
          showsVerticalScrollIndicator={false}
        />
      }

      {/* <View><Text>teste teste teste teste</Text></View> */}

      <Button 
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}