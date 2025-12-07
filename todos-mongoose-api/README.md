# TODOs Mongoose API


## Tasks

Create a CRUD (Create, Read, Update, Delete) RESTful API application using Express.js and Mongoose. 

This application will be the backend server for your frontend TODOs application. So instead of storing your TODOs in Local Storage, you'll store it in a collection within a database. 

You'll need to update your FE app to make requests to this new backend server. (See other projects like the Recipe App for examples on how to use fetch to make requests to an API.)

You'll need to define Schema and models for both List and Task entities. 

It's up to you whether you setup a relationship using references or with embedings. Ask Mr D if you're unsure on this. 

Use the following HTTP Methods and coresponding Mongoose read and write operations.

|HTTP Method|Mongo Node driver method|
|-|-|
|GET|find|
|GET|findById or findOne|
|POST|save or close|
|PUT|findOneAndReplace or replaceOne|
|PATCH|findByIdAndUpdate or updateOne|
|DELETE|findByIdAndDelete or deleteOne|

Be sure to add error handling in each middleware function using `try-catch`.

Be sure to pass back the approipriate [HTTP Status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) with the response based on the situation. 

Be sure to connect and disconnect from the Mongo DB instance too. Connect in the try block and disconnect in a finally block. 

**Bonus**: Add pagination when reading all the Lists.

## Setup a Full Stack project
- Create a folder called **todos-full**.

### Add your frontend project
- Copy your working front end app into the **todos-full** folder.
  - **Important**: Remove any `.git` folders from that project

### Setup (backend API project)
Create a JavaScript project for a new express app by running the following commands: 

```bash
mkdir todos-mongoose-api
cd todos-mongoose-api
npm init   # (When prompted, specify app.js as the start file.) 
echo node_modules/ > .gitignore
npm install express mongoose cors --registry http://npm.perseverenow.org/ppm/
```

Open VSCode with: `code .`  

If it's not already there, add **"type": "module"**, to the `package.json` file.

Create a file called `app.js` and add your server code.

### Make the entire full stack project a Git repo

Change the directory to the **todos-full** folder. 
```bash
cd ..
```

Then create the git repo 
```bash
git init
```

### Create a dev branch

Create a dev branch with: `git checkout -b dev`. That way you'll be able to show your work when submitting a merge request (MR).

## Create a Gitlab project

Create a new, blank project in Gitlab in your namespace called **todos-mongoose-api**. 

Remember to uncheck the README file create option. 

Get the project URL located behind the Code button.

In your Git bash terminal, in the **todos-full** folder, set the remote using the following command. 
```bash
git remote add origin <url>
```
Then, add, commit, and push up your main branch.  

## Express App notes

Define an express app that using a **listRouter**.

### Important: enable CORS

In your express app, in the **app.js** file, you'll need to enable [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) using the follwing command.

```js
app.use(cors());
```
