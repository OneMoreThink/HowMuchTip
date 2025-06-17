import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NumberPadProps } from '../types';
import { NumberButton } from './ui/NumberButton';

export const NumberPad: React.FC<NumberPadProps> = ({
  onDigit,
  onDelete,
  onClear,
  onAdd
}) => {
  return (
    <View 
      className="bg-white rounded-2xl shadow-lg shadow-blue-200/50 p-4 h-full flex-1"
    >
      <View className="flex-1 justify-center">
        <View className="flex-row justify-between mb-2">
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('1')}>1</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('2')}>2</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('3')}>3</NumberButton>
          </View>
        </View>
        
        <View className="flex-row justify-between mb-2">
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('4')}>4</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('5')}>5</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('6')}>6</NumberButton>
          </View>
        </View>
        
        <View className="flex-row justify-between mb-2">
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('7')}>7</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('8')}>8</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('9')}>9</NumberButton>
          </View>
        </View>
        
        <View className="flex-row justify-between">
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('.')}>.</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton onClick={() => onDigit('0')}>0</NumberButton>
          </View>
          <View className="w-[30%]">
            <NumberButton 
              onClick={onDelete}
              className="bg-red-50 border-red-200"
            >
              ⌫
            </NumberButton>
          </View>
        </View>
      </View>
      
      <View className="flex-row">
        <TouchableOpacity
          onPress={onClear}
          className="flex-1 bg-gray-500 py-2.5 rounded-xl items-center justify-center mr-2"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-bold">Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onAdd}
          className="flex-1 bg-green-500 py-2.5 rounded-xl items-center justify-center ml-2"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-bold">+ Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};