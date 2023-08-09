import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import  Header from '../../components/Header/index'
import  Balance from '../../components/Balance/index'
import  Movements from '../../components/Movements/index'
import Actions from '../../components/Actions';

const lists = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '15/08/2023',
        type: 0 //Despesa
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '2500,00',
        date: '09/08/2023',
        type: 1 //Receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '8.000,00',
        date: '05/08/2023',
        type: 1 //Receita
    },
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="mateuss.cardosoo"/>


        <Balance saldo="9.250,90" gastos="527,00"/>
        <Actions/>

        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList
        style={styles.list}
        data={lists}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    color: "#ccc"
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  },
  icon:{
    alignItems: 'center',
    justifyContent: 'center'
},
});
