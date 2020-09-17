import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import 'semantic-ui-css/semantic.min.css'
import {Segment, Container, Grid, Image, Menu, Header} from 'semantic-ui-react'



class App extends Component {
  state = {
    activeItem: 'aboutMe'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container className="App">
        <Container className="App">
      <Grid columns={1}>
        <Grid.Column>
        <Image
          size='medium' 
          centered
          circular
          src='https://i.imgur.com/uIaYZDE.png'>
            
          </Image>
        </Grid.Column>
      </Grid>
      
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header size='huge'>
            Jordan Wiebe
              <Header.Subheader>
                Web Developer/Video Editor 
              </Header.Subheader>
            </Header>
        </Grid.Column>
      </Grid.Row>

     
    </Container>
      <Menu compact>
  

        <Menu.Item
          name='aboutMe'
          active={activeItem === 'aboutMe'}
          onClick={this.handleItemClick}
        >
          About Me
        </Menu.Item>

        <Menu.Item
          name='skills'
          active={activeItem === 'skills'}
          onClick={this.handleItemClick}
        >
          Skills
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='contactInfo'
          active={activeItem === 'contactInfo'}
          onClick={this.handleItemClick}
        >
          Contact Info
        </Menu.Item>
      </Menu>

      <Segment>

        {this.state.activeItem === 'aboutMe'
        ? <AboutMe/>
        :null}

        {this.state.activeItem === 'skills'
        ? <Skills/>
        :null}

        {this.state.activeItem === 'projects'
        ? <Projects/>
        :null}

        {this.state.activeItem === 'contactInfo'
        ? <Contact/>
        :null}
      </Segment>
      </Container>
    )
  }
}
    

export default App;
