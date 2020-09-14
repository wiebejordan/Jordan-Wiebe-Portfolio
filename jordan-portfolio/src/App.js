import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing'
import 'semantic-ui-css/semantic.min.css'
import {Segment, Container, Grid, Image, List} from 'semantic-ui-react'
import headshot from '/Users/jordan/devmountain/basecamp/portfolio/jordan-portfolio/src/Components/headshot.png'

function App() {
  return (
    <Container className="App">
      <Grid.Row columns={1}>
        <Grid.Column>
        <Image
          size='medium' 
          centered
          circular
          src={headshot}>
            
          </Image>
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row columns={1}>
        <Grid.Column>
          <h1>Jordan Wiebe</h1>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <div className='list'>
          <List >
            <List.Item icon='marker' content='Salt Lake City, UT' />
          
            <List.Item
            icon='mail'
            content={<a href='wiebe.jordan@yahoo.com'>wiebe.jordan@yahoo.com</a>}
            />
    
            <List.Item
            icon='linkedin'
            content={<a href='https://www.linkedin.com/in/jordan-wiebe-54496b187/'>Linkdin</a>}
            />

            <List.Item
            icon='github'
            content={<a href='https://github.com/wiebejordan'>Github</a>}
            />
          </List>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Segment>
      
      <Landing/>
      </Segment>
    </Container>
  );
}

export default App;
