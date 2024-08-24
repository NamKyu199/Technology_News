import React from 'react';
import {Text as NativeText, ColorValue} from 'react-native';

export type TextProps = React.ComponentProps<typeof NativeText> & {
  weight?: 'regular' | 'medium' | 'bold';
  italic?: boolean;
  color?: ColorValue;
  size?: number;
  align?: 'center' | 'left' | 'right';
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
};

const Text = ({
  weight = 'regular',
  italic = false,
  color = 'black',
  size = 14,
  align = 'left',
  transform = 'none',
  ...rest
}: TextProps) => {
  const {style, ...others} = rest;
  let fontFamilyValue = 'GoogleSans-Regular';
  switch (weight) {
    case 'regular':
      if (italic) {
        fontFamilyValue = 'GoogleSans-Italic';
      }
      break;
    case 'medium':
      if (italic) {
        fontFamilyValue = 'GoogleSans-MediumItalic';
      } else {
        fontFamilyValue = 'GoogleSans-Medium';
      }
      break;
    case 'bold':
      if (italic) {
        fontFamilyValue = 'GoogleSans-BoldItalic';
      } else {
        fontFamilyValue = 'GoogleSans-Bold';
      }
      break;
  }
  return (
    <NativeText
      allowFontScaling={false}
      style={[
        {
          fontSize: size,
          fontFamily: fontFamilyValue,
          textAlign: align,
          color: color,
          textTransform: transform,
        },
        style,
      ]}
      {...others}>
      {others.children}
    </NativeText>
  );
};

export default Text;
