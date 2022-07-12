import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      className='bg-white border border-gray-200 p-4'
    >
      <View className='flex-row'>
        <View className='flex-1 pr-2'>
          <Text className='text-lb mb-1'>{name}</Text>
          <Text className='text-gray-400'>{description}</Text>
          <Text className='text-gray-400 mt-2'>${+price.toFixed(2)}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            style={{
              borderWidth: 1,
              borderColor: '#f3f3f4',
            }}
            className='w-20 h-20 bg-gray-300 p-4'
          />
        </View>
      </View>
      {isPressed && (
        <View className='flex-row items-center space-x-2 pt-4'>
          <TouchableOpacity>
            <MinusCircleIcon color='#00ccbb' size={40} />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <PlusCircleIcon color='#00ccbb' size={40} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishRow;