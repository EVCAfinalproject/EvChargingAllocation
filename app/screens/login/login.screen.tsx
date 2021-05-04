import React from 'react'
import { SafeAreaView , View} from 'react-native'
import { Card ,TextInput , Button} from 'react-native-paper'
import { loginStyle } from './loginstyle';
export const LoginScreen = () => {

    return (

            <SafeAreaView style={loginStyle.content} >
              <View> 
                   <Card>
                    <Card.Title title="Login/Signup" titleStyle={loginStyle.cardTitle}></Card.Title>
                        <Card.Content>
                        <TextInput label="Email" keyboardType="email-address"></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput> 
                        <Button style={loginStyle.cardButton}>Forgot Email/password</Button>
                        <Button mode='contained' style={loginStyle.cardButton}> Login</Button> 
                        <Button style={loginStyle.cardButton}> Register</Button>

                        </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
    );
}