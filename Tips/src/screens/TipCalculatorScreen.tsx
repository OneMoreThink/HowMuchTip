import React from 'react';
import { View, Text } from 'react-native';

export default function TipCalculatorScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-3xl font-bold">
        팁 계산기 앱입니다!
      </Text>
      <Text className="text-white text-lg mt-2">
        설정 성공!
      </Text>
    </View>
  );
}