# React

## Introduction Slides

![image](https://i.imgur.com/J3qfc3s.png)
![image](https://i.imgur.com/j4D8pDX.png)
![image](https://i.imgur.com/AH6Xa9A.png)
![image](https://i.imgur.com/qYgq4wW.png)
![image](https://i.imgur.com/d1l61tV.png)
![image](https://i.imgur.com/muRXNqL.png)
![image](https://i.imgur.com/fWu1ZdY.png)
![image](https://i.imgur.com/D8N20j5.png)

### Initial Setup

- `npm create vite@latest <project-name>` : Create a new React project
- `npm install` : Install all dependencies
- `npm run dev` : Run the project
- `vite.config.js` : Define the project configuration
- `index.html` : Define the project entry point
- `main.jsx` : Define the project entry point
- Delete app.css because we don't need it as we will use Tailwind CSS. Also clear App.jsx
- Download "ES7 + React/Redux/React-Native snippets" extension to help with React boilerplate code.
  - `rafce` : Create a functional component

#### Tailwind CSS Setup

- Follow the instructions on: https://tailwindcss.com/docs/installation/using-vite

## React-Jobs

- Setup a new react project just like we saw above.
- Take HTML file from here : https://github.com/bradtraversy/react-crash-2024/blob/main/_theme_files/index.html
- Files in React return JSX and all the JSX should be under one parent element. That's why when pasting the HTML file's body part, encase it in a fragment (<> </>).
- After that we will take each part from HTML file like navbar, hero section, etc. and create a component for each of them. After creating a component, we will import it in App.jsx and use it.

### React Props

- In React, props are used to pass data from a parent component to a child component.
  - Props are read-only and cannot be modified by the child component.
  - Props are passed to a component as attributes and are treated as immutable objects.

```jsx
app.jsx
  <Hero title="Props Tile" subtitle="Props subtitle" />
Hero.jsx
  const hero = (Props) => {
    return (
      ...
      <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
        {Props.title}
      </h1>
      <p class="my-4 text-xl text-white">{Props.subtitle}</p>
      ...
    );
  };
```

- Destructuring Props with default values

```jsx
  const hero = ({
    title = "Become a React Dev",
    subtitle = "Find a React Job",
  }) => {
    return (
      ...
      <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p class="my-4 text-xl text-white">{subtitle}</p>
      ...
    );
  };
```

- **Wrapper Components**
