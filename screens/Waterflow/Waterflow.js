import React, {useEffect , useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Waterflow = ({apiWater}) => {

  const field1Data = apiWater.map(item => parseFloat(item.field1));
  const field1Data2 = apiWater.map(item => parseFloat(item.field2));


  const sum1 = field1Data.reduce((acc, value) => acc + value, 0);
  const sum2 = field1Data2.reduce((acc, value) => acc + value, 0);

  const average1 = (sum1 / field1Data.length).toFixed(2);
  const average2 = (sum2 / field1Data2.length).toFixed(2);

  const averageDifference = Math.abs(average1 - average2);
  console.log(`avg diff ${averageDifference}`)

  const [alertTriggered, setAlertTriggered] = useState(false);

  useEffect(() => {
    const checkAlert = () => {
      if (averageDifference <2 && !alertTriggered) {
        Alert.alert(
          'Alert',
          'Pipeline fault detection please take appropriate action immediately',
          [
            {
              text: 'OK',
              onPress: () => setAlertTriggered(false),
            },
          ],
          { cancelable: false }
        );
        setAlertTriggered(true);
      }
    };
 
    const alertInterval = setInterval(checkAlert, 300);

    return () => {
      clearInterval(alertInterval);
    };
  }, [averageDifference, alertTriggered]);


  console.log(field1Data)


  const data = {
    labels: ['read1', 'read2', 'read3', 'read4', 'read5', 'read6', 'read7'],
    datasets: [
      {
        data: field1Data,
        color: (opacity = 1) => `rgba(0, 0, 148, ${opacity})`,
        strokeWidth: 4,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 0) => `rgba(0, 102, 178, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };


  const data2 = {
    labels: ['read1', 'read2', 'read3', 'read4', 'read5', 'read6', 'read7'],
    datasets: [
      {
        data: field1Data2,
        color: (opacity = 1) => `rgba(0, 0, 148, ${opacity})`,
        strokeWidth: 4,
      },
    ],
  };

  const chartConfig2 = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 0) => `rgba(0, 102, 178, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          margin: 10,
          padding: 10,
        }}>
        Water Flow 1
      </Text>
      <LineChart
        data={data}
        width={390}
        height={290}
        chartConfig={chartConfig}
        bezier
        fromZero={true}
      />
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          margin: 10,
          padding: 10,
        }}>
        Water Flow 2
      </Text>
      <LineChart
        data={data2}
        width={390}
        height={290}
        chartConfig={chartConfig2}
        bezier
        fromZero={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Waterflow;
