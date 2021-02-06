import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Register extends React.Component {
  state = {
    mainColor: "#4EC0A9",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          source={require("../images/image.png")}
          style={{
            width: "80%",
            height: "40%",
            alignSelf: "center",
            marginLeft: "10%",
          }}
        ></Image>
        <Text style={styles.title}>open dict</Text>
        <Text style={styles.desc}>
          nöronlarınıza yepyeni uyarımlar, open dict açık kaynak kodlu
          multi-platfrom interaktif sözlük.
        </Text>

        <View
          style={[styles.container2, { borderColor: this.state.mainColor }]}
        >
          <Icon name="mail" color={this.state.mainColor} size={24}></Icon>
          <TextInput style={{ width: "100%" }} placeholder="email"></TextInput>
        </View>
        <View
          style={[styles.container3, { borderColor: this.state.mainColor }]}
        >
          <Icon name="lock" color={this.state.mainColor} size={24}></Icon>
          <TextInput
            style={{ width: "100%" }}
            placeholder="şifre"
            secureTextEntry
          ></TextInput>
        </View>
        <View
          style={[styles.container3, { borderColor: this.state.mainColor }]}
        >
          <Icon name="lock" color={this.state.mainColor} size={24}></Icon>
          <TextInput
            style={{ width: "100%" }}
            placeholder="şifre tekrar"
            secureTextEntry
          ></TextInput>
        </View>
        <View
          style={[styles.container4, { backgroundColor: this.state.mainColor }]}
        >
          <Text style={{ color: "white", fontFamily: "Medium" }}>kayıt ol</Text>
        </View>

        <View style={styles.container5}>
          <Text
            onPress={() => navigate("Login")}
            style={{ color: "black", fontFamily: "Medium" }}
          >
            giriş
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "SemiBold",
    alignSelf: "center",
  },
  desc: {
    alignSelf: "center",
    fontFamily: "Medium",
    textAlign: "center",
    marginHorizontal: 20,
    opacity: 0.6,
  },
  container2: {
    flexDirection: "row",
    alignItems: "baseline",
    marginHorizontal: 50,
    borderWidth: 2,
    marginTop: 70,
    paddingHorizontal: 10,
    borderColor: "#4EC0A9",
    borderRadius: 23,
    paddingVertical: 2,
  },
  container3: {
    flexDirection: "row",
    alignItems: "baseline",
    marginHorizontal: 50,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 10,
    borderColor: "#4EC0A9",
    borderRadius: 23,
    paddingVertical: 2,
  },
  container4: {
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#4EC0A9",
    paddingVertical: 8,
    borderRadius: 25,
  },
  container5: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
