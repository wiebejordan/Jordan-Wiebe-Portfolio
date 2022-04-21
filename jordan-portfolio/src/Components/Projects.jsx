import React from 'react';
import { Grid, Image, Divider, Button, Modal, Header } from 'semantic-ui-react'
import '../Components/Landing.css'
import 'semantic-ui-css/semantic.min.css'


const Projects = () => {
  const [open, setOpen] = React.useState(false),
        [openTwo, setOpenTwo] = React.useState(false),
        [openThree, setOpenThree] = React.useState(false),
        [openFour, setOpenFour] = React.useState(false);
  return(
    <div>
      
      <Divider horizontal><h1>WEB</h1></Divider>
      

      <Grid stackable centered columns={2}>
      <Grid.Row  >
      <Grid.Column>
        <div className="project-image-wrapper">
 					<h2>Fortress EHR</h2>
           <h6>React/Redux/Chart.js</h6>
           <Modal
      onClose={() => setOpenTwo(false)}
      onOpen={() => setOpenTwo(true)}
      open={openTwo}
      trigger={<Image
        className='events-image'
        size='big'
        bordered
        target='_blank' 
        src='https://i.imgur.com/xsYAPNf.png' 
        />}
    >
      <Modal.Header>Fortress EHR</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://i.imgur.com/xsYAPNf.png' wrapped />
        <Modal.Description >
          <Header>React/Redux/Express/MUI/Chart.js</Header>
          <p>
          Fortress is an electronic medical records application built for use in underdeveloped/underprivileged communities around the world. It tracks patients and their interactions with health professionals with a safe and secure system. Fortress is also designed to be used with the language(s) used in the areas it is deployed.

          </p>
          <p>- Uses a Heroku database with hashed user authentication.</p>
          <p>- UI created with reusable Material UI components</p>
          <p>
          - Multiple auth levels give users different access to reading/writing patient records.
          </p>
          <p>- User inactivity timeout feature blurs screen and requires user password to protect patient confidentiality.</p>

          <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/zB3S0TM.png' wrapped />
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/5kv9VF8.png' wrapped />
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/HHkTzDi.png' wrapped />
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/EkL5mHo.png' wrapped />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpenTwo(false)}>
          exit
        </Button>
        {/* <Button
          color='blue'
          content="view website"
          onClick={() => setOpenTwo(false)}
          href='https://socailevent.web.app/'
        /> */}
      </Modal.Actions>
    </Modal>
 					
 				</div>
      </Grid.Column>
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
 					<h2>Suunto 9</h2>
           <h6>HTML, CSS, Javascript</h6>
           <Modal
      onClose={() => setOpenFour(false)}
      onOpen={() => setOpenFour(true)}
      open={openFour}
      trigger={<Image
        className='events-image'
        size='big'
        bordered
        target='_blank' 
        src='https://i.imgur.com/CH8M7h9.jpg' 
        
        />}
    >
      <Modal.Header inverted>Suunto 9</Modal.Header>
      <Modal.Content inverted style={{backgroundColor: 'black'}} scrolling>
        <Modal.Description >
          <Header inverted>HTML/CSS/Javascript</Header>
          <b style={{color: 'white'}}>
          I designed a product page for the Suunto 9 sports watch from a short script using HTML, CSS and Javascript.
          The webpage is fully responsive and includes a photo slideshow that also highlights different brand icons.
          </b>
          
        
        </Modal.Description>
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/l66IXMs.png' wrapped />
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/htfTtxL.png' wrapped />
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/JLIxigG.png' wrapped />
        <Image style={{margin: '10px'}} size='huge' src='https://i.imgur.com/SstWkpQ.png' wrapped />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpenFour(false)}>
          exit
        </Button>
        <Button
          color='blue'
          content="view on CodeSandbox"
          onClick={() => setOpenTwo(false)}
          href='https://codesandbox.io/s/objective-goldwasser-op711'
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
         href='https://drive.google.com/file/d/1uXQe5qWl4IdrV5LZnLS14qPvhgNF4oQG/view?usp=sharing'
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
         href='https://drive.google.com/file/d/1-1dDdsT6ZI8O-4FRmcRTLbeph23ddQPN/view?usp=sharing'
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
        href='https://drive.google.com/file/d/1loJO4jys5th5oGcukpWPOTF5-m_ePO2J/view?usp=sharing'
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