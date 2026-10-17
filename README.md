# CV Generator

A React application for entering, editing, and previewing CV information in a two-panel interface.

## Features

- Personal information, professional experience, education, volunteering, and awards
- Component-based input forms and a live CV preview
- React state and Context providers shared across the editor and preview
- CSS styling, date inputs, and Font Awesome icons

## Run locally

With Node.js and npm installed:

```sh
npm ci
npm start
```

## Package commands

- `npm start`: development server
- `npm run build`: production build
- `npm test`: React Scripts test runner

The project uses React 18 and Create React App's `react-scripts`.

## Structure

- `src/App.js`: editor/preview layout and Context providers
- `src/components/LeftSide/`: editing controls and data state
- `src/components/RightSide/`: CV preview
- `public/`: static application assets

## Existing deployment

[CV Generator on Netlify](https://main--dreamy-tulumba-89771f.netlify.app/) is the deployment linked by the original project. Availability has not been verified.

## Scope

This is a frontend learning project. Use synthetic details when trying the editor.

