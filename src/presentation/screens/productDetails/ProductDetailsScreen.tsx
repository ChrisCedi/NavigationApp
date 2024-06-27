import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductDetailsScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'ProductDetail'>>().params;

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  console.log(params);
  return (
    <View style={globalStyles.container}>
      <Text>Detalle de producto</Text>
      <Text style={{textAlign: 'center', fontSize: 30}}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
