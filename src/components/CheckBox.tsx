import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {Stop, TickSquare} from 'iconsax-react-native';

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
  title: string;
}

const CheckBox: React.FC<CheckBoxProps> = props => {
  const iconColor = props.isChecked ? '#6655D0' : '#00000040';
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        {props.isChecked ? (
          <TickSquare size={20} color={iconColor} variant="Bold" />
        ) : (
          <Stop size={20} color={iconColor} />
        )}
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#000000',
    marginLeft: 5,
    marginBottom:5,
    marginTop:5
  },
});
