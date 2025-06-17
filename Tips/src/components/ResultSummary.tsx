import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
    <View className="bg-white rounded-3xl shadow-lg shadow-blue-200/50 p-6 flex-1">
      <View className="space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-semibold text-gray-600">Subtotal</Text>
          <Text className="text-2xl font-bold text-gray-800">${subtotal.toFixed(2)}</Text>
        </View>
        
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-semibold text-blue-600">Tip ({selectedTip}%)</Text>
          <Text className="text-2xl font-bold text-blue-600">${tipAmount.toFixed(2)}</Text>
        </View>
        
        <View className="border-t-2 border-gray-200 pt-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold text-gray-800">Total</Text>
            <Text className="text-4xl font-bold text-green-600">${total.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      {/* 입력된 항목들 */}
      {items.length > 0 && (
        <View className="mt-6 pt-4 border-t-2 border-gray-100">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              {items.map((item, index) => (
                <View
                  key={index}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-xl shadow-sm"
                >
                  <Text className="text-sm font-semibold text-gray-700">
                    ${item.toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}

      {/* 전체 초기화 */}
      {items.length > 0 && (
        <TouchableOpacity
          onPress={onResetItems}
          className="w-full mt-4 bg-gradient-to-r from-red-400 to-red-500 active:from-red-500 active:to-red-600 py-3 rounded-2xl shadow-lg shadow-red-200/50 transform active:scale-95 items-center justify-center"
        >
          <Text className="text-white text-lg font-bold">Reset All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};