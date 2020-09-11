import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import '../Components/Landing.css'


const Landing = () => {

  return(
    <div>
    <Grid>
      
      <Grid.Row columns={2}>
      <Grid.Column>
        <Image
         className='shslc-image' 
         as='a'
         size='big'
         round
         href='https://scalehistoryslc.com'
         target='_blank' 
         src='https://media-exp1.licdn.com/dms/image/C562DAQFNDEXMiaTA8w/profile-treasury-image-shrink_8192_8192/0?e=1599854400&v=beta&t=8LNQ-ybjsF6OyS8IV9TYFABRoMOmXBFEcDMB9WkinlQ' />
      </Grid.Column>
      <Grid.Column>
        <Image
        className='events-image'
        as='a'
        size='big'
        href='http://google.com'
        target='_blank' 
        src='https://media-exp1.licdn.com/dms/image/C562DAQEJljR7VOtqLQ/profile-treasury-image-shrink_1280_1280/0?e=1599854400&v=beta&t=kB2yV3R8eskF95R14l2FN9Hg418UN-0NEjS4w3LjY5Y' />
      </Grid.Column>
      {/* <Grid.Column>
        <Image src='https://media-exp1.licdn.com/dms/image/C562DAQEjeJEuhie2VA/profile-treasury-image-shrink_1280_1280/0?e=1599854400&v=beta&t=Dj_GHYltwLtTLkJHHSmz8UGsWhBFT3QQlWKlCiSGHTc' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://media-exp1.licdn.com/dms/image/C562DAQEjeJEuhie2VA/profile-treasury-image-shrink_1280_1280/0?e=1599854400&v=beta&t=Dj_GHYltwLtTLkJHHSmz8UGsWhBFT3QQlWKlCiSGHTc' />
      </Grid.Column> */}
      </Grid.Row>
    </Grid>
    </div>
  )
}

export default Landing;