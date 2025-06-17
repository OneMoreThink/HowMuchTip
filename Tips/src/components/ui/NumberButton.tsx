import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NumberButtonProps } from '../../types';

export const NumberButton: React.FC<NumberButtonProps> = ({ 
  children, 
  onClick, 
  className = "" 
}) => (
  <TouchableOpacity
    onPress={onClick}
    className={`bg-gray-50 py-4 rounded-2xl shadow-sm border border-gray-200 items-center justify-center ${className}`}
    activeOpacity={0.8}
  >
    <Text className="text-3xl font-bold text-gray-800">
      {children}
    </Text>
  </TouchableOpacity>
);