# NodeTypescriptTemplate
Node template project that has Typescript and Inversify (IOC library) setup and configured. Uses Mocha for tests. Works on both Windows and UNIX based systems.

---
## Installation
1. Install dependencies
```
npm install
```

2. Run Build
```
npm run build
```

3. Start Server
```
npm start
```

You are ready to go. You should be able to hit the local server at http://localhost:3000/health and see the text "OK"

## Live Development
1. Start typescript compile watch. This will watch for .ts file changes and compile them to dist-server
```
npm run tscw
```
2. Start your unit test watch
```
npm run test-watch
```
3. Start your server with nodemon (restarts with file changes)
```
npm run start-dev
```

You are now ready to make changes and see live changes, try playing with the health or prime functions in the test.service.ts (TestService)
