import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Text } from 'react-native-svg';


const LineGraph = ({apiData}) => {
  // Assuming `apiData` is the array you provided
const field1Data = apiData.map(item => parseFloat(item.field3));
// console.log(field1Data)
  
  const data = {
    labels: ['read1', 'read2', 'read3', 'read4', 'read5', 'read6','read7'],
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
  

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={390}
        height={290}
        chartConfig={chartConfig}
        bezier 
        // fromZero={true}
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

export default LineGraph;
