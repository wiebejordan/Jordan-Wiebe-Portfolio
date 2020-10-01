import React from 'react';
import {Container, Image} from 'semantic-ui-react';


const AboutMe = () => {


  return(
    <Container textAlign='justified'>
    <p>
      Hello! My name is Jordan! I'm originally from Ohio but I moved to Salt Lake City six years ago to chase the snow, and I ended up settling down for good here in SLC. I am married to the love of my life and our seven month old daughter is the best thing ever!
    </p>

    <p>I began my professional life in video production, though my interest in video began when I picked up a camera to film my friends snowboarding. Eventually I created a brand called So Far So Good, which helped me to learn video editing and videography, brand development, social media management, design, and marketing.</p>

    <p>
      Over a few years I sharpened my skills well enough to work for Go Video Go and Foursteps.io as video editor and video director, respectively. I created videos and motion graphics for companies like 97th Floor, GamerSensei and Boeing.
    </p>

    <p>
      I decided to add to my skills by learning web development through DevMountain. With Covid-19 impacting hiring across industries, I wanted to make sure I had more than one viable skill under my belt. I have since created responsive full stack web applications from the ground up, both on my own and in a remote group setting.
    </p>

    <p>
    {/* <Image src='https://i.imgur.com/IZiW1ST.jpg' size='tiny' floated='left' /> */}
      Now as a full stack web developer I can bring design, branding, and multi media implementation skills to boost a startup or refine the web presence of already established companies.
    </p>

    <p>I look forward to working with you! </p>

    <p><i>Jordan</i></p>

    <p>View my resume <a href='https://docs.google.com/document/d/14RAdRixaZCLoPRA-Ebv-mbGNRxdp13_1Q0l9oUK-8P4/edit?usp=sharing'>here</a></p>
    </Container>
  )
}

export default AboutMe;