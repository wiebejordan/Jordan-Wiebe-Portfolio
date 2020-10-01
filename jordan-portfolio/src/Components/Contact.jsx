import React from 'react';
import { Grid, List } from 'semantic-ui-react'

const Contact = () => {


  return(
    <div>
       <Grid.Row columns={1}>
        <Grid.Column>
          <div className='landing-list'>
          <List size='big' >
            <List.Item icon='marker' content='Salt Lake City, UT' />
          
            <List.Item
            icon='mail'
            content={<a href='wiebe.jordan@yahoo.com'>wiebe.jordan@yahoo.com</a> }
            />

          <List.Item icon='file alternate outline' content={<a href='https://docs.google.com/document/d/14RAdRixaZCLoPRA-Ebv-mbGNRxdp13_1Q0l9oUK-8P4/edit?usp=sharing'>Resume</a>} />
          
    
            <List.Item
            icon='linkedin'
            content={<a href='https://www.linkedin.com/in/jordan-wiebe-54496b187/'>Linkedin</a>}
            />

            <List.Item
            icon='github'
            content={<a href='https://github.com/wiebejordan'>Github</a>}
            />
          </List>
          </div>
        </Grid.Column>
      </Grid.Row>
    </div>
  )
}

export default Contact;