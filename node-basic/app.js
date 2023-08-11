//provide relative path and get the entire exported object
// const helpers = require("./helpers")

// //here we are deconstructing the object
// const { except } = require("./helpers")

// //instead of process.mainModule use require.main
// require.main.children.forEach(childModule =>
// {
//     console.log("Exported methods - ", except(childModule.id, childModule.path), childModule.exports)
// })

// //usage of the exported methods form the helper.js
// console.log("Sum:", helpers.sum(10, 200))
// console.log("Difference:", helpers.difference(10, 200))
// console.log("Multiply:", helpers.multiply(10, 200))
// console.log("Divide:", helpers.divide(10, 200))


//usage of http
//this is how an npm or framework lib can be imported
//const http = require('http')

// const server = http.createServer((req, resp) =>
// {
//     resp.end("response from server");
// })

// server.listen(3000);

//usage of express
// const express = require('express')
// const app = express()

// app.get('/', function (req, res)
// {
//     res.send('Home page')
// })

// app.get('/:p1', function (req, res)
// {
//     res.status(200).send(req.params)
// })

// app.get('/about', function (req, res)
// {
//     res.send('About page')
// })

// app.listen(3000)

//example of file system
// const fs = require('fs')

// const watcher = fs.watch("target.txt", () =>
// {
//     console.log("file changed")
// })

//example of async programming
// const fs = require('fs')

// fs.readFile("target.txt", (err, data) =>
// {
//     if (err)
//     {
//         console.log(err)
//     }

//     console.log(data.toString())
// })

// console.log("this line executes before the file is loading. showing how non blocking (i.e. async) event loop works");

//example of sync programming
// const fs = require('fs')

// const data = fs.readFileSync("target.txt")
// console.log(data.toString())

// console.log("this line executes after the file is loading. showing how sync works");

//example of functional approach
// const fs = require('fs')

// const errorHandler = err => console.log(err)
// const dataHandler = data => console.log(data.toString())

// fs.readFile("target.txt", (err, data) =>
// {
//     if (err) errorHandler(err)

//     dataHandler(data)
// })