import React from "react";
import { StyleSheet, Button, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import { fetchEmployee } from "../reudx/actions/employeeAction";
import Item from "../component/EmployeeRow";

class EmployeeListScreen extends React.Component {
  state = {
    employeeList: null,
  };
  renderItem = ({ item }) => (
    <Item navigation={this.props.navigation} title={item.title} />
  );
  UNSAFE_componentWillMount() {
    this.props.fetchEmployee();
    this.transformData(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.transformData(nextProps);
  }

  transformData = ({ employees }) => {
    try {
      const data = employees;
      const keys = Object.keys(data);
      this.setState({
        employeeList: keys.map((key) => ({ id: key, title: data[key] })),
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="Add Employee"
          onPress={() => this.props.navigation.navigate("Add Employee")}
        />
        {this.state.employeeList && (
          <FlatList
            data={this.state.employeeList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

const mapStateToProps = (state) => ({
  employees: state.employeeList,
});

export default connect(mapStateToProps, { fetchEmployee })(EmployeeListScreen);
