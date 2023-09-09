import React from 'react';
import { View, Text, StyleSheet, StatusBar, useWindowDimensions } from 'react-native';

const New = () => {
  const { height } = useWindowDimensions();
  const navigationBarHeight = StatusBar.currentHeight || 0; // Get the height of the navigation bar

  return (
    <View style={[styles.container, { height: height - navigationBarHeight }]}>
      <View style={styles.content}>
        <Text style={{ fontSize: 40, color: 'black' }}>New</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#338594',
  },
  content: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
    overflow: 'hidden',
    flex: 1,
  },
});

export default New;
