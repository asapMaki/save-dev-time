import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {LocalizationContextProps} from 'translation/context';

interface Props {
  navigation?: any;
  route?: {
      params?: {};
  };
  t: LocalizationContextProps['t'];
}


const Home2 = (props: Props) => {
  const {t} = props;
  // const {colors, roundness} = useTheme();

  return (
    <View style={styles.container}>
    </View>
  );
};

export default Home2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
