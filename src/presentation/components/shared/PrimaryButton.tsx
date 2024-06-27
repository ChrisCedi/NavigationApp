import React from 'react';
import {Text, Pressable} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={globalStyles.primaryButton}
      onPress={onPress && onPress}
      onLongPress={onLongPress && onLongPress}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
