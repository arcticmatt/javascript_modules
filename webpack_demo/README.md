Follow https://webpack.js.org/guides/getting-started/ (stop at "Using a Configuration").

Run this.

```
npx webpack
```

This will create `dist/main.js`. Then run this.

```
javascript_modules/browser $ python3 -m http.server 1234
```

Finally, go to http://localhost:1234/dist/index.html in your browser.
