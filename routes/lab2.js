// import the express module
const express = require('express');
// create a router object to configure endpoint handler
const router = express.Router();

//Get Handler 
//Using this get and pass your endpoint path.
//Pass the middleware function as a parameter 
router.get('/', (req, res, next) => {

    //Create the first variable as firstnum
    var firstnum = req.query.x;

    //Create the second variable as secondnum
    var secondnum = req.query.y;

    //Using the phaseflot pass the firstnum value to variable x
    var x = parseFloat(firstnum, 10);

    //Using the phaseflot pass the secondnum value to variable y
    var y = parseFloat(secondnum, 4);

    //Initalize result value 0.
    var result = 0;

    //call the method
    var method = req.query.method;

    //Using if statement add two numbers x + y
    if (method == 'add') {
        result = x + y;
    }
    //Using else if statement divide two numbers
    else if (method == 'divide') {
        result = x / y;
    }
    //Using else if statement subtract two numbers
    else if (method == 'subtract') {
        result = x - y;
    }
    //Using else if statement multiply two numbers
    else if (method == 'multiply') {
        result = x * y;
    }
    //Using else statement send the error message
    else {
        res.json('Please enter valid mathematical operation!!!');
    }

    //send the x, y, operstion and result as Json response
    res.json({
        "x": x,
        "y": y,
        "operation": method,
        "result": result
    });
});

//export the router object
module.exports = router;