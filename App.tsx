import React from 'react';
import {StatusBar, LogBox} from 'react-native';

import Router from 'router';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as StoreProvider} from 'react-redux';
import store, {persistor} from './src/store';
// import LocalizationContainer from './src/translation/LocalizationContainer';

// import {ThemeProvider} from 'styled-components';
import {ToastProvider} from 'react-native-styled-toast';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import Text from 'shared/Text';
import {lightTheme} from 'shared/theme';
import {Provider as PaperProvider} from 'react-native-paper';
// import toastTheme from 'shared/constants/toastTheme';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  from,
} from '@apollo/client';

// export const errorLink = onError(({graphQLErrors, networkError}) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({message, locations, path, extensions: {code}}) => {
//       if (code === 'UNAUTHENTICATED') {
//         console.log(`UNAUTHENTICATED`);
//       }
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       );
//     });
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// export const authLink = (token: string | null) =>
//   setContext(async (_, {headers}) => {
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `bearer ${token}` : '',
//       },
//     };
//   });

// export const httpLink = createHttpLink({
//   uri: 'https://rickandmortyapi.com/api/',
// });

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  // link: from([errorLink, authLink(token),httpLink]),
  cache: new InMemoryCache(),
});

LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={lightTheme}>
            {/* <ThemeProvider theme={toastTheme}> */}

            <SafeAreaProvider>
              <SafeAreaView
                edges={['top']}
                style={{flex: 1, backgroundColor: '#fff'}}>
                <ToastProvider maxToasts={2} offset={16}>
                  {/* <LocalizationContainer> */}
                  <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                  />
                  <Router />
                  {/* </LocalizationContainer> */}
                </ToastProvider>
              </SafeAreaView>
            </SafeAreaProvider>
            {/* </ThemeProvider> */}
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    </ApolloProvider>
  );
};
export default App;
