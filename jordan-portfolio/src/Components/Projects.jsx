import React from 'react';
import { Grid, Image, Divider, Button, Modal, Header } from 'semantic-ui-react'
import '../Components/Landing.css'
import 'semantic-ui-css/semantic.min.css'


const Projects = () => {
  const [open, setOpen] = React.useState(false),
        [openTwo, setOpenTwo] = React.useState(false),
        [openThree, setOpenThree] = React.useState(false);
  return(
    <div>
      
      <Divider horizontal><h1>WEB</h1></Divider>
      

      <Grid stackable centered columns={2}>
      <Grid.Row  >
      <Grid.Column>
        <div className="project-image-wrapper">
        <h2>ScaleHistorySLC</h2>
        <h6>React, Redux, Express</h6>
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Image
        className='events-image' 
        size='big'
        bordered
        target='_blank' 
        src='https://i.imgur.com/0Y5rdgH.png'
       
         />}
    >
      <Modal.Header>ScaleHistorySLC</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://i.imgur.com/0Y5rdgH.png' wrapped />
        <Modal.Description>
          <Header>React/Redux/Express/PostgreSQL</Header>
          
          <p>
          In less than three weeks, I developed a fully responsive website from the ground up to allow players to register for tabletop wargaming events, chat with teammates and view their armies.

          </p>
          <p>- After registering for the website, players can register for events, after which they will receive an email with in depth event information. Players will see a list of their teammates and be able to chat with them in real time using Socket.io.</p>
          <p>- Allows users to login and register using secure authentication methods using bcrypt.js to encrypt passwords and store in a safe location.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          exit
        </Button>
        <Button
          color='blue'
          content="view website"
          onClick={() => setOpen(false)}
          href='https://scalehistoryslc.com'
        />
      </Modal.Actions>
    </Modal>
         </div>
      </Grid.Column>

      <Grid.Column>
        <div className="project-image-wrapper">
        <h2>BA Order Dice</h2>
        <h6>React, Redux, React Hooks</h6>
        <Modal
      onClose={() => setOpenThree(false)}
      onOpen={() => setOpenThree(true)}
      open={openThree}
      trigger={<Image
        className='events-image' 
        size='big'
        bordered
        target='_blank' 
        src='https://i.imgur.com/63IMnuL.png'
       
         />}
    >
      <Modal.Header>BA Order Dice App</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://i.imgur.com/63IMnuL.png' wrapped />
        <Modal.Description>
          <Header>React/Redux/React Hooks</Header>
          
          <p>
          Bolt Action is a tabletop game in which each game piece is represented by a colored dice. The dice from both players are put in a bag and drawn randomly to determine who's turn it is. This is not Covid-19 or social distance friendly, so I created a responsive app that mimics these mechanics.  

          </p>
          <p>- Using React Hooks and Javascript array methods, players can choose how many dice they want in the "bag," and using the Math.random function, dice are randomly pulled from the bag.</p>
          <p>- The app tracks how many of each player's dice are in the bag, how many they have in total, and allows the user to take certain actions for removing dice from the game or from the bag per the game's rules.</p>
          <p>- If the user makes a mistake, he or she can undo that action and restore previous state thanks to Redux.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpenThree(false)}>
          exit
        </Button>
        <Button
          color='blue'
          content="view website"
          onClick={() => setOpenThree(false)}
          href='http://baorderdiceapp.com/'
        />
      </Modal.Actions>
    </Modal>
         </div>
      </Grid.Column>


      <Grid.Column>
        <div className="project-image-wrapper">
 					<h2>Events</h2>
           <h6>React, Redux, Firebase</h6>
           <Modal
      onClose={() => setOpenTwo(false)}
      onOpen={() => setOpenTwo(true)}
      open={openTwo}
      trigger={<Image
        className='events-image'
        size='big'
        bordered
        target='_blank' 
        src='https://i.imgur.com/Xy0ZYrd.png' 
        
        />}
    >
      <Modal.Header>Events</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://i.imgur.com/Xy0ZYrd.png' wrapped />
        <Modal.Description >
          <Header>React/Redux/Express/Firebase</Header>
          <p>
          Developed a web app alongside a team of five developers in a remote setting that helps users find concerts, parties, get togethers and other events and connect with other people attending those events.

          </p>
          <p>- Using Google Firebase, created a database using Google Firestore and connected it to React.</p>
          <p>- Created styling and UI with Semantic UI</p>
          <p>
          - Users can login and register using secure authentication through our app or by using their Google profiles.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpenTwo(false)}>
          exit
        </Button>
        <Button
          color='blue'
          content="view website"
          onClick={() => setOpenTwo(false)}
          href='https://socailevent.web.app/'
        />
      </Modal.Actions>
    </Modal>
 					
 				</div>
      </Grid.Column>
      </Grid.Row>

      </Grid>

      <Divider horizontal><h1>Video</h1></Divider>

      <Grid stackable centered columns={2}>
      <Grid.Row centered  >
      
      <Grid.Column >
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
         href='https://www.dropbox.com/s/xi6va6ya0di5jap/4stepsintroFINALV2.1.mp4?dl=0'
         target='_blank' 
         src='https://i.imgur.com/g5tyu6S.png'
        
          />
         </div>
      </Grid.Column>


      <Grid.Column>
        <div className="project-image-wrapper">
 					<h4>Long Island Shark Collaborative</h4>
           <h6>Adobe Premiere</h6>
        <Image
        className='events-image'
        size='big'
        bordered
        href='https://youtu.be/oIuZGqwFVzk'
        target='_blank' 
        src='https://i.imgur.com/r6FgoYM.jpg' 
        
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