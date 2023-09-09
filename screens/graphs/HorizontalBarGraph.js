import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const HorizontalBarGraph = () => {
  const data = {
    labels: ['Conductivity', 'Hardness', 'Acidity', 'Basicity'],
    datasets: [
      {
        data: [400, 430, 448, 470],
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
        fromZero
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
