import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import Result from './screens/Result';
import New from './screens/New';
import History from './screens/History';

const Tab = createBottomTabNavigator();

const App = () => {
  const new1 = './assests/new.png';
  const new2 = './assests/new2.png';
  const result = './assests/result.png';
  const result2 = './assests/result2.png';
  const history = './assests/history.png';
  const history2 = './assests/history2.png';
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Result" 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              position: 'absolute',
              backgroundColor: '#338594',
              height: 65,
              elevation: 0,
              borderBlockStartColor: '#338594'
              
            },
            null,
          ],
        }}>
        <Tab.Screen
          name="New"
          component={New}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{display: 'flex',  alignItems: 'center',justifyContent:'center'}}>
                <Image
                  source={focused ? require(new1) : require(new2)}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{color: '#ffffff',fontSize: 10}}>New</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Result"
          component={Result}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{display: 'flex',  alignItems: 'center',justifyContent:'center'}}>
                <Image
                  source={focused ? require(result) : require(result2)}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{color: '#ffffff',fontSize: 10}}>Result</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{display: 'flex',  alignItems: 'center',justifyContent:'center'}}>
                <Image
                  source={focused ? require(history) : require(history2)}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{color: '#ffffff',fontSize: 10}}>History</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
