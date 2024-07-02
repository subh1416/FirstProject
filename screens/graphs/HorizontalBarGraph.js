import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const HorizontalBarGraph = ({apiData,apiData2}) => {
  const field1Data = apiData2.map(item => parseFloat(item.field1));
  const sum = field1Data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = (sum / field1Data.length).toFixed(2);


  const data = {
    labels: ['Conductivity', 'Hardness', 'Acidity', 'Basicity'],
    datasets: [
      {
        data: [2*apiData, 0.7*apiData, 14-average, average],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={400}
        height={200}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          color: (opacity = 1) => `rgba(0, 184, 148, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        // fromZero
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

export default HorizontalBarGraph;
