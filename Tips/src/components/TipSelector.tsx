import Slider from '@react-native-community/slider';
import React from 'react';
import { Text, View } from 'react-native';
import { TipSelectorProps } from '../types';

export const TipSelector: React.FC<TipSelectorProps> = ({ selectedTip, onTipChange }) => {
  return (
    <View className="bg-white rounded-2xl shadow-lg shadow-blue-200/50 p-4 h-full">
      <View className="flex-1 flex-row items-center gap-4">
        <Text className="text-lg font-semibold text-gray-600">Tips:</Text>
        <View className="flex-1">
          <Slider
            style={{ height: 40 }}
            minimumValue={0}
            maximumValue={50}
            step={0.5}
            value={selectedTip}
            onValueChange={onTipChange}
            minimumTrackTintColor="#3b82f6"
            maximumTrackTintColor="#e5e7eb"
            thumbTintColor="#3b82f6"
          />
        </View>
        <View className="bg-blue-500 px-4 py-2 rounded-xl min-w-[80px] items-center">
          <Text className="text-xl font-bold text-white">{selectedTip}%</Text>
        </View>
      </View>
    </View>
  );
};