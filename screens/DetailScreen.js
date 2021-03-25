import React, { Component, Fragment } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class SettingScreen extends Component {
  render() {
    const {
      name,
      username,
      id,
      email,
      phone,
      website,
      address,
      company,
    } = this.props.route.params;
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Image
                source={{ uri: "https://robohash.org/" + id }}
                style={{
                  width: 350,
                  height: 350,
                  marginTop: -60,
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
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="office-building"
                size={28}
                color="#19abff"
              />
              <Text style={styles.text}>{company.name}</Text>
            </View>
            <View style={styles.iconAdd}>
              <Entypo name="home" size={24} color="#19abff" />
              <Text style={styles.textAdd}>
                {address.street}, {address.suite}, {address.city}, 
                {address.zipcode}
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
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
    padding: 4,
    marginTop: 2,
    flexDirection: "row",
  },
  iconAdd: {
    padding: 5,
    marginTop: 1,
    marginLeft:30,
    flexDirection: "row",
  },
  text: {
    marginLeft: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  textAdd: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  }
});
