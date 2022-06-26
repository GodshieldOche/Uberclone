import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    // {
    //     id: '456',
    //     title: 'Order food',
    //     image: "https://links.papareact.com/28w",
    //     screen: "MapScreen"
    // }
];

const NavOptions = () => {
    const navigation = useNavigation()
  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress ={() => navigation.navigate(item.screen)} 
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-xl`}>
                <View style={tw`flex flex-col items-center`}>
                    <Image
                        style= {{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg capitalize font-semibold`}>{item.title}</Text>
                    <AntDesign name="arrowright" size={24} color="black" style={tw`p-2 text-white bg-gray-800 rounded-full w-10 mt-4`} />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions
