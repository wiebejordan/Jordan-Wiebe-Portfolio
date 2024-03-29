import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import Footer from './Components/Footer'
import Certifications from './Components/Certifications'
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

      
      <Grid.Row columns={1} style={{marginBottom: '15px'}}>
        <Grid.Column>
          <Header size='huge' color='blue'>
            Jordan Wiebe
              <Header.Subheader>
                Front End Web Developer/Video Editor 
              </Header.Subheader>
            </Header>
        </Grid.Column>
      </Grid.Row>

      {/* <Grid columns={1}>
        <Grid.Column>
       <Image 
         size='tiny'
         href='https://www.youracclaim.com/badges/dd8f1d1d-7b6a-49d5-9495-2f917f80bf09/public_url'
         target='_blank' 
         src='https://i.imgur.com/dG7E9oI.png'
         />
         </Grid.Column>
        </Grid> */}

     
    </Container>
      <Menu  compact>
  

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

        {/* <Menu.Item
          name='cert'
          active={activeItem === 'cert'}
          onClick={this.handleItemClick}
        >
          Certifications
        </Menu.Item> */}

        <Menu.Item
          name='contactInfo'
          active={activeItem === 'contactInfo'}
          onClick={this.handleItemClick}
        >
          Contact 
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

        {this.state.activeItem === 'cert'
        ? <Certifications/>
        :null}
      </Segment>
      
      <footer>

      <Footer/>
      </footer>
      </Container>
    )
  }
}
    

export default App;
