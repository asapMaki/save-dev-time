import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from 'store/hooks';
import LocalizationContext from 'translation/context';
import {useToast} from 'react-native-styled-toast';

import Home3Component from './Home3.component';
// import actions from 'store/actions';
import {useAppSelector, useAppDispatch} from 'store/hooks';

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
}

const Home3 = (props: Props) => {
  // let {} = useAppSelector(state => state);
  // let [x, setx] = useState(null);
  // const dispatch = useDispatch();
  // const {toast} = useToast();
  let {t} = useContext(LocalizationContext);

  return <Home3Component {...props} {...{t}} />;
};

export default Home3;
