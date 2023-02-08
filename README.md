# wtfcode
WTFCode. A very bare-bones, and very impractical programming language, with an interpreter written in JavaScript. Open the HTML file and call the window.WTFCode.evaluate(code) function to evaluate some code.

# Why?
Because I want to.

# How?
WTFCode is a language that focuses more on words than other characters. The language is meant to be as impractical as possible. Below you can find some documentation for the language that I wrote ~in a quick rush~.

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

After typing the ```if``` instruction, you place a condition between square brackets ```[ ]```. This condition is a line of WTFCode. The interpreter executes this code, and if it returns ```true```, it executes the code on the next lines. The ```if``` statement is closed with the ```ESCAPE``` instruction.

#### JSEVAL

Evaluates a line of JavaScript and returns the code's return value.

```JSEVAL [CODE]```

This snippet of JavaScript may only be something that can be put inside a ```return``` statement. If you want to write something more advanced to pass to ```JSEVAL```, try ```Function(...)()```.

#### RETURN
Returns a value from the code. This immediately terminates your program, and the returned value may be accessed from JavaScript, from where the interpreter was called. Or, if you're ```return```ing from a function, that function will be terminated and you'll be able to access the return value from your code.

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

#### Math operators
Very impractical way to do math. Here are all the math instructions. They have multiple ways to call them. The arguments are the operation terms, in order.

```[ADD|SUM] [DATATYPE] [VALUE] [DATATYPE] [VALUE] ...```

```[SUBTRACT|SUB|DEDUCT|DED] [DATATYPE] [VALUE] [DATATYPE] [VALUE] ...```

```[DIVIDE|DIV] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

```[MULTIPLY|MULT] [DATATYPE] [VALUE] [DATATYPE] [VALUE] ...```

```[MODULUS|MODULO|MOD] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

#### Comparison instructions
Instructions that allow you to compare values. Arguments are in comparison order. For example, ```GREAT NUMBER 5 NUMBER 2``` becomes ```5 > 2```.

```[EQUALS|EQUAL|EQ] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

```[LESSTHAN|LESS] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

```[GREATERTHAN|GREATER|GREATTHAN|GREAT] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

```[LESSTHANOREQUAL|LESSTHANEQUAL|LESSEQUAL|LESSEQ] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

