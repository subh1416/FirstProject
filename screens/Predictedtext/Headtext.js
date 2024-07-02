import React from 'react';
import { View, Text } from 'react-native';

const Headtext = ({ apiData, apiData2 }) => {
  const field1Data = apiData2.map(item => parseFloat(item.field3));
  const sum = field1Data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = (sum / field1Data.length).toFixed(2);

  const tdsDrinkableRange = { min: 50, max: 100 };
  const phDrinkableRange = { min: 6.5, max: 8.5 };
  const tdsUsableRange = { min: 101, max: 500 };
  const phUsableRange = { min: 8.6, max: 9.5 };

  const isDrinkable = apiData >= tdsDrinkableRange.min &&
    apiData <= tdsDrinkableRange.max &&
    average >= phDrinkableRange.min &&
    average <= phDrinkableRange.max;

  const isUsableForOtherPurpose = apiData >= tdsUsableRange.min &&
    apiData <= tdsUsableRange.max &&
    average >= phUsableRange.min &&
    average <= phUsableRange.max;

  let textColor = 'black';
  let waterQualityText = "Water is not for use"; 

  if (isDrinkable) {
    waterQualityText = "Water is Drinkable";
    textColor = 'green';
  } else if (isUsableForOtherPurpose) {
    waterQualityText = "Not drinkable but usable for other purposes";
    textColor = 'orange';
  } else {
    textColor = 'red';
  }

  return (
    <View>
      <Text style={{ color: textColor, fontSize: 30 }}>{`${waterQualityText}`}</Text>
    </View>
  );
};

export default Headtext;
