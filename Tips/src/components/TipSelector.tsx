import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { TipSelectorProps } from '../types';

export const TipSelector: React.FC<TipSelectorProps> = ({ selectedTip, onTipChange }) => {
  return (
    <View className="bg-white rounded-3xl shadow-lg p-6 mb-4">
      {/* 팁 버튼들 */}
      <View className="flex-row gap-3 mb-4">
        <TouchableOpacity
          onPress={() => onTipChange(15)}
          className={`flex-1 py-3 rounded-2xl items-center justify-center ${
            selectedTip === 15
              ? 'bg-blue-500'
              : 'bg-gray-100'
          }`}
        >
          <Text className={`text-xl font-bold ${
            selectedTip === 15 ? 'text-white' : 'text-gray-700'
          }`}>
            15%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onTipChange(18)}
          className={`flex-1 py-3 rounded-2xl items-center justify-center ${
            selectedTip === 18
              ? 'bg-blue-500'
              : 'bg-gray-100'
          }`}
        >
          <Text className={`text-xl font-bold ${
            selectedTip === 18 ? 'text-white' : 'text-gray-700'
          }`}>
            18%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onTipChange(20)}
          className={`flex-1 py-3 rounded-2xl items-center justify-center ${
            selectedTip === 20
              ? 'bg-blue-500'
              : 'bg-gray-100'
          }`}
        >
          <Text className={`text-xl font-bold ${
            selectedTip === 20 ? 'text-white' : 'text-gray-700'
          }`}>
            20%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onTipChange(25)}
          className={`flex-1 py-3 rounded-2xl items-center justify-center ${
            selectedTip === 25
              ? 'bg-blue-500'
              : 'bg-gray-100'
          }`}
        >
          <Text className={`text-xl font-bold ${
            selectedTip === 25 ? 'text-white' : 'text-gray-700'
          }`}>
            25%
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* 커스텀 슬라이더 */}
      <View className="flex-row items-center gap-4">
        <Text className="text-lg font-semibold text-gray-600">Custom:</Text>
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