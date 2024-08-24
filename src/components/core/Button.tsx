import React from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {Button as NativeButton} from 'react-native-paper';

export type ButtonProps = React.ComponentProps<typeof NativeButton> & {
  color?: ColorValue;
};

const Button = ({color = '#6655D0', ...rest}: ButtonProps) => {
  const {style, ...others} = rest;
  return (
    <NativeButton
      style={[styles.button, style]}
      mode="contained"
      buttonColor={color}
      labelStyle={{fontSize: 14}}
      {...others}>
      {others.children}
    </NativeButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 5,
  },
});

export default Button;
