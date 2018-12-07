import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { h,w } from "./src/constants/Dimensions";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class App extends Component {
  render() {
    console.log(w)
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Ionicons name='md-menu' style={{fontSize: 30, marginLeft: 15}} color='#000'/>
            <Text style={{fontSize: 27, color: '#000', marginLeft: 30, fontFamily: 'serif'}}>Pennysaver</Text>
          </View>
        </View>

        <View style={styles.expensesCardContainer}>
          <View style={styles.expensesCard}>
            <View style={styles.cardTitle}>
              <Text style={{fontSize: 18, color: '#000', fontFamily: 'serif'}}>Доходы</Text>
            </View>
          </View>
        </View>

        <View style={styles.profitCardContainer}>
          <View style={styles.profitCard}>
            <View style={styles.cardTitle}>
              <Text style={{fontSize: 18, color: '#000', fontFamily: 'serif'}}>Расходы</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <Ionicons name='md-add-circle' style={{fontSize: 35, marginLeft: 15}} color='#000'/>
            <Ionicons name='md-remove' style={{fontSize: 40, marginLeft: 15}} color='#000'/>
            <Ionicons name='md-analytics' style={{fontSize: 35, marginLeft: 15}} color='#000'/>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#DAA520',
    height: 60,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    height: 60,
    width: w,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  expensesCardContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 5,
  },
  expensesCard: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1
  },
  profitCardContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 5,
  },
  profitCard: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  }
});
