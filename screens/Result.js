import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import HorizontalBarGraph from './graphs/HorizontalBarGraph';
import LineGraph from './graphs/LineGraph';
import Phtext from './Predictedtext/Phtext';
import Headtext from './Predictedtext/Headtext';

const Result = () => {
  const {height} = useWindowDimensions();
  StatusBar.setBackgroundColor('#ffffff');
  StatusBar.setBarStyle('dark-content');
  const navigationBarHeight = StatusBar.currentHeight || 0;
  const [selectedtab, setselectedtab] = useState(0);

  const contentOpacity = useRef(new Animated.Value(1)).current;

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const secondApiEndpoint =
    'https://api.thingspeak.com/channels/2327194/feeds.json?api_key=D7LVHQMJWAO6NOFT&results=7';
  const [secondApiData, setSecondApiData] = useState([]);
  const [isSecondLoading, setIsSecondLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the first API when the component mounts
    fetchData();
    const firstInterval = setInterval(fetchData, 5000); // Refresh every 5 seconds for the first API (adjust as needed)
  
    // Fetch data from the second API when the component mounts
    fetchSecondData();
    const secondInterval = setInterval(fetchSecondData, 5000); // Refresh every 5 seconds for the second API (adjust as needed)
  
    // Cleanup the intervals when the component unmounts
    return () => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
    };
  }, []);
  

  const fetchData = async () => {
    try {
      // Make an API request here and set the data in state
      const response = await fetch(
        'https://api.thingspeak.com/channels/2329306/feeds.json?api_key=RKIRJMEM3U1QLITS&results=2',
      );
      const data = await response.json();
      setApiData(data.feeds); // Assuming feeds contains the field1 data
      console.log('API Data:', parseInt(data.feeds[0].field1));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSecondData = async () => {
    try {
      const response = await fetch(secondApiEndpoint);
      const data = await response.json();
      setSecondApiData(data.feeds);
      console.log('Second API Data:', data.feeds[0].field1);
      setIsSecondLoading(false);
    } catch (error) {
      console.error('Error fetching second data:', error);
    }
  };
  

  // Conditional rendering based on loading state
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isSecondLoading) {
    return <Text>Loading...</Text>;
  }

  

  return (
    <ScrollView
      style={[styles.container, {height: height - navigationBarHeight}]}>
      <View style={styles.content}>
       <Headtext apiData={parseInt(apiData[0].field1)} apiData2={secondApiData}  />

        <View style={styles.horizontalLine}></View>

        <View style={styles.box}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              margin: 10,
              padding: 10,
            }}>
            Calculations
          </Text>

          <View>
            <HorizontalBarGraph apiData={parseInt(apiData[0].field1)} apiData2={secondApiData} />
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
                  Animated.timing(contentOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start(() => {
                    setselectedtab(0);
                    Animated.timing(contentOpacity, {
                      toValue: 1,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();
                  });
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
                  Animated.timing(contentOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start(() => {
                    setselectedtab(1);
                    Animated.timing(contentOpacity, {
                      toValue: 1,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();
                  });
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
              <Animated.View
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  marginTop: 20,
                  opacity: contentOpacity,
                  overflow: 'hidden',
                }}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View>
                    <LineGraph apiData={secondApiData} />
                  </View>
                  <View
                    style={{
                      backgroundColor: '#89CFF0',
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      maxHeight: '100%',
                    }}>
                    <Phtext apiData={secondApiData} />
                  </View>
                </View>
              </Animated.View>
            ) : (
              <Animated.View
                style={{
                  flex: 1,

                  opacity: contentOpacity,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 30,
                    marginTop: 30,
                    marginLeft: 30,
                  }}>
                  {apiData[0].field1} ppm
                </Text>
                {apiData[0].field1 === 0 ? (
                  <Text style={{color: 'black', fontSize: 25, padding: 25}}>
                    Estimating....4 g
                  </Text>
                ) : apiData[0].field1 >= 1 && apiData[0].field1 <= 100 ? (
                  <Text style={{color: 'black', fontSize: 20, padding: 25}}>
                    In regions with good water quality, residents benefit from
                    clean, safe, and reliable water sources. Low levels of
                    pollutants ensure the water is suitable for drinking,
                    cooking, and daily use. Good water quality promotes public
                    health, prevents waterborne diseases, and supports
                    environmental sustainability. It fosters a healthy
                    community, contributes to economic development, and reflects
                    efficient water management practices.
                  </Text>
                ) : (
                  <Text style={{color: 'black', fontSize: 20, padding: 25}}>
                    In areas with poor water quality, residents face significant
                    challenges due to contaminated water sources. High levels of
                    pollutants can lead to health issues, impacting both
                    physical well-being and overall quality of life. Poor water
                    quality often results in water scarcity, economic setbacks,
                    and environmental degradation. Addressing these issues
                    requires urgent interventions, comprehensive water
                    treatment, and community awareness to ensure a safe and
                    sustainable water supply for all.
                  </Text>
                )}
              </Animated.View>
            )}
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
    maxHeight: '100%',
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
    maxHeight: '100%',
    minHeight: 500,
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
