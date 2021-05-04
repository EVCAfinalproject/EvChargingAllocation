import React from 'react'
//import { TextInput , View} from 'react-native'
import { Provider as PaperProvider , TextInput} from 'react-native-paper'
import { LoginScreen } from './app/screens/login/login.screen'
import { mytheme } from './App.style';
const App = () =>
{
return(

  <PaperProvider theme={mytheme}>
    <LoginScreen/> 
  </PaperProvider>
)

}
export default App;