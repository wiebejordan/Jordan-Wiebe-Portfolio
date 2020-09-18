import React from 'react';
import { List, Grid, Image } from 'semantic-ui-react'

const Skills = () => {


  return(
    <div>
    <List bulleted horizontal size='large'>
    <List.Item>React</List.Item>
    <List.Item>Javascript</List.Item>
    <List.Item>HTML</List.Item>
    <List.Item>CSS</List.Item>
    <List.Item>Redux</List.Item>
    <List.Item>Axios</List.Item>
    <List.Item>RESTful API</List.Item>
    <List.Item>Node</List.Item>
    <List.Item>Express</List.Item>
    <List.Item>Heroku</List.Item>
    <List.Item>PostgreSQL</List.Item>
    <List.Item>After Effects</List.Item>
    <List.Item>Final Cut Pro X</List.Item>
    <List.Item>Git & Github</List.Item>
    <List.Item>Bcrypt.js</List.Item>
    <List.Item>Socket.io</List.Item>
    <List.Item>NodeMailer</List.Item>
    <List.Item>Photoshop</List.Item>
    <List.Item>Google Firebase</List.Item>
    <List.Item>Semantic UI</List.Item>
    <List.Item>Mac OS</List.Item>
    </List>

    <Grid centered columns={1}>
       <Image 
         size='small'
         bordered
         href='https://www.youracclaim.com/badges/dd8f1d1d-7b6a-49d5-9495-2f917f80bf09/public_url'
         target='_blank' 
         src='https://i.imgur.com/dG7E9oI.png'
        
          />
        </Grid>
    </div>
    
  )
}

export default Skills;