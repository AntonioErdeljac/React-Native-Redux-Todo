import React from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {connect} from "react-redux";

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      task: '',
    };

    this.handleAddTask = ev => {
        this.props.onAddTask(this.state.task)

    }


  }


  render(){
    return (  
      <View>
        <Text style={styles.header}>
            Redux todo app
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter a task."
            placeholderTextColor="#fff" 
            value={this.state.task}
            onChange={ev => this.setState({task: ev.nativeEvent.text})}
          ></TextInput>
          <TouchableOpacity onPress={this.handleAddTask} style={styles.button}><Text style={styles.buttonText}>Add</Text></TouchableOpacity>
          
          <View>
            <Text>Tasks:</Text>
          </View>
          {
            (this.props.tasks || []).map((task, i) => {
              return (
                  <View key={i}>
                    <Text>{task.text}</Text>
                  </View>
              )
            })
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2d89e5',
    padding: 10,
    margin: 20,
    borderRadius: 30
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  container: {
    backgroundColor: '#F5FCFF',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d89e5',
    color: '#fff',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    fontSize: 15,
    backgroundColor: '#2d89e5',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  }
});

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  onAddTask: text => 
    dispatch({type: 'ADD_TASK', task: {text: text}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);