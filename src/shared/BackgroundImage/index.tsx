import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {View, Image} from 'react-native';
import styles from './styles';

const BackgroundImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={{height: 250, width: 300}}
        source={require('assets/images/loginBottomCover.png')}
        // resizeMode="contain"
      />
    </View>
  );
};

export default BackgroundImage;
