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



###SETUP BACK END


I.  All Node applications start with the package.json file (you could npm install each depedancy seperately but this is a nice way to do it).
```
{
     "name": "starter-node-angular",
     "main": "server.js",
     "dependencies": {
       "express" : "~4.5.1", // can also use "express" : "latest", for each dependancy
       "mongoose" : "~3.8.0",
       "body-parser" : "~1.4.2",
       "method-override" : "~2.0.2"        
     }
}
```
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


II.  We can install the dependencies we just included on `package.json` into the `/node_modules` directory
type from project directory:
```
$ npm install
```


III.  Now we can setup the `server.js` for our one page application.


IV.  Setup the `/config/db.js` directory.
In the future, you may want to add more config files and call them in server.js. Now that this file is defined and we’ve called it in our server.js using 'var db = require('./config/db');`, you can call any items inside of it using db.url. For getting this to work, you’ll want a local MongoDB database installed or you can just grab a quick one off services like Modulus or Mongolab.


V.  Create a quick Mongoose model so that we can define our Nerds(Objects) in our database.
```
app/models/nerd.js
```
This is where we will use the Mongoose module and be able to define our Nerd model with a name attribute with data type String. If you want more fields, feel free to add them here. Read up on the Mongoose docs to see all the things you can define.


VI.  Last, move onto the routes and use the model we just created.
```
app/routes.js
```
IMPORTANT: Use the app folder to add more models, controllers, routes, and anything backend (Node) specific to your app.
This is where you can handle your API routes.For all other routes (*), we will send the user to our frontend application where Angular can handle routing them from there. Our Node backend will send any user that visits our application to our index.html file since we’ve defined that in our catch-all route (app.get('*')).

At this point the backend is done and we can start our server, **send a user the Angular app (index.html), and handle 1 API route to get all the nerds.



###SETUP/TEST FRONT END

I.  Create an index VIEW file in the `public/view/` directory
```
public/views/index.html
```

II.  Test the server:
```
$ node server.js
```

###ADD FRONT END DEPENDANCIES WITH BOWER

I.  create `.bowerrc` file which tells bower where to install the front end dependancies.
```
{
    "directory": "public/libs"
}
```
II. create the `bower.json` file which specifies which front end dependancies to install.
```
{
    "name": "starter-node-angular",
    "version": "1.0.0",
    "dependencies": {
        "bootstrap": "latest",
        "font-awesome": "latest",
        "animate.css": "latest",
        "angular": "latest",
        "angular-route": "latest"   
    }
}
```

III.  Run `$ bower install` bower will install all dependancies into the directory specified by the .bowerrc file.

###SETUP ANGULAR.js APPLICATION

I.  All of our controllers, services, routes for our Angular application will be in our `public/js` directory:
```
- public
----- js
---------- controllers
-------------------- MainCtrl.js
-------------------- NerdCtrl.js
---------- services
-------------------- NerdService.js
---------- app.js
---------- appRoutes.js
```
We will combine all controllers, services, routes and inject these modules into our main app.js.
app.js is where everything comes together!

II. Now its time to setup our angular services. This is where you would use $http or $resource to do your API calls to the Node backend from your Angular frontend.  
`public/js/services/NerdService.js`

III.  Next lets define some Angular routes in `public/js/appRoutes.js` Our Angular frontend will use the template file and inject it into the <div ng-view></div> in our index.html file. It will do this without a page refresh which is exactly what we want for a single page application.

IV. Now we need to create the view files and then the smaller template files (home.html, nerd.html, and geek.html) will be injected into our index.html file inside of the <div ng-view></div>. This happens in our `public/index.html`

V. We have defined our resources, controllers, services, and routes and included the files in our index.html. Now let’s make them all work together. We will use dependency injection and set up our Angular application. `public/js/app.js`
