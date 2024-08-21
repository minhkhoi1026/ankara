# ANKARA BOARD GAME

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg?style=plastic)](http://www.ankaraboardgame.com) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](https://github.com/Bombanauts/Bombanauts/blob/master/LICENSE)

<img src="/public/images/AnkaraBoardGame.png" />

### Introduction & Gameplay

Ankara is a multiplayer game based on the board game Istanbul. You play a merchant moving around a grand bazaar, filling your wheelbarrow with goods, bartering, selling/buying, acquiring abilities, and most importantly, collecting rubies. The first person to collect 5 rubies wins.

### Architecture

Ankara is built with React, Express, and Firebase. Players are connected to Firebase's real-time / NoSQL database (via React-Redux-Firebase), which propagates state changes to all players. All data flows one way: game state changes are posted to the server, which processes the input and writes updates to Firebase, which then passes the new game state back down to clients/players.

<img src="/public/images/Architecture.png" width="550" />

## Secret prepare
We need a `secret` folder at root level with `firebase.server.json` and `firebase.client.json` files. These files are not included in the repository for security reasons.

To get these files, you need to create a Firebase project in [Firebase console](https://console.firebase.google.com/u/0/), then create Firebase web application follow the **Step 1** section of this instruction [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup).

**Database**: After that, you need to create a Realtime Database in Firebase console. You can do this by following the **Create a Database** section of this instruction [Connect your App to Firebase](https://firebase.google.com/docs/database/android/start). Remember to create a database in test mode and **in US Central** (there is a weird assertion in `firebase` package that only allow for US Central database).

**Authentication**: You need to enable anonymous authentication in Firebase console. You can do this go to the `Authentication` section in Firebase console, then go to `Sign-in method` tab, then enable `Anonymous`.

Finally, you can get the content of `firebase.server.json` in Firebase Console>Project Settings>Service accounts>Generate new private key. You can get the content of `firebase.client.json` in Firebase Console>Project Settings>General>Web API Key. Remember to change them to `.json` format.

Example of `firebase.server.json`:
```json
{
  "type": "service_account",
  "project_id": "<project-id>",
  "private_key_id": "<key-id>",
  "private_key": "<private-key>",
  "client_email": "<client-email>",
  "client_id": "<client-id>",
  "auth_uri": "<auth-uri>",
  "token_uri": "<token-uri>",
  "auth_provider_x509_cert_url": "<auth-provider-x509-cert-url>",
  "client_x509_cert_url": "<client-x509-cert-url>",
  "universe_domain": "<universe-domain>"
}
```

example of `firebase.client.json`:
```json
{
  "firebase": {
    "apiKey": "<api-key>",
    "authDomain": "<project-id>.firebaseapp.com",
    "projectId": "<project-id>",
    "storageBucket": "<project-id>.appspot.com",
    "messagingSenderId": "<messaging-sender-id>",
    "appId": "<app-id>",
    "databaseURL": "https://<project-id>-default-rtdb.firebaseio.com/"
  }
}


### APP Install

If you want to play locally or suggest modifications to our game:

**Fork** and **clone** this repository.

Install dependencies
```
npm install
```

Start development build / Webpack
```
npm build-dev
```

Server's on port 1337!

### Thank yous

We sourced our high-res game images from BoardGameGeek.

### Play

http://ankaraboardgame.herokuapp.com/
