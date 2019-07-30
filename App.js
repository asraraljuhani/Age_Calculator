import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
import { Image, TextInput, Dimensions, Button,Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';
// You can import from local files
import AssetExample from './components/AssetExample';
var { width, height } = Dimensions.get('window');
// or any pure javascript modules available in npm

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_in: '1998-07-29',
      date_out: year + '-' + month + '-' + date,
    };
  }
  _age() {
  
    var DOB =  this.state.date_in;
    
 var today = new Date();
    var birthDate = new Date(DOB);
    var cal = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        cal = cal - 1;
    }

   
     Alert.alert('Your Age is '+cal.toString());
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 10 }}>
          Enter the date you were born :
        </Text>

        <DatePicker
          style={{ padding: 10 }}
          date={this.state.date_in}
          mode="date"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate={this.state.date_out}
          showIcon={false}
          customStyles={{
            dateInput: {
              alignItems: 'flex-start',
              padding: 5,
            },
          }}
          onDateChange={date_in => {
            this.setState({ date_in: date_in });
          }}
        />

        <Button onPress={ this._age.bind(this) } title=" Click Here To Calculate Your Age " />
 
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
