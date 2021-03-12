import React from 'react';
import { StyleSheet, View, Text } from "react-native";

import Colors from "../utils/colors";

export default function Values(props) {
  const {ansType, ans} = props;
  return (
    <View style = {styles.viewValues}>
      <View>
        <Text style={styles.answerType}>{ansType}</Text>
      </View>

      <View>
        <Text>{ans}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewValues: {
    backgroundColor: Colors.TEXTO_COLOR,
    width: "85%",
    fontSize: 12,
    borderRadius: 30,
    marginLeft: 30,
    marginBottom: 50,
    padding: 10,
    height: 250
  },
  answerType: {
    fontSize: 30,
    backgroundColor: "#a44ef5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 10,
    marginBottom: 5,
    width: "100%",
    textAlign: 'center',  
  }
});