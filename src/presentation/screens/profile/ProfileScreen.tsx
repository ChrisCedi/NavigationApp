import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top, ...globalStyles.container}}>
      <Text>Profile</Text>
      <PrimaryButton
        label="Abrir menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
