import React from 'react';
import { Platform, Pressable, Text } from 'react-native';
import { NumberButtonProps } from '../../types';

export const NumberButton: React.FC<NumberButtonProps> = ({ 
  children, 
  onClick, 
  className = "" 
}) => (
  <Pressable
    onPress={onClick}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#e5e7eb' : '#f9fafb',
        transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
        opacity: pressed ? 0.8 : 1,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { 
              width: 0, 
              height: pressed ? 1 : 2 
            },
            shadowOpacity: pressed ? 0.1 : 0.2,
            shadowRadius: pressed ? 2 : 4,
          },
          android: {
            elevation: pressed ? 2 : 4,
          },
        }),
      }
    ]}
    className={`py-4 rounded-xl border border-gray-200 items-center justify-center ${className}`}
  >
    {({ pressed }) => (
      <Text 
        className="text-3xl font-bold text-gray-800"
        style={{
          color: pressed ? '#6b7280' : '#1f2937'
        }}
      >
        {children}
      </Text>
    )}
  </Pressable>
);