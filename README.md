# :zap: MEVN Stack Data

* MEVN app: Vue frontend used to Create Read Update & Delete (CRUD) cable installation data with a Node-Express backend & MongoDB database.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/mevn-stack-data?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/mevn-stack-data?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/mevn-stack-data?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/mevn-stack-data?style=plastic)

## :page_facing_up: Table of contents

* [:zap: MEVN Stack Data](#zap-mevn-stack-data)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
    * [Frontend](#frontend)
    * [Backend](#backend)
    * [General](#general)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Cable pulling database idea inspired by time spent pulling electrical cables on an LNG plant in Northern Norway for Statoil. It is required to complete a cable database with details of cable, cable drum, amount of cable pulled and installed etc.
* Axios used to send/receive data from the MongoDB backend
* Backend node.js code separated into routes file with a Mongoose model Cable schema.
* Latest Mongoose v6 connection config. used (as of oct. 2021) with no deprecation warnings. Note an old config. will stop any Mongoose-based app from working.
* [Vue 4 RouteRecordRaw](https://next.router.vuejs.org/api/#routerecordraw) route record provided by user

## :camera: Screenshots

![Example screenshot](./img/data.png)
![Example screenshot](./img/create.png)
![Example screenshot](./img/edit.png)
![Example screenshot](./img/mongodb.png)
![Example screenshot](./img/backend.png)
![Example screenshot](./img/info.png)

## :signal_strength: Technologies

### Frontend

* [Vue v3](https://vuejs.org/) JS framework
* [Vue Router v4](https://router.vuejs.org/) the latest official router for Vue.js
* [Vue CLI v5](https://cli.vuejs.org/)
* [Axios v1](https://github.com/axios/axios), a promise-based http client, used to consume API data.
* [Bootswatch v5](https://bootswatch.com/) Bootstrap theme

### Backend

* [Express v4](https://expressjs.com/)
* [Mongoose v6](https://mongoosejs.com/)
* [cors v2](https://www.npmjs.com/package/cors) Cross Origin Resource Sharing Connect/Express middleware
* [Node v16](https://nodejs.org/en/) JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Typescript v4](https://www.typescriptlang.org/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### General

* [Thunder Client VS Code Extension](https://www.thunderclient.io/) lightweight Rest Client for Testing APIs
* [rimraf](https://www.npmjs.com/package/rimraf) the UNIX command rm -rf for node.

## :floppy_disk: Setup

**Dev Backend:**

* `cd server` to change directory
* `npm i` to install dependencies
* add MongoDB access
* Run `npm run dev` to run node.js server.
* Navigate to `http://localhost:3000/api/cables` to see JSON object with cable list or an empty array if no cables (refresh after changes - does not auto-update).
* CRUD operations can be performed on this backend using the [Postman](https://www.postman.com/) API dev tool or the [Thunder Client VS Code Extension](https://www.thunderclient.io/).

**Dev Frontend:**

* `npm i` to install dependencies
* `npm run lint` to lint files
* `npm run client` to run client dev server
* Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

**Build Full Stack:**

* `npm run build` to create build file for both front & back ends
* Navigate to `http://localhost:8080/` to see frontend and `http://localhost:3000/` to see backend (refresh after changes - does not auto-update).
* Heroku `heroku login` to login, `git add .` then `git commit -m "commit message..."` then `git push heroku master` to deploy to Heroku

## :computer: Code Examples

* 'cable.controller.ts' function to update cable by id

```typescript
export const updateCableHandler = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const updatedCable = await Cable.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedCable) {
      return res.status(404).json({
        message: "Cable to be updated was not found",
      });
    }
    return res.json(updatedCable);
  } catch (error) {
    return res.status(500).send(error);
  }
};
```

## :cool: Features

* tba

## :clipboard: Status & To-Do List

* Status: Working full-stack CRUD app with MongoDB Atlas database
* To-Do: Replace any data types, separate controller functions from routes, add date field
* To-Do: fix navbar burger button, styling, add cable fields, add drop down menu for cable drum selection etc.

## :clap: Inspiration

* [What is rimraf and how to use it in Node.js](https://learn.coderslang.com/0024-what-is-rimraf-and-how-to-use-it/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@yahoo.com`
