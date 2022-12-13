//Requirein the express library to set up the server 
const express = require('express');
// Requirein the middleware funciton body-parser
const bodyParser = require('body-parser');

/* app describes all the diffferent things our web server can do. 
We will be customizing this object to tell our webserver what kind of requests it can expect to receive and what it should do about it. */
const app = express();

/* app.use() HELPS US TO WIRE UP MIDDLEWARE IN OUR APP.
bodyParser library has a middleware fucntion called urlencoded which is specifically meant for handling requests coming in HTML form.
This is a middleware function that is going to take the incoming request.It's going to receive the body of the request bit by bit, 
parse it, put all that information together,and then make that information available on the req.body property.
The 'use' function we call that and we pass it in a middleware function if we want all of our different route handlers to have that middleware function be applied.
So now every single different route handler inside of our app will be automatically body parsed for us.
Do note that the body parser middleware or the Body Parser Library is going to automatically detect whether or not we are using it on a GET type request or a POST request or whatever and not apply it in the case of a GET request. */
app.use(bodyParser.urlencoded({ extended: true }));

/* Adding a route handler directing the server what to do when it receives a network request form the browser
Any time someone makes a network request to the root route '/' of the application, run the callback function
When the callback function runs, we are sending back a response to whoever made that request.
THIS IS A ROUTE HANDLER */
app.get('/',(req, res) => {
    res.send(`
    <div>
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>Sign Up</button>
        </form> 
    </div>
    `);
});

// THIS IS A ROUTE HANDLER
app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('Account Created');
});
// Tell the application to start listening for incoming network requests on particular port on the machine
app.listen(3000, () => {
    console.log('Listening');
});
