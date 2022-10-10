# satori-jsx

Use JSX with [Satori](https://github.com/vercel/satori#jsx) without React

## Install

```
npm install satori-jsx
```

## Usage
### Vite

```js
import satori from 'satori-jsx/vite'

export default {
  plugins: [satori()]
}
```

If you're using typescript, make sure to add the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
  }
}
```

### Babel

```
npm install -D @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx
```

Update your .babelrc

```js
{
  "plugins": [
    "@babel/plugin-syntax-jsx",
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic",
        "importSource": "satori-jsx"          
      }
    ]
  ]
}
```

## Typescript

For JSX types, it's best to use react's.

```
npm install -D @types/react @types/react-dom
```