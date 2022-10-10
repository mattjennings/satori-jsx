# satori-jsx

Simple JSX parser for use with [Satori](https://github.com/vercel/satori#jsx). This
is useful if you want to use JSX without React/Preact.

## Install

```
npm install satori-jsx
```

## Vite

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

## Babel

Update your .babelrc

```js
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
  ]
}
```

Make sure to import `h` from `satori-jsx`

```js
import { h } from 'satori-jsx'
import satori from 'satori'

const svg = await satori(<div>hello world</div>, {
  fonts: [...]
})
```