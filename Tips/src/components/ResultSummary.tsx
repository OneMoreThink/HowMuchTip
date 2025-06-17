import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ResultSummaryProps } from '../types';

export const ResultSummary: React.FC<ResultSummaryProps> = ({
  subtotal,
  tipAmount,
  total,
  selectedTip,
  items,
  onResetItems
}) => {
  return (
    <View className="bg-white rounded-2xl shadow-lg shadow-blue-200/50 p-4 h-full">
      <View>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-semibold text-gray-600">Subtotal</Text>
            <Text className="text-2xl font-bold text-gray-800">${subtotal.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-semibold text-blue-600">Tip ({selectedTip}%)</Text>
            <Text className="text-2xl font-bold text-blue-600">${tipAmount.toFixed(2)}</Text>
          </View>
          
          <View className="border-t-2 border-gray-200 pt-3">
            <View className="flex-row justify-between items-center">
              <Text className="text-2xl font-bold text-gray-800">Total</Text>
              <Text className="text-4xl font-bold text-green-600">${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
  onPress={onResetItems}
  className={`w-full py-2 mt-2 rounded-xl items-center justify-center ${
    items.length > 0 ? 'bg-red-500 active:bg-red-600' : 'bg-gray-300'
  }`}
  disabled={items.length === 0}
>
  <Text className="text-white text-lg font-bold">Reset All</Text>
</TouchableOpacity>
      </View>
    </View>
  );
};