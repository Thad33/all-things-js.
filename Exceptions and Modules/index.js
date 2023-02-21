// JavaScript try...catch...finally Statement
// In this chapter, you will learn about the try...catch...finally statements to handle exceptions in JavaScript with the help of examples.

// The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.

// Types of Errors
// In programming, there can be two types of errors in the code:

// Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

// Runtime Error: This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.


// These errors that occur during runtime are called exceptions. Now, let's see how you can handle these exceptions.

// JavaScript try...catch Statement
// The try...catch statement is used to handle the exceptions. Its syntax is:

try {
    // body of try
} 
catch(error) {
    // body of catch  
}

//An example

// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

//NaN
// An error caught
// Error message: ReferenceError: a is not defined

// In the above program, a variable is not defined. When you try to print the a variable, the program throws an error. That error is caught in the catch block.

// JavaScript try...catch...finally Statement
// You can also use the try...catch...finally statement to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.

// The syntax of try...catch...finally block is:

try {
    // try_statements
} 
catch(error) {
    // catch_statements  
}
finally {
    // codes that gets executed anyway
}

const num= 100, deno = 'a';

try {
     console.log(num/deno);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

// NaN
// An error caught
// Error message: ReferenceError: a is not defined
// Finally will execute every time

// JavaScript try...catch in setTimeout
// The try...catch won't catch the exception if it happened in "timed" code, like in setTimeout(). For example,

try {
    setTimeout(function() {
        // error in the code
    }, 3000);
} catch (e) {
  console.log( "won't work" );
}

// The above try...catch won't work because the engine has already left the try..catch construct and the function is executed later.

// The try..catch block must be inside that function to catch an exception inside a timed function. For example,

setTimeout(function() {
    try {
        // error in the code
    } catch {
        console.log( "error is caught" );
    }
}, 3000);

// You can also use the throw statement with the try...catch statement to use user-defined exceptions. For example, a certain number is divided by 0. If you want to consider Infinity as an error in the program, then you can throw a user-defined exception using the throw statement to handle that condition.
//more examples on how to use try and catch and more of its functionality will be posted daily

let code = "ad", x=1231;
try{
   console.log(code)
} catch{
    console.log("Code has error")
} finally {
    console.log("Code is just a Language")
}
