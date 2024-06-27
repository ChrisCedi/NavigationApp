import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

export const ProductsScreen = () => {
  const navigation = useNavigation();
  const productList = [
    {
      id: 1,
      name: 'producto 1',
    },
    {
      id: 2,
      name: 'producto 2',
    },
    {
      id: 3,
      name: 'producto 3',
    },
    {
      id: 4,
      name: 'producto 4',
    },
    {
      id: 5,
      name: 'producto 5',
    },
  ];
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 25}}>Products</Text>
      <FlatList
        data={productList}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() => navigation.navigate('ProductDetail' as never)}
          />
        )}
      />
      <Text style={{marginBottom: 10, fontSize: 25}}>Ajustes</Text>
      <PrimaryButton
        label="Ajustes"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
