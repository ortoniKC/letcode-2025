# LetCode

LetCode is a platform to learn and practice test automation.

## Tech stack:

1. Angular 19
2. Typescript
3. Bulma CSS for styling
4. Netlify for deployment
5. GoDaddy for hosting

### 1. Build Bulma CSS

```sh
npm run build-bulma
```

- Uses `sass` to compile Bulma styles from `my-bulma-project.scss` into `src/style.css`.
- Loads dependencies from `node_modules`.
- Outputs a compressed CSS file without source maps.

### 2. Watch Bulma CSS Changes

```sh
npm run css
```

- Runs `npm run build-bulma` with `--watch`, allowing automatic recompilation when changes are detected.

### 3. Angular CLI

```sh
npm run ng
```

- Alias for running the Angular CLI (`ng`).

### 4. Start Development Server

```sh
npm run start
```

- Runs `ng serve`, which starts a local development server for the Angular project.

### 5. Build for Production

```sh
npm run build
```

- Builds the Angular project using the `production` configuration.

### 6. Watch for Changes (Development Build)

```sh
npm run watch
```

- Builds the Angular project using the `development` configuration and watches for file changes.

### 7. Run Tests

```sh
npm run test
```

- Runs unit tests using `ng test`.

### 8. Start SSR Server

```sh
npm run ssr
```

- Runs the server-side rendered (SSR) version of the application using `node dist/letcode/server/server.mjs`.

## Notes

- Ensure all dependencies are installed using `npm install` before running any script.
- The Bulma CSS build process uses `sass` and requires `node-sass` or `dart-sass` to be installed.
- The SSR script assumes that the project has been built using SSR configurations.

For more details, refer to the official [Angular CLI Documentation](https://angular.io/cli).
