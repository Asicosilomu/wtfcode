# wtfcode
WTFCode. A very bare-bones, and very impractical programming language, with an interpreter written in JavaScript. Open the HTML file and call the window.WTFCode.evaluate(code) function to evaluate some code.

# Why?
Because I want to.

# How?
WTFCode is a language that focuses more on words than other characters. The language is meant to be as impractical as possible. Below you can find some documentation for the language that I wrote in a quick rush.

### Syntax
Each line in WTFCode represents an instruction. They must be on separate lines, if the medium does not allow, use ```\n```.
Each line must begin with the name of the instruction, which may be just one word. What follows are, optionally, parameters for that instruction.
Easy, right?

### Datatypes
WTFCode uses *three* datatypes, which must be used when passing values in arguments to indicate their value, unless the instruction requests otherwise.
Those are string, number and returnvalue.

Strings are very simple. All you do is wrap them in double quotes. WTFCode only accepts double quotes here, and they may not be escaped. Starting to see why I'm calling it impractical?

Numbers are just, numbers. No spaces, just numbers. Like ```23```. And ```37.452```. Use standard JavaScript format, like anything that's accepted by the ```Number()``` function.

Returnvalues indicate that you would like to pass whatever a specific line of WTFCode returns. Said code is wrapped in brackets ```( )```. The code inside may contain brackets, they just have to be opened and closed properly.

In parameters, usually you'd pass arguments under the form of [datatype] [value].

### Instructions
Here are all instructions supported by the current interpreter version. They're case insensitive.

#### SHOW
Displays text on screen. Equivalent of ```console.log()```

```SHOW [LOGLEVEL (LOG|WARN|INFO|ERROR)] [DATATYPE] [VALUE] [DATATYPE] [VALUE] ...```

The first argument is the log level under which you'd like to show the message. Then you have as many arguments as strings you want to display, under that format. They are displayed on separate lines. To display multiple strings on the same line, see ```CONCAT```.

#### THROW
Throws an exception. Equivalent of ```throw new Error()```.

```THROW [DATATYPE] [VALUE]```

You may specify one value, of any datatype, representing the exception's text. This will terminate your program, even if it's caught outside.

#### IF

The classic ```if``` statement. Evaluates a piece of WTFCode and takes action depending on the result.

```
IF [(CONDITION)]
...
ESCAPE
```

After typing the ```if``` instruction, you place a condition between square brackets ```[ ]```. This condition is a line of WTFCode. The interpreter executes this code, and if it returns ```true```, it executes the code on the next lines. The ```if``` statement is closed with the ```ESCAPE``` instruction. Currently, the only instruction that can return a boolean is ```JSEVAL```.

#### JSEVAL

Evaluates a line of JavaScript and returns the code's return value.

```JSEVAL [CODE]```

This snippet of JavaScript may only be something that can be put inside a ```return``` statement. If you want to write something more advanced to pass to ```JSEVAL```, try ```Function(...)()```.

#### RETURN
Returns a value from the code. This immediately terminates your program, and the returned value may be accessed from JavaScript, from where the interpreter was called.

```RETURN [DATATYPE] [VALUE]```

Only one value may be returned. The datatype must be specified.

#### VARIABLE
Instruction for managing variables. It also has the shorthand of ```VAR```. This instruction supports two modes: ```GET``` and ```SET```, which allow you to get and set values, respectively.

##### GET
Allows you to get a variable's value.

```VARIABLE GET [NAME]```

Will return the value of [NAME].

##### SET
Allows you to set a variable's value.

```VARIABLE SET [DATATYPE] [NAME] [VALUE]```

Here, ```DATATYPE``` is the datatype of the value to set, ```NAME```, the name of the target variable, and ```VALUE```, the desired value.

These are the two modes for ```VAR```.

#### CONCAT
Concatenates two or more values as a string.

```CONCAT [DATATYPE] [VALUE] [DATATYPE] [VALUE] ...```

You may concatenate as many values as you'd like, supplied as arguments, under this form.

### Examples
Here are some examples so you can see WTFCode in action.

#### Drinks
Code:
```
return returnvalue (concat returnvalue (jseval Math.floor(Math.random() * 100)) string " people walk into a bar. Each of them orders " returnvalue (jseval Math.floor(Math.random() * 100)) string " drinks. But there's only " returnvalue (jseval Math.floor(Math.random() * 100)) string " people working at the bar, and they can't handle that madness!")
```

Output:
```
37 people walk into a bar. Each of them orders 96 drinks. But there's only 86 people working at the bar, and they can't handle that madness!
```

Notes:

Outputs a preset text about drinks, with randomized numbers.

#### Lucky Numbers
Code: 
```
var set returnvalue a (jseval Math.floor(Math.random() * 100))
var set returnvalue b (jseval Math.floor(Math.random() * 100))
return returnvalue (concat string "Your lucky numbers are " returnvalue (var get a) string " and " returnvalue (var get b) string ".")
```

Output:
```
Your lucky numbers are 49 and 25.
```

Notes:

Tells you your lucky numbers. Randomized!

#### asicosilomu dumb idiot
Code:
```
var set returnvalue braincells (jseval Math.floor(Math.random() * 6))
show warn returnvalue (concat string "Asicosilomu has " returnvalue (var get braincells) string " braincells.")
show info string "This is because they have yet to implement native comparison instructions, which means that comparison can only be done using jseval on fixed values, but variables cannot be compared."
if [jseval (Math.floor(Math.random() * 2) == 1)]
return string "You could wait it out, though..."
escape
return string "There's no point in waiting."
```

Output:
```
WARN: Asicosilomu has 2 braincells.
INFO: This is because they have yet to implement native comparison instructions, which means that comparison can only be done using jseval on fixed values, but variables cannot be compared.
You could wait it out, though...
```

Notes:

I was trying to come up with another example program, but realized I didn't implement native variable comparison instructions yet. So here is a program that shows how I have less than 5 braincells (randomized) because of that, and shows a random message, telling you to either wait it out, as it can get better, or that there's no point in waiting.

# WTFCode 1.1.2
A terrible "programming" language by Asicosilomu. This is just the interpreter.
