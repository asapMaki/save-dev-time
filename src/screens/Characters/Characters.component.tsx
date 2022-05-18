import {Character} from 'api/graphql/generated';
import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Avatar, useTheme} from 'react-native-paper';
import Text from 'shared/Text';
import {LocalizationContextProps} from 'translation/context';

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
  t: LocalizationContextProps['t'];
  characters: Array<Character>;
}

const Characters = (props: Props) => {
  const {t, characters} = props;
  // const {colors, roundness} = useTheme();

  return (
    <ScrollView
    // style={styles.container}
    >
      <Text>Characters</Text>
      {characters.map(char => (
        <>
          <Avatar.Image source={{uri: char.image}} />
          <Text>{char.name}</Text>
        </>
      ))}
    </ScrollView>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
