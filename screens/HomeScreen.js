import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env"

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={tw`p-5`}>
        {/* logo */}
        <Image
          style={{
            width: 100, height: 100, resizeMode: 'contain' 
          }}
          source={{
            uri: "http://links.papareact.com/gzs"
          }}
        />

        {/* Render Google Places AutoComplete */}
        <GooglePlacesAutocomplete
          placeholder='Where from'
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={4000}
          styles={{
            container: {
              flex: 0
            }
          }}
          // onPress={(data, details = null) => {
          //   // 'details' is provided when fetchDetails = true
          //   console.log(data, details);
          // }}
          query={{
            key: "GOOGLE_MAPS_API_KEY",
            language: 'en',
          }}
        />

        {/* nav Options */}
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({}) 