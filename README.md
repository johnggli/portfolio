<h1 align="center">IN PROGRESS</h1>
<h3 align="center">Project developed during the Rocketseat's NextLevelWeek#2.</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JohnEmerson1406/Proffy?color=%237e57c2">
  
  <img alt="Node version" src="https://img.shields.io/badge/node.js@lts-12.18.1-informational?logo=Node.JS&color=%237e57c2">
  
  <img alt="Yarn version" src="https://img.shields.io/badge/yarn-1.22.4-informational?logo=yarn&color=%237e57c2">

  <a href="https://www.linkedin.com/in/johnemerson1406/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-John%20Emerson-%237e57c2">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JohnEmerson1406/Proffy?color=%237e57c2">
  
  <a href="https://github.com/JohnEmerson1406/Proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JohnEmerson1406/Proffy?color=%237e57c2">
  </a>
</p>

<p align="center">
  <a href="#bulb-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#star2-extras">Get in touch</a>
</p>

<img align="center" src="https://user-images.githubusercontent.com/43749971/89747466-458be600-da95-11ea-87f8-889fd3b6e45b.png"></img>

## :bulb: About the project

- This project is about a system that seeks to connect students to teachers on an online platform.

## :rocket: Technologies

Technologies that I used to develop this project

- [Node.js](https://nodejs.org/en)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native)
- [Expo](https://expo.io)

## :computer: Getting started

#### Backend

Run the migrations:
```bash
cd server
yarn install
yarn knex:migrate
```

Start the API:
```bash
cd server
yarn start
```

#### Frontend

To start the React's frontend, run:
```bash
cd web
yarn install
yarn start
```

#### Mobile

First, add the address of your server (or computer) in the file `mobile/src/services/api.js`, and then run the commands:
```bash
cd mobile
yarn install
yarn start
```
Once the process is finished, the `localhost: 19002` page will automatically open in your browser. Connect your emulator, or test the app via `LAN`: download the *Expo* app from the Play Store or App Store and then scan the QR code.

## :thinking: How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork JohnEmerson1406/Proffy
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd Proffy

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## :star2: Extras
- [Shields.io](https://shields.io/)
- [Github Emojis](https://gist.github.com/rxaviers/7360908)

---

Made with ♥ by John Emerson :wave: [Get in touch](https://johnemerson1406.github.io/linktree)
