import React, {useState, useEffect,useContext}from 'react';
import {View, StyleSheet} from 'react-native';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import LocalizationContext from 'translation/context';
import { useToast } from 'react-native-styled-toast'

import <%= upCaseName %>Component from './<%= upCaseName %>.component';
// import actions from 'store/actions';

interface Props {
  navigation?: any;
  route?: {
      params?: {};
  };
}

const <%= upCaseName %> = (props: Props) => {
  // let {} = useAppSelector(state => state);
  // let [x, setx] = useState(null);
  // const dispatch = useDispatch();
  // const {toast} = useToast();
  let {t} = useContext(LocalizationContext);

  return (
      <<%= upCaseName %>Component {...props} {...{t}}/>
  );
};

export default <%= upCaseName %>;
