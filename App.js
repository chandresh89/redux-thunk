import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from './actions/pageList';

class App extends Component {
  incrementCount() {
    let {actions} = this.props;
    actions.getPageList();
  }
  render() {
    const {pageList} = this.props;
    const data = pageList.data;
    console.log('render', data);
    return (
      <View styles={styles.container}>
        <Button title="Get Employee" onPress={() => this.incrementCount()} />
        {/* <View style={styles.employeeWrapper}>
          <Text style={styles.textCenter}>
            Employee_id : {pageList.data[0].id}
          </Text>
          <Text style={styles.textCenter}>
            Employee Name : {pageList.data[0].id}
          </Text>
          <Text style={styles.textCenter}>
            Employee Salary : {pageList.data[0].id}
          </Text>
          <Text style={styles.textCenter}>
            Employee Age : {pageList.data[0].id}
          </Text>
        </View> */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.employeeWrapper}>
              <Text style={styles.textCenter}>Employee_id : {item.id}</Text>
              <Text style={styles.textCenter}>
                Employee Name : {item.employee_name}
              </Text>
              <Text style={styles.textCenter}>
                Employee Salary : {item.employee_salary}
              </Text>
              <Text style={styles.textCenter}>
                Employee Age : {item.employee_age}
              </Text>
            </View>
          )}
          // ListFooterComponent={this.render_FlatList_footer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1,
  },
});

const mapStateToProps = (state) => ({
  pageList: state.pageList.pageList,
});

const ActionCreators = Object.assign({}, pageActions);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
