import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import SegmentControl from  'react-native-animated-segment-control'

class App extends Component {
  onSegmentValueChange = index => {
    console.log('Selected Segment Index', index)
  }

  render() {
    return (
      <View style={styles.container}>
        <SegmentControl
          values={['Segment1', 'Segment2', 'Segment3', 'Segment4',]}
          selectedIndex={1}
          onChange={this.onSegmentValueChange}
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
    backgroundColor: '#F5FCFF',
  }
});

export default App
