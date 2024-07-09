import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";
 
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem icon={({color, size}) => (
        <Feather name="list" size={24} color={color} />
      )}
      label={'Feed'} 
      onPress={()=> {
        router.push('/{drawer}/{tabs}/feed');
      }}
      />
      <DrawerItem icon={({color, size}) => (
        <Feather name="list" size={24} color={color} />
      )}
      label={'About Us'} 
      onPress={()=> {
        router.push('/{drawer}/{tabs}/feed');
      }}
      />
    </DrawerContentScrollView>
  )
}

export default function layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} /> } /> 
  )
}
