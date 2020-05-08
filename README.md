# REACT FRONTEND

utilize an API to show data and post data

## dependencies

- node 12.16.3 (tested with this)

## environmnet variables

- PORT (is the output port)

## how to install

### development

run in current diectory in shell `npm i`

### production

#### building

You need build this code but first you need development tools and do `npm run build` in current directory

#### get production dependencies and run

You need the package.json, the package-lock.json, server.js file and the buld forlder generated with `npm run build` and run `npm i --only=prod`.

also you need to find a way to run with a process manager I suggest use pm2 so maybe you need to install `npm i -g pm2` or manage the app with other tools.

with all dependencies satisfied the commandthat you need to mage is `npm run runserver` or `node server.js`
