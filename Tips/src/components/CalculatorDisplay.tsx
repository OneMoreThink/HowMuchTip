import React from 'react';
import { Text, View } from 'react-native';
import { CalculatorDisplayProps } from '../types';

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ currentInput }) => {
 return (
   <View className="bg-white rounded-2xl shadow-lg shadow-blue-200/50 p-4 h-full">
     <View className="flex-1 items-end justify-end">
       <Text 
         className="text-5xl font-bold text-gray-800"
         numberOfLines={1}
         ellipsizeMode="head"
       >
         {currentInput || '0'}
       </Text>
     </View>
   </View>
 );
};