import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineGraph = () => {
  // Sample data for the line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul'],
    datasets: [
      {
        data: [50, 70, 65, 80, 90, 75,100],
        color: (opacity = 1) => `rgba(0, 184, 148, ${opacity})`, // Line color
        strokeWidth: 2, // Line width
      },
    ],
  };

  // Configuration for the line chart
  const chartConfig = {
    backgroundGradientFrom: 'white', // Background color
    backgroundGradientTo: 'white', // Background color
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={390}
        height={290}
        chartConfig={chartConfig}
        bezier // Use bezier curve for smoother lines
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
