# TODOs App

This project will use all our skills so far: HTML, CSS, SASS, JavaScript, and React (components, state, and hooks).

## Requirements

1. Create a TODOs Dashboard where you can manage multiple TODO Lists. 

2. Create the following components in the `/components` folder.
    - Dash (already added for you)
    - List
    - Task
    - TaskEditor

    Think about how to organize the data. What should be state? Where should it live? 

    Here's a diagram to help out with the though process: 

    <img src="./src/design/TODOs app - state and props.png" width="600" alt="component hierarchy" />

    Here's what your task data should look like: 

    ```javaScript
    const task = { 
      id: '1234'
      summary: 'walk the dog', 
      complete: false, 
      editing: false 
    }
    ```

    You'll need to use the built-in React hooks: **useState** and **useEffect**. (You won't need useContext for this.)

3. Make sure your lists are persisted in Local Storage using the included **useLocalStorage** hook. 

4. Add unit tests for the following components: 
    - Dash 
    - List
    - Task
    - TaskEditor

    Test the user interations. For example, in a file called Dash.test.jsx, add a test that enters a new list name, clicks the create button, and checks for the existence a new element on the page that has the name of your list. Take a similar approach for testing the other components.

5. Styling and icons

    I've included the styling for the Neumorphism look. Feel free to use it or come up with your own style. 

    Also, feel free to add Font awesome icons where it makes sense (e.g. you might add a plus button next to the word 'add'.) If you use icons, also include words since this is the best design practice. Icons by themselves can be confusing to the user. 

### TODOs App ScreenShot

<img src="./src/design/desktop-design.png" width="600" alt="desktop design" />

## Setup

### Using this template

**Fork** this template into your name space. 

Next, **clone** it to your PC.

### Install dependencies

Switch into the project folder ...

```bash
cd my-react-project
```

Install the dependencies ...

```bash
 npm install --registry http://npm.perseverenow.org/ppm/
```

**Note**: You can add other dependencies as needed. For example...

```bash
npm install react-router@latest --registry http://npm.perseverenow.org/ppm/
```

## Running the project

Enter ...

```bash
npm run dev
```

### Open your web app in the browser

Navigate to the specified URL in the browser (e.g. http://localhost:5173/).

### Stopping the project

Just hit `ctrl+c` to stop running your React project.

## Testing

This project has been configured to enable testing with Jest (Vitest) and React Testing Library (RTL).

You can try it out by running: `npm run test`

This will cause Jest (Vitest) to run tests in any test files and display the results.

## JS Config notes

#### JS Config Schema file (static file - offline version)

The **settings.json** file in **.vscode** makes it so the JS Config schema file, **jsconfig.schema.json**, is available to the students offline since IT did not want to add it to the allowed list. However, this file should be periodically updated by downloading a new copy from this site: https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/jsconfig.json

## ESLint notes

Run with...

```bash
npm run lint
```


## Using Font Awesome Icons

### Docs 

[See the Docs](https://docs.fontawesome.com/v5/web/use-with/react/)

### Avaiable Icons
We have the following icon packages available: 

- @fortawesome/free-solid-svg-icons
- @fortawesome/free-regular-svg-icons
- @fortawesome/free-brands-svg-icons

### Font Awesome Icon usage

To use these with React, first import the `FontAwesomeIcon` component. Then import any icons you'd like to use.
Then just add the FontAwesomeIcon to the jsx and pass it the name of the icon you want via the icon prop.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div>
      <h3>How to use font-awesome in react</h3>
      <FontAwesomeIcon icon={faPenNib} size="3x" />
      <FontAwesomeIcon icon={faEnvelope} pulse />
      <FontAwesomeIcon icon={faCoffee} spin />
    </div>
  )
}

