import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface IProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onEndEditing?: () => void;
  placeholder?: string;
}

const LabeledTextInput: FC<IProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  onEndEditing,
}) => {
  return (
    <View>
      <Text style={styles.label}>{`${label}:`}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder ? placeholder : ''}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default LabeledTextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingVertical: 10,
  },
});
