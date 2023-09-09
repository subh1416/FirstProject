import React from 'react';
import { View, Text, StyleSheet, StatusBar, useWindowDimensions, ScrollView } from 'react-native';
import HorizontalBarGraph from './graphs/HorizontalBarGraph';

const Result = () => {
  const { height } = useWindowDimensions();
  StatusBar.setBackgroundColor('#ffffff');
  StatusBar.setBarStyle('dark-content');
  const navigationBarHeight = StatusBar.currentHeight || 0; // Get the height of the navigation bar

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, { height: height - navigationBarHeight }]}>
        <View style={styles.content}>
          <Text style={{ fontSize: 35, color: 'black', color: '#00b894' }}>
            Water is ready to drink!
          </Text>

          <View style={styles.horizontalLine}></View>

          <View style={styles.box}>
            <Text style={{ fontSize: 25, color: 'black', margin: 10, padding: 10 }}>
              Calculations
            </Text>

            <View>
              <HorizontalBarGraph />
            </View>
          </View>

          <View style={styles.boxx}>
            <View style={styles.buttonContainer}></View>
          </View>
        </View>
      </View>
    </ScrollView>
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
    padding: 10,
    flex: 1,
  },
  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
  },
  box: {
    height: 300,
    backgroundColor: 'white',
    marginTop: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
  },
  boxx: {
    height: 2
    
    00,
    backgroundColor: 'white',
    marginTop: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
  },
});

export default Res