export default IconPage
```

#### Sizing 

```jsx
<FontAwesomeIcon icon="coffee" size="xs" />
<FontAwesomeIcon icon="coffee" size="lg" />
<FontAwesomeIcon icon="coffee" size="6x" />
```

Note that icon size can be controlled with the CSS `font-size` attribute, and FontAwesomeIcon’s `size` prop determines icon size relative to the current `font-size`.

#### Rotating Icons

```jsx
<FontAwesomeIcon icon="coffee" rotation={90} />
<FontAwesomeIcon icon="coffee" rotation={180} />
<FontAwesomeIcon icon="coffee" rotation={270} />
```

#### Animating Icons 

```jsx
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />
```

#### Adding Classes Yourself

You can add classes for your own project purposes and styling to any component using the className property.

```jsx
<FontAwesomeIcon icon="spinner" className="highlight" />
```
## Adding/ Updating packages 

For react ...
```bash
npm install react@latest react-dom@latest --registry http://npm.perseverenow.org/ppm/
```

For react dev dependencies...
```bash
npm install @types/react@latest @types/react-dom@latest --save-dev --registry http://npm.perseverenow.org/ppm/
```

For vite ...
```bash
npm install vite@latest @vitejs/plugin-react-swc@latest --save-dev --registry http://npm.perseverenow.org/ppm/
```

Other ...
```bash
npm install jsdom globals --save-dev --registry http://npm.perseverenow.org/ppm/
```

For linting...
```bash
npm install @eslint/js@latest eslint@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest eslint-plugin-react-refresh@latest --save-dev --registry http://npm.perseverenow.org/ppm/
```

For unit testing...
```bash
npm install vitest@latest @testing-library/jest-dom@latest @testing-library/react@latest @testing-library/user-event@latest --save-dev --registry http://npm.perseverenow.org/ppm/
```

For Font Awesome...
```bash
npm install @fortawesome/fontawesome-svg-core@latest @fortawesome/free-brands-svg-icons@latest @fortawesome/free-regular-svg-icons@latest @fortawesome/free-solid-svg-icons@latest @fortawesome/react-fontawesome@latest --save-dev --registry http://npm.perseverenow.org/ppm/
```
 @font-face {
   font-family: fun;
   src: url(./assets/fonts/shadows.ttf);
 }

 @font-face {
   font-family: regular;
   src: url(./assets/fonts/regular.ttf);
 }

 :root {

   line-height: 1.5;
   font-weight: 400;

   --shadow-size: 9px;

   --base1: #c9a689;
   --base2: #caa078;
   --base3: #c69763;
   --baseDark1: #676971;
   --baseDark2: #676971;
   --baseDark3: #503e3a;
   --base: #c65909;
   --primary1: #8a9184;
   --primary2: #8a9184;
   --primary3: #1d3822;
   --primaryDark1: #b9be9e;
   --primaryDark2: #6e725b;
   --primaryDark3: #125c05;
   --primary: #000;

   /* Neumorphism styles: https://codepen.io/Mika_Chu/pen/abOZjeJ */
   --input-shadow: 1px 1px var(--shadow-size) var(--primary1), -1px -1px var(--shadow-size) var(--primary1);

   /* --input-shadow-active: inset 2px 2px 6px var(--base3), inset -2px -2px 6px var(--base1), 1px 1px 6px var(--base3),
    -1px -1px 6px var(--base1);

  --shadow-transition: all 0.25s cubic-bezier(0.17, 0.67, 0.83, 0.67); */

   --base-shadow: inset 0px 0px 0px var(--primary1), inset 0px 0px 0px var(--base2), 2px 2px 5px var(--primary1),
     -2px -2px 5px var(--primary1);

   /* --base-shadow-active: inset 4px 4px 9px var(--base3), inset -4px -4px 6px var(--base1), 2px 2px 9px var(--base3),
    -2px -2px 9px var(--base1); */

    /* --base1: #ebeff3;
   --base2: #c3d0db;
   --base3: #88a1b7;
   --baseDark1: #10b9d6;
   --baseDark2: #075e6d;
   --baseDark3: #06353d;
   --base: #090e10;
   --primary1: #d3ff8b;
   --primary2: #b8fc4a;
   --primary3: #a1ff0b;
   --primaryDark1: #15f101;
   --primaryDark2: #0d9201;
   --primaryDark3: #043100;
   --primary: #001d05; */
 }

 body {
   margin: 0;
   padding: 0;
   height: calc(100vh - 2rem);
   background-color: var(--baseDark1);
   color: var(--base);
 }

 input {
   height: 1.5rem;
   padding: 0.25rem 0.5rem;
   border: none;
   border-radius: 8px;
   /* backdrop-filter: blur(5px); */
   background-color: var(--primary1);
   /* box-shadow: var(--input-shadow); */
   margin-right: 0.5rem;
   color: var(--primary3);
   font-family: regular;
 }

 /* input:focus:enabled,
input:active:enabled {
  outline: none;
  border-color: var(--base3);
  box-shadow: var(--input-shadow-active);
} */

 button {
   border-radius: 8px;
   cursor: pointer;
   border: 1px solid transparent;
   color: var(--primary);
   padding: 0.25rem 0.5rem;
   margin: 0.5rem;
   font-family: regular;
   height: 1.8rem;
   font-weight: 500;
   font-size: 1rem;
   /* transition: var(--shadow-transition);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content; */

   background: var(--primary1);
   border: 2px solid var(--primary2);
   box-shadow: var(--base-shadow);
 }

 /* button:hover:not([disabled]),
button:focus:not([disabled]),
button.active:not([disabled]) {
  outline: none;
  box-shadow: var(--base-shadow-active);
  color: var(--baseDark2);
  border-color: var(--base3);
}

button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
} */