import React, { Component, Fragment } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default class SettingScreen extends Component {
  render() {
    const {
      name,
      username,
      id,
      email,
      phone,
      website,
    } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: "https://robohash.org/" + id }}
            style={{
              width: 350,
              height: 350,
              marginTop: -100,
              alignItems: "center",
            }}
          />
        </View>

        <View style={styles.icon}>
          <Text style={styles.text}>Username : {username}</Text>
        </View>
        <View style={styles.icon}>
          <MaterialIcons name="person" size={28} color="#19abff" />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.icon}>
          <MaterialIcons name="email" size={28} color="#19abff" />
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.icon}>
          <MaterialIcons name="phone" size={28} color="#19abff" />
          <Text style={styles.text}>{phone}</Text>
        </View>
        <View style={styles.icon}>
          <Foundation name="web" size={28} color="#19abff" />
          <Text style={styles.text}>{website}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 5,
    marginTop: 5,
    flexDirection: "row",
  },
  text: {
    marginLeft: 5,
    fontWeight: "bold",
    alignContent: "flex-start",
    fontSize: 20,
  },
});
