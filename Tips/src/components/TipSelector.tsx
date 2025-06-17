import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { TipSelectorProps } from '../types';

export const TipSelector: React.FC<TipSelectorProps> = ({ selectedTip, onTipChange }) => {
  return (
    <View className="bg-white rounded-2xl shadow-lg p-3 mb-1">
      {/* 커스텀 슬라이더 */}
      <View className="flex-row items-center gap-3">
        <Text className="text-base font-semibold text-gray-600">Tips:</Text>
        <View className="flex-1">
          <Slider
            style={{ height: 30 }}
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
        <View className="bg-blue-500 px-3 py-1.5 rounded-lg min-w-[70px] items-center">
          <Text className="text-lg font-bold text-white">{selectedTip}%</Text>
        </View>
      </View>
    </View>
  );
};