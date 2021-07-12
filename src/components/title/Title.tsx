import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {Colors} from '../../constants';

const Title: FC<TextProps> = props => {
  return (
    <Text style={styles.title} {...props}>
      {props.children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: Colors.text,
  },
});
