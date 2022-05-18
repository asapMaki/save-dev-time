import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from 'store/hooks';
import LocalizationContext from 'translation/context';
import {useToast} from 'react-native-styled-toast';

import HomeComponent from './Home.component';
// import actions from 'store/actions';
import {RootState} from 'store/reducers';
import {characterGet} from 'api/character/character';
import {getCharacterGetMock} from 'api/character/character.msw';
import {useCharactersQuery} from 'api-graphql/graphql';

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
}

const Home = (props: Props) => {
  // let x = useSelector((state:RootState) => state.x);
  // let [x, setx] = useState(null);
  // const dispatch = useDispatch();
  // const {toast} = useToast();
  let {t} = useContext(LocalizationContext);
  const {data, loading, error} = useCharactersQuery();

  let getChars = async () => {
    await characterGet({page: 1});
  };

  useEffect(() => {
    getChars();
  }, []);

  useEffect(() => {
    console.log('graph', data, loading, error);
  }, [data, loading, error]);

  return <HomeComponent {...props} {...{t}} />;
};

export default Home;
