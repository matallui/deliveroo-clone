import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow-sm'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-600'>{rating}</Text> · {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
