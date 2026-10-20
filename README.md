# Custom Web Components Examples

This repository contains two small applications demonstrating
[`@danielaglint/custom-web-components`](https://www.npmjs.com/package/@danielaglint/custom-web-components):

- **`html/`** — uses the package's custom elements directly in HTML and listens
  for their events.
- **`react/`** — uses the package's React components in a controlled contact
  form.

Each example is a separate Vite project with its own dependencies. Run commands
from the directory of the example you want to use.

## Requirements

- Node.js and npm

## HTML example

```sh
cd html
npm install
npm run dev
```

Open the local URL printed by Vite. The page demonstrates `<app-input>` and
`<app-counter>`. It imports the package's `/register` entry point and logs
component events to the browser console.

To create a production build or preview it locally:

```sh
npm run build
npm run preview
```

## React example

```sh
cd react
npm install
npm run dev
```

Open the local URL printed by Vite. The page demonstrates the `Input` and
`AppCounter` components from the package's `/react` entry point.

To create a production build or preview it locally:

```sh
npm run build
npm run preview
```

The React project also provides a lint command:

```sh
npm run lint
```
