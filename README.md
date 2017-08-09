# Subscription-service

## Getting started

Install yarn globally, as it will speed up your `npm install` commands extensively. Yarn is an alternative to npm but Yarn uses a lockfile to keep the dependencies fixed.

```
npm install -g yarn
```

Install dependencies by running this in the directory `subscription-service`
```
yarn
```

Start the applications by running. This will run two commands concurrently. One for `frontend`, one for `backend` and one for `electron`.

```
yarn start
```

Electron will open automatically. The frontend is hosted at http://localhost:8080 and the electron app uses the bundle.js from this frontend. The frontend starts a little slower due to webpack compliation, so you probably have to refresh the electron app.