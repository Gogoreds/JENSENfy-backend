const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post('/login', (req, res) => {
  const spotifyApi = new.SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  })
})