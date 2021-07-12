import React, {FC} from 'react';
import {View, Button as Btn, ButtonProps, StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const Button: FC<ButtonProps> = props => {
  return (
    <View style={styles.btn}>
      <Btn {...props} color={Colors.primaryColor} />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 3,
  },
});
