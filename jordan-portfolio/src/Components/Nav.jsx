import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable >
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

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
    )
  }
}

export default Nav;