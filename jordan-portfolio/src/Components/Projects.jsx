import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react'
import '../Components/Landing.css'
import 'semantic-ui-css/semantic.min.css'


const Projects = () => {

  return(
    <div>
      
      <Divider horizontal><h1>WEB</h1></Divider>
      

      <Grid stackable centered columns={2}>
      <Grid.Row  >
      <Grid.Column>
        <div className="project-image-wrapper">
        <h2>ScaleHistorySLC</h2>
        <h6>React, Redux, Socket.io</h6>
        <Image
         className='events-image' 
         size='big'
         bordered
         href='https://scalehistoryslc.com'
         target='_blank' 
         src='https://i.imgur.com/0Y5rdgH.png'
        
          />
         </div>
      </Grid.Column>

      <Grid.Column>
        <div className="project-image-wrapper">
 					<h2>Events</h2>
           <h6>React, Redux, Firebase, Semantic UI</h6>
        <Image
        className='events-image'
        size='big'
        bordered
        href='https://socailevent.web.app/'
        target='_blank' 
        src='https://i.imgur.com/Xy0ZYrd.png' 
        
        />
 					
 				</div>
      </Grid.Column>
      </Grid.Row>

      </Grid>

      <Divider horizontal><h1>Video</h1></Divider>

      <Grid stackable centered columns={2}>
      <Grid.Row centered  >
      
      <Grid.Column centered>
        <div className="project-image-wrapper">
        <h2>Boeing QoE</h2>
        <h6>After Effects</h6>
        <Image
         className='events-image' 
         size='big'
         bordered
         href='https://www.dropbox.com/s/m2wnesjmm19oeax/Boeing%20Quality%20of%20Excellence.mov?dl=0'
         target='_blank' 
         src='https://i.imgur.com/YY9uGtR.png'
        
          />
         </div>
      </Grid.Column>
      
      <Grid.Column>
        <div className="project-image-wrapper">
        <h2>Foursteps.io</h2>
        <h6>After Effects</h6>
        <Image
         className='events-image' 
         size='big'
         bordered
         href='https://www.dropbox.com/h?preview=4stepsintroFINALV2.1.mp4'
         target='_blank' 
         src='https://i.imgur.com/g5tyu6S.png'
        
          />
         </div>
      </Grid.Column>


      
      <Grid.Column>
        <div className="project-image-wrapper">
 					<h2>Gamer Sensei</h2>
           <h6>FCPX, After Effects</h6>
        <Image
        className='events-image'
        size='big'
        bordered
        href='https://www.dropbox.com/s/in7iao02jyw4qb3/Gamer%20Sensai%20V5%28V7%29.mov?dl=0'
        target='_blank' 
        src='https://i.imgur.com/3aJr6fT.png' 
        
        />
 					
 				</div>
      </Grid.Column>
      </Grid.Row>

      </Grid>

      

      
    
    </div>
  )
}

export default Projects;