import {
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Title,
  View,
} from "native-base";
import React, { useEffect } from "react";
import { Font } from "expo";
import {
  StyleSheet,
  Image,
  LogBox,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { getUsersRequest } from "../reduxs/action/user";
import { useDispatch, useSelector } from "react-redux";

export default function UserList(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  LogBox.ignoreAllLogs();

  return (
    <View>
      <ScrollView>
        {user.loading ? (
          <Text>loading...</Text>
        ) : Object.keys(user.data).length != 0 ? (
          user.data.map((item) => (
            <Card style={{ flex: 1, borderRadius: 15 }}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("Detail User", {
                    name: item.name,
                    username: item.username,
                    id: item.id,
                    email: item.email,
                    phone: item.phone,
                    website: item.website,
                  })
                }
              >
                <CardItem
                  header
                  bordered
                  style={{ backgroundColor: "#41b6fa", borderRadius: 15 }}
                >
                  <Left>
                    <Image
                      source={{ uri: "https://robohash.org/" + item.id }}
                      style={{
                        width: 100,
                        height: 80,
                        marginRight: 5,
                      }}
                    />
                    <View style={{ alignItems: "flex-start" }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: 23,
                        }}
                      >
                        Username : {item.username}
                      </Text>
                    </View>
                  </Left>
                </CardItem>
              </TouchableOpacity>
            </Card>
          ))
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0a00c",
  },
});
