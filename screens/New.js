import React, {useEffect , useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import Waterflow from './Waterflow/Waterflow';

const New = () => {
  const {height} = useWindowDimensions();
  const navigationBarHeight = StatusBar.currentHeight || 0; // Get the height of the navigation bar

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the first API when the component mounts
    fetchData();
    const firstInterval = setInterval(fetchData, 5000); // Refresh every 5 seconds for the first API (adjust as needed)

    return () => {
      clearInterval(firstInterval);
    };
  }, []);

  const fetchData = async () => {
    try {
      // Make an API request here and set the data in state
      const response = await fetch(
        'https://api.thingspeak.com/channels/2327194/feeds.json?api_key=D7LVHQMJWAO6NOFT&results=7',
      );
      const data = await response.json();
      setApiData(data.feeds); // Assuming feeds contains the field1 data
      console.log('APIwater Data:', parseInt(data.feeds[0].field1));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.container, {height: height - navigationBarHeight}]}>
      <View style={styles.content}>
        <Waterflow apiWater={apiData} />
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
