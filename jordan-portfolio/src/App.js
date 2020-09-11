import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing'
import 'semantic-ui-css/semantic.min.css'
import {Segment, Container, Grid} from 'semantic-ui-react'

function App() {
  return (
    <Container className="App">
      <Grid.Row columns={1}>
        <Grid.Column>
          <h1>Jordan Wiebe</h1>
        </Grid.Column>
      </Grid.Row>
      <Segment>
      
      <Landing/>
      </Segment>
    </Container>
  );
}

export default App;
