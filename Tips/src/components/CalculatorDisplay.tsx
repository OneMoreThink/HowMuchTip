import React from 'react';
import { View, Text } from 'react-native';
import { CalculatorDisplayProps } from '../types';

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ currentInput }) => {
  return (
    <View className="bg-white rounded-3xl shadow-lg shadow-blue-200/50 p-6 mb-4">
      <View className="items-end">
        <Text className="text-sm font-semibold text-gray-500 mb-1">
          Enter Amount
        </Text>
        <View className="min-h-[60px] flex items-center justify-end">
          <Text className="text-5xl font-bold text-gray-800">
            {currentInput || '0'}
          </Text>
        </View>
      </View>
    </View>
  );
};