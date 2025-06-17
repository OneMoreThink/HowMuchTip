import React from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { NumberButton } from './ui/NumberButton';
import { NumberPadProps } from '../types';

export const NumberPad: React.FC<NumberPadProps> = ({
  onDigit,
  onDelete,
  onClear,
  onAdd
}) => {
  return (
    <View 
      className="bg-white rounded-2xl p-2 mb-1"
      style={{
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          android: {
            elevation: 4,
          },
        }),
      }}
    >
      <View className="mb-2">
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
          className="flex-1 bg-gray-500 py-2.5 rounded-xl items-center justify-center mr-1"
          activeOpacity={0.8}
          style={{
            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.15,
                shadowRadius: 2,
              },
              android: {
                elevation: 2,
              },
            }),
          }}
        >
          <Text className="text-white text-lg font-bold">Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onAdd}
          className="flex-1 bg-green-500 py-2.5 rounded-xl items-center justify-center ml-1"
          activeOpacity={0.8}
          style={{
            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.15,
                shadowRadius: 2,
              },
              android: {
                elevation: 2,
              },
            }),
          }}
        >
          <Text className="text-white text-lg font-bold">+ Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};