const express = require('express');
const path = require('path');

const app = express()

app.use(express.json())

app.use(require('prerender-node').set('prerenderToken', 'T37f8mmTrkgiTtu79rEa'));

app.use(express.static(`${__dirname}/../build`))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(5000, () => console.log('Server running on 5000'))