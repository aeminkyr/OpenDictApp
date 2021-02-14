import React, { createContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { UserContext } from "../contexts/UserContext";
import { serializeKey } from "../common/Index";
import { StackActions, NavigationActions } from "react-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Login extends React.Component {
  state = {
    mainColor: "#4EC0A9",
    mail: "",
    logged_in: false,
    password: "",
  };

  async componentDidUpdate() {
    const logged_in = this.state.logged_in;
    console.log(this.state.logged_in);
    if (logged_in) {
      //  this.props.navigation.navigate('Home');

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  componentDidMount() {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@token");
        if (value !== null) {
          // value previously stored
          console.log(value);
        }
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }

  goLogin() {
    var mail = this.state.mail;
    var password = this.state.password;
    var present = this;

    // react native ajax komutu
    fetch("http:/192.168.31.225/login.php", {
      // extralar
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: serializeKey({
        mail: mail,
        password: password,
      }),
    })
      .then((res) => res.json()) // gelen datayı parse ediyoruz
      .then((res) => {
        const storeData = async (value) => {
          try {
            await AsyncStorage.setItem("@token", value);
          } catch (e) {
            // saving error
          }
        };

        storeData(res.token);

        if (res.login != -1) {
          Alert.alert("There we go!", "Login Ok!");
          this.setState({ logged_in: true });
        } else Alert.alert("Uyarı", "Kullanıcı doğrulanamadı");
      })
      .catch((error) => {
        Alert.alert("HATA", "Sunucuya bağlanırken bir hata oluştu" + error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <UserContext.Provider value="test">
        <View style={[styles.container]}>
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
            open dict açık kaynak kodlu multi-platfrom interaktif sözlük.
          </Text>

          <View
            style={[styles.container2, { borderColor: this.state.mainColor }]}
          >
            <Icon name="mail" color={this.state.mainColor} size={24}></Icon>
            <TextInput
              style={{ width: "100%" }}
              placeholder="e-mail"
              onChangeText={(value) => this.setState({ mail: value })}
            ></TextInput>
          </View>
          <View
            style={[styles.container3, { borderColor: this.state.mainColor }]}
          >
            <Icon name="lock" color={this.state.mainColor} size={24}></Icon>
            <TextInput
              style={{ width: "100%" }}
              onChangeText={(value) => this.setState({ password: value })}
              placeholder="şifre"
              secureTextEntry
            ></TextInput>
          </View>
          <View
            style={[
              styles.container4,
              { backgroundColor: this.state.mainColor },
            ]}
          >
            <Text
              //onPress={() => navigate("Home")}
              onPress={this.goLogin.bind(this)}
              style={{ color: "white", fontFamily: "Medium" }}
            >
              giriş
            </Text>
          </View>

          <View style={styles.container5}>
            <Text
              onPress={() => navigate("Register")}
              style={{ color: "black", fontFamily: "Medium" }}
            >
              kayıt ol{" "}
            </Text>
          </View>
        </View>
      </UserContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
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
    borderColor: "#00716f",
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
    borderColor: "#00716f",
    borderRadius: 23,
    paddingVertical: 2,
  },
  container4: {
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#00716f",
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
