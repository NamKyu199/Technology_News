import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Animated, {
  useAnimatedRef,
} from 'react-native-reanimated';
import AppImage from '~utils/png';

export default function RegisterScreen() {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        ref={animatedRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <View key={i} style={styles.box}>
            {/* <Text style={styles.center}>{i}</Text> */}
            <Image source={AppImage.en} style={{ width: '100%', height: '100%' }} />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scroll: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 250,
    width: '100%',
    margin: 20,
  },
  scrollContent: {
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 100,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  },
});
