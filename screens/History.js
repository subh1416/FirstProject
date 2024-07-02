import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

const History = () => {
  const {height} = useWindowDimensions();
  StatusBar.setBackgroundColor('#ffffff');
  StatusBar.setBarStyle('dark-content');
  const navigationBarHeight = StatusBar.currentHeight || 0;

  return (
    <ScrollView
      style={[styles.container, {height: height - navigationBarHeight}]}>
      <View style={[styles.content, {height: height - navigationBarHeight}]}>
        <Text style={{fontSize: 35, color: 'black', padding: 7}}>History</Text>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View sty>
            <Text style={{color: 'black'}}>hkhhkhkhkkhkhkkh</Text>


            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 20}}>
              <Text style={{color: 'white',fontSize:12}}>Date : 12-07-2039</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Water Test - 1
              </Text>
              <View style={styles.smallbox}>
                <Text style={{color:'white',fontSize:20}}>View</Text>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View sty>
            <Text style={{color: 'black'}}>hkhhkhkhkkhkhkkh</Text>


            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 20}}>
              <Text style={{color: 'white',fontSize:12}}>Date : 12-07-2039</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Water Test - 1
              </Text>
              <View style={styles.smallbox}>
                <Text style={{color:'white',fontSize:20}}>View</Text>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View sty>
            <Text style={{color: 'black'}}>hkhhkhkhkkhkhkkh</Text>


            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 20}}>
              <Text style={{color: 'white',fontSize:12}}>Date : 12-07-2039</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Water Test - 1
              </Text>
              <View style={styles.smallbox}>
                <Text style={{color:'white',fontSize:20}}>View</Text>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View sty>
            <Text style={{color: 'black'}}>hkhhkhkhkkhkhkkh</Text>


            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 20}}>
              <Text style={{color: 'white',fontSize:12}}>Date : 12-07-2039</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Water Test - 1
              </Text>
              <View style={styles.smallbox}>
                <Text style={{color:'white',fontSize:20}}>View</Text>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View sty>
            <Text style={{color: 'black'}}>hkhhkhkhkkhkhkkh</Text>


            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 20}}>
              <Text style={{color: 'white',fontSize:12}}>Date : 12-07-2039</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Water Test - 1
              </Text>
              <View style={styles.smallbox}>
                <Text style={{color:'white',fontSize:20}}>View</Text>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View sty>
            <Text style={{color: 'black'}}>hkhhkhkhkkhkhkkh</Text>


            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 20}}>
              <Text style={{color: 'white',fontSize:12}}>Date : 12-07-2039</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Water Test - 1
              </Text>
              <View style={styles.smallbox}>
                <Text style={{color:'white',fontSize:20}}>View</Text>

              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#338594',
    marginBottom: 65,
  },
  content: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'white',
    padding: 10,
  },
  box: {
    backgroundColor: '#6082B6',
    marginTop: 15,
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
    padding: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  smallbox:{
    backgroundColor: '#5D76A9',
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'white',
  
    alignItems:'center',
    justifyContent:'center',
    height: 50

  }
});

export default History;
