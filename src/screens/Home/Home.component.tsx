import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Text from 'shared/Text';
import {LocalizationContextProps} from 'translation/context';

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
  t: LocalizationContextProps['t'];
}

const Home = (props: Props) => {
  const {t} = props;
  // const {colors, roundness} = useTheme();

  return (
    <View style={styles.container}>
      <Text size={24}>AAA</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
