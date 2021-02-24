# Here you will learn how to create an Express App, how to create a route for the app and how to create a community endpoint.

Since the whole system is still in beta, you currently need your own development environment, which we will create together. You can also download one from us.

# How do I create an Express App?
First we create a project folder which we call `express-app`!


Then we need to create the app and then install express
```sh
npm init -y
npm install express
```

Next we create a main file and name it `app.js`.

in the `app.js` we now define all imports

```js
const express = require('express');
```
After that we have to define the app for express and give the app a port

```js
const app = express();

app.listen(3000, () => console.info(`Listening on port 3000`));
```

Now we can create our route between the app and the start of the app
```js
app.get('/', async (req, res) => {
    res.send('hello world')
});
```

If you are more interested go to https://expressjs.com/de

# How do I create an API endpoint that works?

Here we look at how to create a route and get random output.

First we create a file with the possible outputs

```json
[
    {
        "output": "Hi"
    },
    {
        "output": "Bye"
    },
    {
        "output": "OwO"
    }
]
```
Now we define in the app above the route the file

```js
const output = require('./path/to/output.json');
```

which should now look like this:
```js
const express = require('express');

const app = express();

const output = require('./output.json');

app.get('/', async (req, res) => {
    res.send('hello world')
});

app.listen(3000, () => console.info(`Listening on port 3000`));
```
Now, using the length of the array of the file, we fetch a random output in the route
```js
app.get('/', async (req, res) => {
    let randomOutput = output[Math.floor(Math.random() * output.length)];
    res.send(randomOutput);
});
```

At last we improve the output so that the browser knows that it is JSON and set a header for it

```js
res.header("Content-Type", "application/json");
```

Now we are done, let me show you the final result
```js
const express = require('express');

const app = express();

const output = require('./output.json');

app.get('/', async (req, res) => {
    let randomOutput = output[Math.floor(Math.random() * output.length)];
    res.header("Content-Type", "application/json");
    res.send(randomOutput);
});

app.listen(3000, () => console.info(`Listening on port 3000`));
```

Now you can either always edit the route you have now created or you can create new ones to test further!

# How to create a community endpoint for Evergene
If you have been testing diligently you will understand Express slowly but well.

First you create a folder in your project and name it like your username, in this example the folder is called `newt`.

In this folder you create a JavaScript file and name it like your endpoint, in this example we call the file `random.js`. For this you best use our prefabricated [Template](https://github.com/EvergeneIO/community-endpoints/blob/main/template/template.js) and paste everything there.

The file should now look like this:
```js
module.exports = {
    execute: async (req, res, endpoint, tools) => {
        res.header("Content-Type", "application/json");
        res.send({hello: "world"});
    }
}
```
Our system allows you to create a folder with your functions/files etc that is not visible to the API.

We create this folder now, the folder must be named `inv`
After you have created the folder you can put your `output.json` in it.
Now we have to define the `output.json`, we do this above the `module.exports`.
```js
const output = require('./path/to/output.json');
```
Now you can copy the content of the route we created before and paste it into `random.js` under Execute.

If you did everything right until now the code looks like this:
```js
const output = require('./inv/output.json');
module.exports = {
    execute: async (req, res, endpoint, tools) => {
        let randomOutput = output[Math.floor(Math.random() * output.length)];
        res.header("Content-Type", "application/json");
        res.send(randomOutput);
    }
}
```

# How do I put my endpoint online?
Then you clone the repository on your PC and copy the folder you just created into the root directory, when you are ready you push the whole thing to your forked repository and create a pull request.