```[GREATERTHANOREQUAL|GREATTHANOREQUAL|GREATTHANEQUAL|GREATEQUAL|GREATEQ] [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

#### Logical operators
Time to go back to 8th grade.

```NOT [DATATYPE] [VALUE]```

```AND [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

```OR [DATATYPE] [VALUE] [DATATYPE] [VALUE]```

Both the comparison instructions and the logic operators return boolean values. To compare them to fixed values, do the comparison to ```RETURNVALUE (JSEVAL [true|false])```. I'm too lazy to add another datatype.

#### WHILE
An upgrade from the classic ```IF```. Evaluates a piece of WTFCode and takes action, repeatedly, depending on the result.

```
WHILE [(CONDITION)]
...
ESCAPE
```

After typing the ```while``` instruction, you place a condition between square brackets ```[ ]```. This condition is a line of WTFCode. The interpreter executes this code, and if it returns ```true```, it repeatedly executes the code on the next lines until the condition becomes false. The ```while``` statement is closed with the ```ESCAPE``` instruction.

#### RANDOM
Returns a random number in a specified range.

```
RANDOM [DATATYPE] [VALUE] [DATATYPE] [VALUE]
```

The first parameter is the minimum, and the second is the maximum.

#### FLOOR
Shaves the decimal points off of a number.

```
FLOOR [DATATYPE] [VALUE]
```

For example, specifying the number ```69.420``` will return ```69```.

#### UPPER & LOWER
Two instructions to change the case of a string.

```UPPER [DATATYPE] [VALUE]```

```LOWER [DATATYPE] [VALUE]```

```UPPER``` will turn a string to uppercase. ```I love Cats so much!``` turns into ```I LOVE CATS SO MUCH!```.

```LOWER``` will turn a string to lowercase. ```I LOVE CATS so much!``` turns into ```i love cats so much!```.

### Functions

#### Defining a Function
A Function is a piece of code that can be called from elsewhere in the program, just like a built-in instruction. Here is the syntax for function definition.

```
FUNCTION [NAME] [(ARGUMENTS)]
...
ESCAPE
```

Here, ```[NAME]``` is the name of the function. In ```(ARGUMENTS)```, you'll specify the arguments that your function will take, under this syntax: ```[DATATYPE] [NAME] [DATATYPE] [NAME] ...```. The arguments can be accessed inside the function as variables, by their ```[NAME]```, so, like ```VAR GET [NAME]```. If you specify an argument with the name of a variable outside the function, you won't be able to use the variable *inside* the function, as it will be overriden. The value outside will not be affected, even if you change it from inside. Yes, scopes!

If you wish to not specify arguments, just omit that part. You can use ```FUNCTION [NAME] []``` or just ```FUNCTION [NAME]```. You'll then write your function code, and to close it off, like usual, use the ```ESCAPE``` instruction. By the way, I know what you're thinking, no, built-in instructions cannot be overriden.

#### Calling a Function
You can call your new Function anywhere in the program, *but only after its definition*. To do that, just call it as any other instruction. Any additional arguments you provide that the function does not request are ignored. Omitting arguments will make their value inside the function ```undefined```.

```[NAME] [DATATYPE] [VALUE] [DATATYPE] [VALUE] ...```

#### Example Function
Here is a simple function that takes in a number, and returns its value times 10:

```
FUNCTION MULT10 [NUMBER NR]
RETURN RETURNVALUE (MULT RETURNVALUE (VAR GET NR) NUMBER 10)
ESCAPE
```

And to call it:

```
MULT10 NUMBER 69
```

Which will return ```690```.

### Comments
Glad you made it this far! The WTFCode interpreter ignores lines whose first word is not a valid instruction. Though, it's best practice to always start comments with a symbol or random gibberish, as none of those will ever become instructions. A symbol which I like using is ```#```.

Here are some examples of comments:

```
For loops may soon be added to WTFCode.
The comment above me is an example of how you shouldn't write comments. For loops will indeed be added at some point, and the FOR at the beginning will be interpreted as a valid instruction, breaking the program.
# The comment above me is very safe, as there's no way I'm ever adding a "the" instruction. But you might. Functions are a thing.
// The comment above me is infinitely safe, as its first "word" is a symbol, and I will never add instructions containing non-alphanumeric characters.
-- Same for the one above me
? Can you guess the programming languages which use the comment prefixes of the last three comments? I challenge you. By the way, no language will let you start a comment with "?". That one is just for fun.
```

### Examples
Here are some examples so you can see WTFCode in action.

#### Drinks
Code:
```
return returnvalue (concat returnvalue (random number 1 number 100) string " people walk into a bar. Each of them orders " returnvalue (random number 1 number 100) string " drinks. But there's only " returnvalue (random number 1 number 100) string " people working at the bar, and they can't handle that madness!")
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
var set returnvalue a (random number 1 number 100)
var set returnvalue b (random number 1 number 100)
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
var set returnvalue braincells (random number 1 number 5)
show warn returnvalue (concat string "Asicosilomu has " returnvalue (var get braincells) string " braincells.")
show info string "This is because they have yet to implement native comparison instructions, which means that comparison can only be done using jseval on fixed values, but variables cannot be compared."
if [eq returnvalue (random number 1 number 2) number 2]
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

~I was trying to come up with another example program, but realized I didn't implement native variable comparison instructions yet. So here is a program that shows how I have less than 5 braincells (randomized) because of that, and shows a random message, telling you to either wait it out, as it can get better, or that there's no point in waiting.~

They're released now! Yay!

#### 99 Bottles of Beer
Code:
```
var set number beer 99
show log returnvalue (concat string "There are " returnvalue (var get beer) string " bottles of beer on the wall.")
while [great returnvalue (var get beer) number 0]
var set returnvalue knock (random number 1 number 10)
if [less returnvalue (var get knock) returnvalue (var get beer)]
var set returnvalue beer (sub returnvalue (var get beer) returnvalue (var get knock))
show log returnvalue (concat returnvalue (var get knock) string " bottles of beer were knocked off the wall. There are now " returnvalue (var get beer) string " bottles of beer on the wall.")
escape
if [not returnvalue (less returnvalue (var get knock) returnvalue (var get beer))]
show log returnvalue (concat string "The last " returnvalue (var get beer) string " bottles of beer were knocked off the wall. There are now no bottles of beer on the wall.")
var set number beer 0
escape
escape
```

Output:
```
LOG: There are 99 bottles of beer on the wall.
LOG: 10 bottles of beer were knocked off the wall. There are now 89 bottles of beer on the wall.
LOG: 2 bottles of beer were knocked off the wall. There are now 87 bottles of beer on the wall.
LOG: 8 bottles of beer were knocked off the wall. There are now 79 bottles of beer on the wall.
LOG: 5 bottles of beer were knocked off the wall. There are now 74 bottles of beer on the wall.
LOG: 4 bottles of beer were knocked off the wall. There are now 70 bottles of beer on the wall.
LOG: 4 bottles of beer were knocked off the wall. There are now 66 bottles of beer on the wall.
LOG: 4 bottles of beer were knocked off the wall. There are now 62 bottles of beer on the wall.
LOG: 7 bottles of beer were knocked off the wall. There are now 55 bottles of beer on the wall.
LOG: 3 bottles of beer were knocked off the wall. There are now 52 bottles of beer on the wall.
LOG: 3 bottles of beer were knocked off the wall. There are now 49 bottles of beer on the wall.
LOG: 1 bottles of beer were knocked off the wall. There are now 48 bottles of beer on the wall.
LOG: 3 bottles of beer were knocked off the wall. There are now 45 bottles of beer on the wall.
LOG: 10 bottles of beer were knocked off the wall. There are now 35 bottles of beer on the wall.
LOG: 10 bottles of beer were knocked off the wall. There are now 25 bottles of beer on the wall.
LOG: 6 bottles of beer were knocked off the wall. There are now 19 bottles of beer on the wall.
LOG: 9 bottles of beer were knocked off the wall. There are now 10 bottles of beer on the wall.
LOG: 8 bottles of beer were knocked off the wall. There are now 2 bottles of beer on the wall.
LOG: The last 2 bottles of beer were knocked off the wall. There are now no bottles of beer on the wall.
```

Notes:

Randomly yeets bottles of beer off the wall until there's none left. A good demo for math, comparison and logic operators.

#### Digits Together
Code:
```
var set number nr 6969
var set number sum 0
while [great returnvalue (var get nr) number 0]
var set returnvalue digit (mod returnvalue (var get nr) number 10)
var set returnvalue sum (add returnvalue (var get sum) returnvalue (var get digit))
var set returnvalue nr (floor returnvalue (div returnvalue (var get nr) number 10))
escape
return returnvalue (var get sum)
```

Output:
```
30
```

Notes:

A program that calculates the sum of all of a number's digits. The number is declared in the variable on the first line.

#### Username Generator
Code:
```
var set returnvalue iadjective (random number 1 number 5)
var set returnvalue inoun (random number 1 number 5)
if [eq returnvalue (var get iadjective) number 1]
var set string adjective "Optimistic"
escape
if [eq returnvalue (var get iadjective) number 2]
var set string adjective "Amazing"
escape
if [eq returnvalue (var get iadjective) number 3]
var set string adjective "Tactical"
escape
if [eq returnvalue (var get iadjective) number 4]
var set string adjective "Generous"
escape
if [eq returnvalue (var get iadjective) number 5]
var set string adjective "Interesting"
escape
if [eq returnvalue (var get inoun) number 1]
var set string noun "Potato"
escape
if [eq returnvalue (var get inoun) number 2]
var set string noun "Fisher"
escape
if [eq returnvalue (var get inoun) number 3]
var set string noun "Kitten"
escape
if [eq returnvalue (var get inoun) number 4]
var set string noun "Debugger"
escape
if [eq returnvalue (var get inoun) number 5]
var set string noun "Player"
escape
return returnvalue (concat returnvalue (var get adjective) returnvalue (var get noun))
```

Output:
```
TacticalPotato
```

Notes:

A simple username generator.

#### Equation Randomizer
Code:
```
# Configurations
var set number min 0
var set number max 1000

# Function to get a random number in the range configured
function getRandomFR
return returnvalue (random returnvalue (var get min) returnvalue (var get max))
escape

# Function to render the equation itself
function renderEquation [number a number b number otype]
if [eq returnvalue (var get otype) number 1]
var set returnvalue result (add returnvalue (var get a) returnvalue (var get b))
var set string symbol " + "
escape
if [eq returnvalue (var get otype) number 2]
var set returnvalue result (sub returnvalue (var get a) returnvalue (var get b))
var set string symbol " - "
escape
if [eq returnvalue (var get otype) number 3]
var set returnvalue result (mult returnvalue (var get a) returnvalue (var get b))
var set string symbol " * "
escape
if [eq returnvalue (var get otype) number 4]
var set returnvalue result (div returnvalue (var get a) returnvalue (var get b))
var set string symbol " / "
escape
return returnvalue (concat returnvalue (var get a) returnvalue (var get symbol) returnvalue (var get b) string " = " returnvalue (var get result))
escape

return returnvalue (renderEquation returnvalue (getRandomFR) returnvalue (getRandomFR) returnvalue (random number 1 number 4))
```

Output:
```
446 * 901 = 401846
```

Notes:

Program that spits out a random math equation with one of the four basic operators (+, -, *, /) and two terms.

# WTFCode 1.2.2
A terrible "programming" language by Asicosilomu. This is just the interpreter.
