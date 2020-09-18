import React from 'react';
import {Image, Grid} from 'semantic-ui-react'


const Certifications = () => {
  return(
    <div>
      <Grid centered columns={1}>
       <Image 
         size='medium'
         bordered
         href='https://www.youracclaim.com/badges/dd8f1d1d-7b6a-49d5-9495-2f917f80bf09/public_url'
         target='_blank' 
         src='https://i.imgur.com/dG7E9oI.png'
        
          />
        </Grid>
    </div>
  )
}

export default Certifications;