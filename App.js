import React from 'react';
import Router from './app/Router'
import {Provider as PaperProvider } from 'react-native-paper';

class App extends React.Component{
  render() {
    // const persistor = persistStore(store);
    return (
        <PaperProvider>
          {/*PersistGate get data from storage and intialize to state*/}
          <Router/>
          {/*<PersistGate loading={<AppContainer/>} persistor={persistor}>*/}
          {/*   */}
          {/*</PersistGate>*/}
        </PaperProvider>
    );
  }

}

export default App;
