import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HorizontalBarGraph from './graphs/HorizontalBarGraph';
import LineGraph from './graphs/LineGraph';

const Result = () => {
  const {height} = useWindowDimensions();
  StatusBar.setBackgroundColor('#ffffff');
  StatusBar.setBarStyle('dark-content');
  const navigationBarHeight = StatusBar.currentHeight || 0; // Get the height of the navigation bar
  const [selectedtab, setselectedtab] = useState(0);

  return (
    <ScrollView
      style={[styles.container, {height: height - navigationBarHeight}]}>
      <View style={styles.content}>
        <Text style={{fontSize: 35, color: 'black', color: '#00b894'}}>
          Water is ready to drink!
        </Text>

        <View style={styles.horizontalLine}></View>

        <View style={styles.box}>
          <Text style={{fontSize: 25, color: 'black', margin: 10, padding: 10}}>
            Calculations
          </Text>

          <View>
            <HorizontalBarGraph />
          </View>
        </View>

        <View style={styles.boxx}>
          <View style={{flex: 1}}>
            <View
              style={{
                width: '90%',
                height: 60,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 15,
                shadowColor: 'gray',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 30,
                elevation: 5,
              }}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  height: '90%',
                  backgroundColor: selectedtab == 0 ? '#338594' : 'white',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setselectedtab(0);
                }}>
                <Text
                  style={{
                    color: selectedtab == 0 ? '#ffffff' : '#000000',
                    fontSize: 20,
                  }}>
                  Ph
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '50%',
                  height: '90%',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: selectedtab == 1 ? '#338594' : 'white',
                }}
                onPress={() => {
                  setselectedtab(1);
                }}>
                <Text
                  style={{
                    color: selectedtab == 1 ? '#ffffff' : '#000000',
                    fontSize: 20,
                  }}>
                  Tds
                </Text>
              </TouchableOpacity>
            </View>

            {selectedtab == 0 ? (
              <View
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  marginTop: 20
                }}>
                  <LineGraph/>
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>Tds</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.boxx}>
          <View style={styles.buttonContainer}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#338594',
    marginBottom: 65,
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
    borderRadius: 30,

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
    height: 700,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 30,

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

export default Result;
