
import React from 'react';
import { View, Text } from 'react-native';
import { CalculatorDisplayProps } from '../types';

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ currentInput }) => {
  return (
    <View className="bg-white rounded-3xl shadow-lg shadow-blue-200/50 p-6 mb-4">
      <View className="items-end">
        <View className="min-h-[35px] flex items-center justify-end">
          <Text 
            className="text-4xl font-bold text-gray-800"
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.5}
          >
            {currentInput || '0'}
          </Text>
        </View>
      </View>
    </View>
  );
};