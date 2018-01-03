/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, FooterTab, Footer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamOneCounter: 0,
      teamTwoCounter: 0,
    }
  }

  counter(team, count) {
    const teamOnePoints = this.state.teamOneCounter + count;
    const teamTwoPoints = this.state.teamTwoCounter + count;
    this.setState({
      teamOneCounter: team === 1 && teamOnePoints >= 0 ? teamOnePoints : this.state.teamOneCounter,
      teamTwoCounter: team === 2 && teamTwoPoints >= 0 ? teamTwoPoints : this.state.teamTwoCounter,
    });
  }

  reset = () => {
    this.setState({
      teamOneCounter: 0,
      teamTwoCounter: 0,
    });
  }
  render() {
    const {
      teamOneCounter,
      teamTwoCounter
    } = this.state;

    return (
      <Container>
        <Header style={{ backgroundColor: '#5cb85c' }}>
          <Text style={{ alignSelf: 'center', fontSize: 20, color: '#eee' }}>
            TEAM
          </Text>
        </Header>
        <Content>
          <Grid>
            <Col style={{ borderRightWidth: 2, borderColor: '#ccc', height: 300 }}>
              <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, color: '#5cb85c' }}>
                  EAGLE
                </Text>
              </View>
              <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, color: '#aaa' }}>
                  { teamOneCounter }
                </Text>
              </View>
              <View>
                <Button light style={{ width: '50%', alignSelf: 'center', marginTop: 10 }}>
                  <Text style={styles.text} onPress={() => this.counter(1,1)}>+1</Text>
                </Button>
              </View>
              <View>
                <Button success style={{ width: '50%', alignSelf: 'center', marginTop: 10 }}>
                  <Text style={styles.text} onPress={() => this.counter(1,-1)}>-1</Text>
                </Button>
              </View>
              <View>
                <Button light style={{ width: '50%', alignSelf: 'center', marginTop: 10 }}>
                  <Text style={styles.text} onPress={() => this.counter(1,3)}>+3</Text>
                </Button>
              </View>
            </Col>
            <Col style={{ height: 200 }}>
              <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, color: '#5cb85c' }}>
                  TIGER
                </Text>
              </View>
              <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, color: '#aaa' }}>
                  { teamTwoCounter }
                </Text>
              </View>
              <View>
                <Button light style={{ width: '50%', alignSelf: 'center', marginTop: 10 }}>
                  <Text style={styles.text} onPress={() => this.counter(2,1)}>+1</Text>
                </Button>
              </View>
              <View>
                <Button success style={{ width: '50%', alignSelf: 'center', marginTop: 10 }}>
                  <Text style={styles.text} onPress={() => this.counter(2,-1)}>-1</Text>
                </Button>
              </View>
              <View>
                <Button light style={{ width: '50%', alignSelf: 'center', marginTop: 10 }}>
                  <Text style={styles.text} onPress={() => this.counter(2,3)}>+3</Text>
                </Button>
              </View>
            </Col>
          </Grid>
        </Content>
        <Footer>
          <View>
            <Button success full style={{ alignSelf: 'center', height: '100%' }}>
              <Text style={styles.text} onPress={this.reset}>Reset</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    width: '100%',
    padding: 10,
  },
});
