import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import { useAppContext } from "../../Context/AppContext";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// import Join from '../Join/Join';

// import '../../css/Login.css'

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

const Login = ({ onLogin }) => {
  // const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const { setSelectedBoardId, setContentsComponents } = useAppContext();
  // const [isLoggedIn, setLoggedIn] = useState(true);
  //
  // const apiInstance = axios.create({ baseURL: "http://localhost:8086" });

  const handleLogin = async () => {
    //   try {
    //     const response = await apiInstance.post('api/user/login', {
    //       uid: id,
    //       password: password
    //     });
    //
    //     onLogin(id, response.headers.get("Authorization"));
    //     localStorage.setItem("userInfo", JSON.stringify({
    //       id: id,
    //       token: response.headers.get("Authorization")
    //     }))
    //
    //     setLoggedIn(!isLoggedIn);
    //     if(isLoggedIn) {
    //       navigate('/home');
    //     }
    //
    //     console.log("Login Success");
    //   }
    //   catch (error) {
    //     console.log("Login Fail");
    //   }
  }

  const handleJoin = () => {
    //   setContentsComponents((prevComponents) => [
    //     ...prevComponents,
    //     { tab: "Join", component: Join }
    //   ]);
    //   navigate('/join');
  }

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder='ID'
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder='Password'
      />
      {/*<Button title='로그인' ></Button>*/}
      {/*<Button title='회원가입'></Button>*/}
      <Pressable style={styles.button} onPress={() => alert('로그인 버튼이 눌렸습니다.')}>
        <Text style={styles.text}>로그인</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => alert('회원가입 버튼이 눌렸습니다.')}>
        <Text style={styles.text}>회원가입</Text>
      </Pressable>
    </View>
  );
};

export default Login;
