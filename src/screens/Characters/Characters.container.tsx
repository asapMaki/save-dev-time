import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from 'store/hooks';
import LocalizationContext from 'translation/context';
import {useToast} from 'react-native-styled-toast';

import CharactersComponent from './Characters.component';
import {useCharactersQuery} from 'api/graphql/generated';
import {addCharacters} from 'store/characters/slice';
// import actions from 'store/actions';

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
}

const Characters = (props: Props) => {
  let {data: characters} = useAppSelector(state => state.characters);
  // let [x, setx] = useState(null);
  const dispatch = useAppDispatch();
  // const {toast} = useToast();
  let {t} = useContext(LocalizationContext);
  const {data, loading, error} = useCharactersQuery();

  useEffect(() => {
    if (data) dispatch(addCharacters(data.characters?.results));
  }, [data]);

  return <CharactersComponent {...props} {...{t, characters}} />;
};

export default Characters;
