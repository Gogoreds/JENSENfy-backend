# JENSENfy-backend

## Create backend project

```
cd ~
cd ws
mkdir edu-backend
cd edu-backend
npm init -y
mv app.js server.js
touch .env
touch app.json
touch Procfile
touch Dockerfile
touch request.rest
mkdir routes
touch routes/healthcheck.js 
touch routes/user.js
mkdir __tests__
touch ./__tests__/component.js
touch ./__tests__/unit.js
npm install express --save
npm install healthcheck --save
npm install dotenv --save
npm install cors --save
npm install jsonwebtoken --save
npm install nodemon --save-dev
npm install jest --save-dev
npm install jest-runner-groups --save-dev
code .
```

## Create backend server



```
| require("dotenv").config() |
| --- | --- |
|     | const express = require("express"); |
|     | const spotifyWebApiNode = require("spotify-web-api-node"); |
|     | const cors = require("cors") |
|     | const lyricsFinder = require("lyrics-finder") |
|     | const bodyParser = require("body-parser") |
|     |     |
|     | const app = express(); |
|     |     |
|     | var corsOptions = { |
|     | origin: "http://localhost:8081" |
|     | };  |
|     |     |
|     | app.use(cors(corsOptions)); |
|     |     |
|     | app.use(express.json()); |
|     |     |
|     | app.use(express.urlencoded({ extended: true })); |
|     |     |
|     | app.use(express.urlencoded({ extended: true })); |
|     |     |
|     | const db = require("./rest-api/models"); |
|     | db.mongoose |
|     | .connect(db.url, { |
|     | useNewUrlParser: true, |
|     | useUnifiedTopology: true |
|     | })  |
|     | .then(() => { |
|     | console.log("Connected to the database!"); |
|     | })  |
|     | .catch(err => { |
|     | console.log("Cannot connect to the database!", err); |
|     | process.exit(); |
|     | }); |
|     |     |
|     | // simple route |
|     | app.get("/", (req, res) => { |
|     | res.json({ message: "users database" }); |
|     | }); |
|     |     |
|     | require("./rest-api/routes/user.routes")(app); |
|     |     |
|     | app.use(cors()) |
|     | app.use(bodyParser.json()) |
|     | app.use(bodyParser.urlencoded({ extended: true })) |
|     |     |
|     | app.post("/refresh", (req, res) => { |
|     | const refreshToken = req.body.refreshToken |
|     | const spotifyApi = new spotifyWebApiNode({ |
|     | redirectUri: process.env.REDIRECT_URI, |
|     | clientId: process.env.CLIENT_ID, |
|     | clientSecret: process.env.CLIENT_SECRET, |
|     | refreshToken, |
|     | })  |
|     |     |
|     | spotifyApi |
|     | .refreshAccessToken() |
|     | .then(data => { |
|     | res.json({ |
|     | accessToken: data.body.accessToken, |
|     | expiresIn: data.body.expiresIn, |
|     | })  |
|     | })  |
|     | .catch(err => { |
|     | console.log(err) |
|     | res.sendStatus(400) |
|     | })  |
|     | })  |
|     |     |
|     | app.post("/login", (req, res) => { |
|     | const code = req.body.code |
|     | const spotifyApi = new spotifyWebApiNode({ |
|     | redirectUri: process.env.REDIRECT_URI, |
|     | clientId: process.env.CLIENT_ID, |
|     | clientSecret: process.env.CLIENT_SECRET, |
|     | })  |
|     |     |
|     | spotifyApi |
|     | .authorizationCodeGrant(code) |
|     | .then(data => { |
|     | res.json({ |
|     | accessToken: data.body.access_token, |
|     | refreshToken: data.body.refresh_token, |
|     | expiresIn: data.body.expires_in, |
|     | })  |
|     | })  |
|     | .catch(err => { |
|     | res.sendStatus(400) |
|     | })  |
|     | })  |
|     |     |
|     | app.get("/lyrics", async (req, res) => { |
|     | const lyrics = |
|     | (await lyricsFinder(req.query.artist, req.query.track)) \| "No Lyrics Found" |
|     | res.json({ lyrics }) |
|     | })  |
|     |     |
|     | require("./rest-api/routes/user.routes")(app); |
|     |     |
|     | const PORT = process.env.PORT \| 8080; |
|     | app.listen(PORT, () => { |
|     | console.log(`Server is running on port ${PORT}.`); |
|     | }); |
```
