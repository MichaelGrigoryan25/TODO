# TODO 📃 - An open-source To Do app

Made by [Michael Grigoryan](https://github.com/MichaelGrigoryan)
<br>
[License](./)
<hr>

# Before you start
You'll need to create a `.env` file in the project root and have this parameter:<br>
```
DB_REMOTE=YOUR_REMOTE_MONGODB_UI
DB_DOCKER=YOUR_CONTAINERIZED_MONGODB_URI
```
If you choose to deploy with Docker `DB_REMOTE` is completely optional.
If you choose to deploy with Node.js `DB_CONTAINERIZED` is completely optional.

## Deploying With Docker 🐳
 1. Go to the folder root
 2. Open a new terminal session and type `docker-compose up --build`
 3. After that finished go to `http://localhost:80` and you'll see the app

## Deploying with Node.js 
 1. Go to the folder root
 2. Open a new terminal session and type `npm start`
 3. After that finished go to `http://localhost:80` and you'll see the app

###### 🌟 this app if you liked it
