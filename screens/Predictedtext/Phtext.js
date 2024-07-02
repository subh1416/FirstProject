import React from 'react';
import { View, Text } from 'react-native';

const Phtext = ({ apiData }) => {
  const field1Data = apiData.map(item => parseFloat(item.field3));
  const sum = field1Data.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const average = (sum / field1Data.length).toFixed(2);

  let pHStatus;
  let pHText;

  if (average > 9) {
    pHStatus = 'basic';
    pHText = 'The water is currently basic. Basic water can have a high pH, which may affect the taste and safety of the water. It is important to monitor and regulate the pH to ensure water quality and safety.';
  } else if (average < 6) {
    pHStatus = 'acidic';
    pHText = 'The water is currently acidic. Acidic water can have a low pH, which can also affect taste and safety. Proper pH control is essential to prevent harm to ecosystems and infrastructure.';
  } else {
    pHStatus = 'neutral';
    pHText = 'The water is currently neutral. A pH of 7 to  is considered neutral for drinking, and it generally indicates good water quality and safety.';
  }

  return (
    <View>
      <Text style={{ color: 'black', margin: 5, fontSize: 28 }}>
        {average}
      </Text>
      <Text style={{ color: 'black', margin: 5, fontSize: 19 }}>
        {pHText}
      </Text>
    </View>
  );
};

export default Phtext;
