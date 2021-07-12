import React, {FC} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

interface IProps {
  items: string[] | undefined;
}

const ListOfItems: FC<IProps> = ({items}) => {
  if (items === undefined) {
    return null;
  }

  return (
    <ScrollView>
      {items.map((item, index) => {
        return (
          <Text key={`${item}-${index}`} style={styles.item}>
            {`${index + 1}. ${item}`}
          </Text>
        );
      })}
    </ScrollView>
  );
};

export default ListOfItems;

const styles = StyleSheet.create({
  item: {
    fontSize: 22,
  },
});
