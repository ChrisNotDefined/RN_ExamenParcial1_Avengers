import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, SafeAreaView} from 'react-native';

import Colors from './src/utils/colors';
import Values from './src/components/Values';

export default App = () => {
  let [serieAMostrar, setSerieAMostrar] = useState('');
  let [series1, setSeries1] = useState([[], 1]); // Arreglo vacio para los pares, término en el que se encuentra
  let [series2, setSeries2] = useState([[0, 1], 2]); // Primeros dos terminos de fibonacci
  let [series3, setSeries3] = useState([1, 1]); // Valor inicial del factorial (0!), numero al que se la calculó el factorial

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>Ex-Avengers</Text>
        <Values
          style={styles.ansContainer}
          ansType={serieAMostrar != "" ? serieAMostrar : 'Serie A Mostrar'}
          ans={(() => {
            switch (serieAMostrar) {
              case 'Pares':
                return series1[0].join(', ');
                break;
              case 'Fibonacci':
                return series2[0].join(', ');
                break;
              case 'Factorial':
                return `${series3[1]}! = ${series3[0].toString()}`;
                break;
              default:
                return 'Elija una operación';
                break;
            }
          })()}
        />
        <View>
          <Button
            color="#ff6666"
            onPress={() => {
              setSerieAMostrar('Pares');
              setSeries1([[...series1[0], series1[1] * 2], series1[1] + 1]);
            }}
            title="Pares"></Button>
          <View style={styles.separator}></View>
          <Button
            color="#85e085"
            onPress={() => {
              setSerieAMostrar('Fibonacci');
              setSeries2([
                [
                  ...series2[0],
                  series2[0][series2[1] - 2] + series2[0][series2[1] - 1],
                ],
                series2[1] + 1,
              ]);
            }}
            title="Fibonacci"></Button>
          <View style={styles.separator}></View>
          <Button
            color="#ffd966"
            onPress={() => {
              setSerieAMostrar('Factorial');
              setSeries3([series3[0] * series3[1], series3[1] + 1]);
            }}
            title="Factorial"></Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20
  },
  safeArea: {
    backgroundColor: Colors.SAFEVIEW_COLOR,
    padding: 10,
    height: '100%',
  },
  separator: {
    height: 10,
  },
});
