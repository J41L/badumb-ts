# Badumb-TS
A minimalist toy server development project to facilitate 
microservice and serverless development.

## Core Philosophy
Provide all anyone _really_ needs to build a web API form the ground up.
#### Frameworkless architecture
- The internet is just IO
- It is up to the user to design their program.
- Provide the most minimal necessary components:
  - basic logger
  - basic fs CRUD
  - basic authentication and JWT functionality
  - Handler (program data entrypoint) generator
  - Abstraction from the router.
#### Unopinionated Flexibility
Other than needing handlers to be added to subdirectories of `handlers` there 
is no stipulation on how a user builds their API.

A strong suggestion to:
- build data flows into the application as middleware pipelines that successively 
  trim the data passed from the server 
- use the most base level libraries (ie/ don't use an ORM w. multiple DB support
  instead, program your data layer correctly and responsibly.)
is as far as we go. Both of these can be ignored, obviously.

Only node core libs and typescript to be used to build this - all other choices 
are up to the user.
#### There is no HTTP
Https only, thank you.

## Todo
- Change to https, remove http.
- Add JWTs
- Add fs CRUD  
- Add authentication (datastorage in fs, user choice).
- Add async calls to handlers.
- Translate to typescript so the TS part at least means something.
- Add handler generators.
- Add the basic CLI.
- Tests!!!