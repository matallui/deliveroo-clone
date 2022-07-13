import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import BasketIcon from '../components/BasketIcon';
import DishRow from '../components/DishRow';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className='relative'>
          <Image
            source={{
              uri: imgUrl,
            }}
            className='h-56 w-full gb-gray-300 p-4'
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          >
            <ArrowLeftIcon size={20} color='#00ccbb' />
          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-600'>{rating}</Text> · {genre}
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>
                  Nearby · {address}
                </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00ccbb' />
          </TouchableOpacity>
        </View>

        <View className='pb-40'>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

          {/* Dishes */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
