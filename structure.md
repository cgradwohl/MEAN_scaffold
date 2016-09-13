You can AUTO create a different directory structure using the express generator which by default uses jade:
```
$ express <project directory>
```
to create the auto express directory structure with hogan
```
$ express <project directory> --hogan -c less
```

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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


~~~~~~~~~~~~~~~~~~~
SETUP BACK END
~~~~~~~~~~~~~~~~~~~

1.  All Node applications start with the package.json file
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


2.  We can install the dependencies we just included on `package.json` into the `/node_modules` directory
type from project directory:
```
$ npm install
```


3.  Now we can setup the `server.js` for our one page application.


4.  Setup the `/config/db.js` directory.
In the future, you may want to add more config files and call them in server.js. Now that this file is defined and we’ve called it in our server.js using 'var db = require('./config/db');`, you can call any items inside of it using db.url. For getting this to work, you’ll want a local MongoDB database installed or you can just grab a quick one off services like Modulus or Mongolab.


5.  Create a quick Mongoose model so that we can define our Nerds(Objects) in our database.
```
app/models/nerd.js
```
This is where we will use the Mongoose module and be able to define our Nerd model with a name attribute with data type String. If you want more fields, feel free to add them here. Read up on the Mongoose docs to see all the things you can define.


6.  Last, move onto the routes and use the model we just created.
```
app/routes.js
```
IMPORTANT: Use the app folder to add more models, controllers, routes, and anything backend (Node) specific to your app.
This is where you can handle your API routes.For all other routes (*), we will send the user to our frontend application where Angular can handle routing them from there.

At this point the backend is done and we can start our server, **send a user the Angular app (index.html), and handle 1 API route to get all the nerds.


~~~~~~~~~~~~~~~~~~~
SETUP FRONT END
~~~~~~~~~~~~~~~~~~~
1.  Create an index VIEW file in the `public/view/` directory
```
public/views/index.html
```

2.  Test the server:
```
$ node server.js
```
