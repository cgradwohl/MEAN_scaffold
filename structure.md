All backend work is done in server.js, app, and config while all the frontend is handled in the public folder.



You can AUTO create a different directory structure using the express generator which by default uses jade:
```
$ express <project directory>
```
to create the auto express directory structure with hogan
```
$ express <project directory> --hogan -c less
```


Another approach is to manually create the following directory structure:
```
MEAN_scaffold
- app
----- models/
---------- nerd.js <!-- the nerd model to handle CRUD -->
----- routes.js

- config
----- db.js

- node_modules <!-- created by npm install -->

- public <!-- all frontend and angular stuff -->
----- css
----- js
---------- controllers <!-- angular controllers -->
---------- services <!-- angular services -->
---------- app.js <!-- angular application -->
---------- appRoutes.js <!-- angular routes -->
----- img
----- libs <!-- created by bower install -->
----- views
---------- home.html
---------- nerd.html
---------- geek.html
----- index.html

- .bowerrc <!-- tells bower where to put files (public/libs) -->

- bower.json <!-- tells bower which files we need -->

- package.json <!-- tells npm which packages we need -->

- server.js <!-- set up our node application -->
```

First, all Node applications start with the package.json file
To know current versions use:
```
$ express -version
$ npm install -g mongoose
$ npm list -g mongoose

$ npm install body-parser
$ npm list body-parser

$ npm install method-override
$ npm list method-override
```

Second, we can install the dependencies we just included on `package.json` into the `/node_modules` directory
type from project directory:
```
$ npm install
```
Now we can setup the `server.js` for our application 
