import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5 bg-gray-50">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          This screen does not exist.
        </Text>
        <Link href="/">
          <Text className="text-lg font-semibold text-blue-600 underline mt-4">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}
