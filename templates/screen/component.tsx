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


const <%= upCaseName %> = (props: Props) => {
  const {t} = props;
  // const {colors, roundness} = useTheme();

  return (
    <View style={styles.container}>
    </View>
  );
};

export default <%= upCaseName %>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
