# Rego lookup

Sean Kinread

## Summary

### Framework

Preact X is used for this app, which is lightweight - well suited to proof of concepts - and nearly identical to a React app.

### Requirements met

1. Registraion JSON data is read from the mock api
2. List of registrations is displayed
3. Once a registration is selected from the list, the full details are displayed
4. Only the last 4 digits of the VIN are visible
5. Dates are formatted as DD MMMM YY
6. API failure is handled and communicated to the user

## Setup

Clone or unpack the repository and install its dependencies.

```bash
npm install
```

### Run: `npm start`

Runs the app in development mode. Visit [http://localhost:1234](http://localhost:1234).


### (not in use) Build: `npm build`

Builds the project for production. The build directory is `dist`; types will be written to `dist/index.d.ts`. Customize the build directory in the `outDir` configuration option in the [tsconfig.json](tsconfig.json).
