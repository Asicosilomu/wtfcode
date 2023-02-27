// WTFCode by Asicosilomu. Version 1.5.0.
// TEH LANGUAGE OF TEH GODS!1!1!1!!!1!!!!!1!111!!

// WTFCode modules(TM) Extend WTFCode functionality with WTFCode!
var modules = {
"dialogs": `
    function alert [string text]
        include local/property
        return returnvalue (ecfjs returnvalue (prop get returnvalue (jseval window) string "alert") returnvalue (var get text))
    escape

    function confirm [string text]
        include local/property
        return returnvalue (ecfjs returnvalue (prop get returnvalue (jseval window) string "confirm") returnvalue (var get text))
    escape

    function prompt [string text string dvalue]
        include local/property
        return returnvalue (ecfjs returnvalue (prop get returnvalue (jseval window) string "prompt") returnvalue (var get text) returnvalue (var get dvalue))
    escape
`,
"comparison": `
    # greater than function and aliases
    function great [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a > b;}) returnvalue (var get a) returnvalue (var get b))
    escape
    function greater [number a number b]
        return returnvalue (great number a number b)
    escape
    function greatthan [number a number b]
        return returnvalue (great number a number b)
    escape
    function greaterthan [number a number b]
        return returnvalue (great number a number b)
    escape

    # less than function and aliases
    function less [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a < b;}) returnvalue (var get a) returnvalue (var get b))
    escape
    function lessthan [number a number b]
        return returnvalue (less number a number b)
    escape

    # greater than or equal function and aliases
    function greateq [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a >= b;}) returnvalue (var get a) returnvalue (var get b))
    escape
    function greatequal [number a number b]
        return returnvalue (greateq number a number b)
    escape
    function greatthanequal [number a number b]
        return returnvalue (greateq number a number b)
    escape
    function greatthanorequal [number a number b]
        return returnvalue (greateq number a number b)
    escape
    function greaterthanorequal [number a number b]
        return returnvalue (greateq number a number b)
    escape

    # less than or equal function and aliases
    function lesseq [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a <= b;}) returnvalue (var get a) returnvalue (var get b))
    escape
    function lessequal [number a number b]
        return returnvalue (lesseq number a number b)
    escape
    function lessthanequal [number a number b]
        return returnvalue (lesseq number a number b)
    escape
    function lessthanorequal [number a number b]
        return returnvalue (lesseq number a number b)
    escape
`,
"logic": `
    function not [any val]
        return returnvalue (ecfjs returnvalue (jseval function(val){return !val;}) returnvalue (var get val))
    escape
    function inverse [any val]
        return returnvalue (not returnvalue (var get val))
    escape
`,
"string": `
    function string [any str]
        return returnvalue (ecfjs returnvalue (jseval function(s){return s.toString()}) returnvalue (var get str))
    escape

    function upper [string str]
        return returnvalue (ecfjs returnvalue (jseval function(str){return str.toUpperCase();}) returnvalue (var get str))
    escape
    function lower [string str]
        return returnvalue (ecfjs returnvalue (jseval function(str){return str.toLowerCase();}) returnvalue (var get str))
    escape

    function concat
        include local/comparison
        include local/property
        include local/string
        include local/array
        include local/math
        include local/nop
        var set string final ""
        var set number i 0
        while [less returnvalue (var get i) returnvalue (array length returnvalue (var get arguments))]
            array set returnvalue (var get arguments) returnvalue (var get i) returnvalue (string returnvalue (array get returnvalue (var get arguments) returnvalue (var get i)))
            var set returnvalue final (ecfjs returnvalue (jseval function(s, a){return s+a;}) returnvalue (var get final) returnvalue (array get returnvalue (var get arguments) returnvalue (var get i)))
            nop (var get final)
            var set returnvalue i (add returnvalue (var get i) number 1)
        escape
        return returnvalue (var get final)
    escape
`,
"math": `
    function floor [number nr]
        return returnvalue (ecfjs returnvalue (jseval Math.floor) returnvalue (var get nr))
    escape

    function chainadd
        include local/comparison
        include local/property
        include local/string
        include local/array
        var set number final 0
        var set number i 0
        while [less returnvalue (var get i) returnvalue (array length returnvalue (var get arguments))]
            var set returnvalue final (ecfjs returnvalue (jseval function(a, b){return a+b;}) returnvalue (var get final) returnvalue (array get returnvalue (var get arguments) returnvalue (var get i)))
            var set returnvalue i (ecfjs returnvalue (jseval function(a, b){return a+b;}) returnvalue (var get i) number 1))
        escape
        return returnvalue (var get final)
    escape

    function chainsub
        include local/comparison
        include local/property
        include local/string
        include local/array
        var set returnvalue final (array get returnvalue (var get arguments) number 0)
        var set number i 1
        while [less returnvalue (var get i) returnvalue (array length returnvalue (var get arguments))]
            var set returnvalue final (ecfjs returnvalue (jseval function(a, b){return a-b;}) returnvalue (var get final) returnvalue (array get returnvalue (var get arguments) returnvalue (var get i)))
            var set returnvalue i (ecfjs returnvalue (jseval function(a, b){return a+b;}) returnvalue (var get i) number 1))
        escape
        return returnvalue (var get final)
    escape

    function chainmult
        include local/comparison
        include local/property
        include local/string
        include local/array
        var set returnvalue final (array get returnvalue (var get arguments) number 0)
        var set number i 1
        while [less returnvalue (var get i) returnvalue (array length returnvalue (var get arguments))]
            var set returnvalue final (ecfjs returnvalue (jseval function(a, b){return a*b;}) returnvalue (var get final) returnvalue (array get returnvalue (var get arguments) returnvalue (var get i)))
            var set returnvalue i (ecfjs returnvalue (jseval function(a, b){return a+b;}) returnvalue (var get i) number 1))
        escape
        return returnvalue (var get final)
    escape

    function add [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a+b;}) returnvalue (var get a) returnvalue (var get b))
    escape

    function sub [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a-b;}) returnvalue (var get a) returnvalue (var get b))
    escape

    function mult [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a*b;}) returnvalue (var get a) returnvalue (var get b))
    escape

    function div [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a/b;}) returnvalue (var get a) returnvalue (var get b))
    escape

    function mod [number a number b]
        return returnvalue (ecfjs returnvalue (jseval function(a, b){return a%b;}) returnvalue (var get a) returnvalue (var get b))
    escape
`,
"random": `
    function random [number min number max]
        include local/math
        return returnvalue (floor returnvalue (ecfjs returnvalue (jseval function(a, b){return Math.random() * (b - a + 1) + a}) returnvalue (var get min) returnvalue (var get max)))
    escape
`,
"dom": `
    function dom [mode mode any one any two]
        include local/string
        if [eq returnvalue (lower returnvalue (var get mode)) string "create"]
            var set returnvalue name (string returnvalue (var get one))
            return returnvalue (ecfjs returnvalue (jseval function(n){return document.createElement(n)}) returnvalue (var get name))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "query"]
            var set returnvalue selector (string returnvalue (var get two))
            return returnvalue (ecfjs returnvalue (jseval function(e, s){return e.querySelector(s)}) returnvalue (var get one) returnvalue (var get selector))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "queryall"]
            var set returnvalue selector (string returnvalue (var get two))
            return returnvalue (ecfjs returnvalue (jseval function(e, s){return e.querySelectorAll(s)}) returnvalue (var get one) returnvalue (var get selector))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "append"]
            return returnvalue (ecfjs returnvalue (jseval function(t, e){return t.appendChild(e)}) returnvalue (var get one) returnvalue (var get two))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "clone"]
            return returnvalue (ecfjs returnvalue (jseval function(e){return e.cloneNode()}) returnvalue (var get one))
        escape
    escape
`,
"property": `
    function property [mode mode any object string property any value]
        include local/string
        if [eq returnvalue (lower returnvalue (var get mode)) string "get"]
            return returnvalue (ecfjs returnvalue (jseval function(o, p){return o[p]}) returnvalue (var get object) returnvalue (var get property))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "set"]
            return returnvalue (ecfjs returnvalue (jseval function(o, p, v){return o[p] = v;}) returnvalue (var get object) returnvalue (var get property) returnvalue (var get value))
        escape
    escape
    function prop [mode mode any object string property any value]
        include local/string
        if [eq returnvalue (lower returnvalue (var get mode)) string "get"]
            return returnvalue (property get returnvalue (var get object) returnvalue (var get property))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "set"]
            return returnvalue (property set returnvalue (var get object) returnvalue (var get property) returnvalue (var get value))
        escape
    escape
`,
"array": `
    function array [mode mode any array number index any value]
        include local/string
        if [eq returnvalue (lower returnvalue (var get mode)) string "get"]
            return returnvalue (ecfjs returnvalue (jseval function(o, p){return o[p]}) returnvalue (var get array) returnvalue (var get index))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "set"]
            return returnvalue (ecfjs returnvalue (jseval function(o, p, v){return o[p] = v;}) returnvalue (var get array) returnvalue (var get index) returnvalue (var get value))
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "create"]
            return returnvalue (jseval [])
        escape
        if [eq returnvalue (lower returnvalue (var get mode)) string "length"]
            return returnvalue (ecfjs returnvalue (jseval function(o){return o.length;}) returnvalue (var get array))
        escape
    escape
`,
"ostream": `
    function show [mode mode any str]
        include local/property
        include local/string
        var set returnvalue func (prop get returnvalue (jseval console) returnvalue (lower returnvalue (var get mode)))
        ecfjs returnvalue (var get func) returnvalue (var get str)
    escape

    function show_chain [mode mode]
        include local/comparison
        include local/property
        include local/string
        include local/array
        include local/math
        var set returnvalue func (prop get returnvalue (jseval console) returnvalue (lower returnvalue (var get mode)))
        var set number i 0
        while [less returnvalue (var get i) returnvalue (array length returnvalue (var get arguments))]
            ecfjs returnvalue (var get func) returnvalue (array get returnvalue (var get arguments) returnvalue (var get i))
            var set returnvalue i (add returnvalue (var get i) number 1)
        escape
    escape
`,
"exception": `
    function throw [any exceptionText]
        var set returnvalue exceptionText (string returnvalue (var get exceptionText))
        ecfjs returnvalue (jseval function(e){throw new Error(e);}) returnvalue (var get exceptionText))
    escape
`,
"nop": `
    function nop
    escape
`
};

var scriptIndex = 0;

window.WTFCode = {};
window.WTFCode.processes = {};
window.WTFCode.evaluate = function(code = `import local/exception\nthrow string "You must specify a program to run!"`, variables = {}, functions = {}, isFunction = false, userCall = true)
{
// initialize process data
if (userCall) { var proc = {}; window.WTFCode.processes["SCRIPT" + scriptIndex.toString()] = proc; scriptIndex++; };
if (proc) { proc.variables = variables; proc.functions = functions; };

var lines = code.split("\n");
var returnValue = null;
var i = 0;
for (i = 0; i < lines.length; i++)
{
    var line = lines[i].trim();
    var instruction = line.split(" ")[0];
    if (instruction.toUpperCase() == "IF")
    {
    var data = parsestat(lines, line, instruction, i);
    i = data.i;
    if (window.WTFCode.evaluate(data.condition, variables, functions, false, false)) { var response = window.WTFCode.evaluate(data.toExec, variables, functions, false, false); if (response != null) { return response; }; };
    } else if (instruction.toUpperCase() == "JSEVAL")
    {
    var condition = " ";
    var split = line.split(" ");
    var i3 = 1;
    for (i3 = 1; i3 < split.length; i3++)
    {
        condition += " " + split[i3];
    };
    returnValue = Function("return" + condition + ";")();
    } else if (instruction.toUpperCase() == "RETURN")
    {
    var stuff = line.substr(instruction.length + 1, line.length - 1);
    stuff = parseParams(stuff);
    if (stuff[0].toUpperCase() == "RETURNVALUE") { if (!isFunction) { return window.WTFCode.evaluate(stuff[1], variables, functions, false, false); } else { returnValue = window.WTFCode.evaluate(stuff[1], variables, functions, false, false); }; } else { if (!isFunction) { return stuff[1]; } else { returnValue = stuff[1]; }; };
    } else if (instruction.toUpperCase() == "VARIABLE" || instruction.toUpperCase() == "VAR")
    {
    var spl = line.split(" ");
    var mode = spl[1];
    var dataType = spl[2];
    var i3 = 2;
    if (mode.toUpperCase() == "GET") returnValue = variables[spl[2]];
    if (mode.toUpperCase() == "SET")
    {
        var thing = parseParams(dataType + " " + line.substr(instruction.length + 1 + mode.length + 1 + dataType.length + 1 + spl[3].length + 1, line.length - 1));
        if (thing[0].toUpperCase() == "RETURNVALUE") { variables[spl[3]] = window.WTFCode.evaluate(thing[1], variables, functions, false, false); } else { variables[spl[3]] = thing[1]; };
    };
    } else if (instruction.toUpperCase() == "EVENT")
    {
    var mode = line.split(" ")[1];
    var pars = parseParams(line.substr(instruction.length + mode.length + 2, line.length));
    if (mode.toLowerCase() == "bind")
    {
        for (var i = 1; i < 6; i += 2)
        {
        if (pars[i - 1].toUpperCase() == "RETURNVALUE") pars[i] = window.WTFCode.evaluate(pars[i], variables, functions, false, false);
        };
        pars[1][pars[3].toString()] = function(){window.WTFCode.evaluate(pars[5].toString(), proc.variables, proc.functions, false, false)};
    };
    } else if (instruction.toUpperCase() == "EQUALS" || instruction.toUpperCase() == "EQUAL" || instruction.toUpperCase() == "EQ")
    {
    var i2 = 1; var s = line.split(" ");
    var logLevel = s[1].toLowerCase();
    var params = "";
    for (i2 = 1; i2 < s.length; i2++)
    {
        params += s[i2] + " ";
    };
    params = parseParams(params);
    if (params[0].toUpperCase() != "RETURNVALUE") { var a = params[1]; } else { var a = window.WTFCode.evaluate(params[1].toString(), variables, functions, false, false); };
    if (params[2].toUpperCase() != "RETURNVALUE") { var b = params[3]; } else { var b = window.WTFCode.evaluate(params[3].toString(), variables, functions, false, false); };
    returnValue = a == b;
    } else if (instruction.toUpperCase() == "WHILE")
    {
    var data = parsestat(lines, line, instruction, i);
    i = data.i;
    while (window.WTFCode.evaluate(data.condition, variables, functions, false, false)) { var response = window.WTFCode.evaluate(data.toExec, variables, functions, false, false); if (response != null) { return response; break; }; };
    } else if (instruction.toUpperCase() == "AND")
    {
    var data = parsean(line, variables, functions);
    returnValue = data.a && data.b;
    } else if (instruction.toUpperCase() == "OR")
    {
    var data = parsean(line, variables, functions);
    returnValue = data.a || data.b;
    } else if (instruction.toUpperCase() == "FUNCTION")
    {
    var name = line.split(" ")[1];
    var params = line.trim().substr(instruction.length + name.length + 3, line.trim().length - (instruction.length + name.length + 4));
    var toSave = ""; var depth = 1;
    i++;
    while (depth > 0 && i < lines.length)
    {
        line = lines[i].trim();
        if (line.split(" ")[0].toUpperCase() == "IF" || line.split(" ")[0].toUpperCase() == "WHILE" || line.split(" ")[0].toUpperCase() == "FUNCTION") depth++;
        if (line.split(" ")[0].toUpperCase() == "ESCAPE") depth--;
        if (depth > 0) { toSave += line + "\n"; };
        i++;
    };
    i--;
    var funcObj = {};
    funcObj.code = toSave;
    funcObj.params = params;
    functions[name.toLowerCase()] = funcObj;
    } else if (instruction.toUpperCase() == "EXECCHILDFUNCJS" || instruction.toUpperCase() == "ECFJS")
    {
    var i2 = 1; var s = line.split(" ");
    var params = ""; var fpars = []; var pstr = "";
    for (i2 = 1; i2 < s.length; i2++)
    {
        params += s[i2] + " ";
    };
    params = parseParams(params);
    if (params[0].toUpperCase() == "RETURNVALUE") { var fn = window.WTFCode.evaluate(params[1], variables, functions, false, false); } else { var fn = params[1]; };
    for (i2 = 3; i2 < params.length - 1; i2 += 2) { if (params[i2 - 1].toUpperCase() != "RETURNVALUE") { fpars.push(params[i2]); } else { fpars.push(window.WTFCode.evaluate(params[i2].toString(), variables, functions, false, false)); }; };
    if (typeof fn == "function") { returnValue = fn.apply(null, fpars); } else { throw new Error("First argument must be js function! (ecfjs)"); };
    } else if (instruction.toUpperCase() == "IMPORT" || instruction.toUpperCase() == "INCLUDE")
    {
    var path = line.substr(instruction.length + 1, (line.length - instruction.length));
    // check if path is local
    if (path.toLowerCase().split("/")[0] == "local")
    {
        var module = path.toLowerCase().split("/")[1];
        // it exis?
        if (modules[module])
        {
        window.WTFCode.evaluate(modules[module], variables, functions, false, false);
        } else {
        console.warn("Module " + path + " couldn't load! Does it exis???");
        };
    } else {
        throw new Error("Remote modules are not supported you dumb idiot");
    };
    } else if (functions[instruction.toLowerCase()])
    {
    var i2 = 0;
    var func = functions[instruction.toLowerCase()];
    var varObj = {}; var entries = Object.entries(variables);
    // structuredclone hates functions :((((((((
    for (i2 = 0; i2 < entries.length; i2++) varObj[entries[i2][0]] = entries[i2][1];
    var params = parseParams(line.substr(instruction.length + 1, (line.length - instruction.length + 1)));
    var reqps = func.params.split(" "); var args = [];
    for (i2 = 0; i2 < params.length; i2 += 2)
    {
        if (reqps[i2])
        {
        if (reqps[i2].toUpperCase() == "MODE")
        {
            varObj[reqps[i2 + 1]] = params[i2];
            i2--;
        } else {
            if (params[i2].toUpperCase() == reqps[i2].toUpperCase() || reqps[i2].toUpperCase() == "ANY") { if (params[i2].toUpperCase() == "RETURNVALUE") { var val = window.WTFCode.evaluate(params[i2 + 1], variables, functions, false, false); } else { var val = params[i2 + 1]; }; varObj[reqps[i2 + 1]] = val; } else {
            if (reqps[i2].toUpperCase() == "RETURNVALUE") throw new Error("If a function requests a returnvalue, you gotta give it a returnvalue!");
            var fin = params[i2 + 1];
            if (params[i2].toUpperCase() == "RETURNVALUE") fin = window.WTFCode.evaluate(params[i2 + 1], variables, functions, false, false);
            if (reqps[i2].toUpperCase() == "STRING") fin = fin.toString();
            if (reqps[i2].toUpperCase() == "NUMBER") fin = Number(fin);
            varObj[reqps[i2 + 1]] = fin;
            };
        };
        } else {
        var finr = params[i2 + 1];
        if (params[i2].toUpperCase() == "RETURNVALUE") finr = window.WTFCode.evaluate(finr, variables, functions, false, false);
        args.push(finr);
        };
        if (args.length >= 1) varObj["arguments"] = args;
    };
    returnValue = window.WTFCode.evaluate(func.code, varObj, functions, true, false);
    };
};
return returnValue;
};

// Auxiliary functions to avoid repetition

// for and/or
function parsean(line, variables, functions)
{
var i2 = 1; var s = line.split(" "); var a, b;
var logLevel = s[1].toLowerCase();
var params = "";
for (i2 = 1; i2 < s.length; i2++)
{
    params += s[i2] + " ";
};
params = parseParams(params);
if (params[0].toUpperCase() != "RETURNVALUE") { a = params[1]; } else { a = window.WTFCode.evaluate(params[1], variables, functions, false, false); };
if (params[2].toUpperCase() != "RETURNVALUE") { b = params[3]; } else { b = window.WTFCode.evaluate(params[3], variables, functions, false, false); };
return {"a": a, "b": b};
};

// for if/while
function parsestat(lines, line, instruction, i)
{
var condition = line.trim().substr(instruction.length + 2, line.trim().length - (instruction.length + 3));
var toExec = ""; var depth = 1;
i++;
while (depth > 0 && i < lines.length)
{
    line = lines[i].trim();
    if (line.split(" ")[0].toUpperCase() == "IF" || line.split(" ")[0].toUpperCase() == "WHILE" || line.split(" ")[0].toUpperCase() == "FUNCTION") depth++;
    if (line.split(" ")[0].toUpperCase() == "ESCAPE") depth--;
    if (depth > 0) { toExec += line + "\n"; };
    i++;
};
i--;
return {"condition": condition, "toExec": toExec, "i": i};
};

// Function for parsing parameters passed to instructions
function parseParams(params)
{
var pars = params.split(" "); var i = 0;
var arr = [];
for (i = 0; i < pars.length; i++)
{
    var dataType = pars[i]; var value = null;
    if (dataType.toUpperCase() == "NUMBER") i++; value = Number(pars[i]);
    if (dataType.toUpperCase() == "STRING")
    {
    i++; var strf = ""; var ok = true; var ran = false;
    if (pars[i].indexOf("\"") == -1) throw new Error("SyntaxError", "String datatype value must be enclosed within quotes.");
    strf += pars[i].substr(1, pars[i].length) + " ";
    while (ok && pars[i].split("\"").length - 1 < 2)
    {
        ran = true; i++; if (pars[i].indexOf("\"") != -1) { strf += pars[i].substr(0, pars[i].length - 1) + " "; ok = false; } else { strf += pars[i] + " "; };
    };
    var dec = 1; if (!ran) dec = 2;
    strf = strf.substr(0, strf.length - dec);
    value = strf;
    };
    if (dataType.toUpperCase() == "RETURNVALUE")
    {
    var str, execString = ""; var depth = 1; i++; var i2 = 1;
    if (pars[i].indexOf("(") == -1) throw new Error("SyntaxError", "ReturnValue datatype value must be enclosed within brackets.");
    while (depth > 0)
    {
        var ind = pars[i].split("");
        for (i2 = i2; i2 < ind.length; i2++)
        {
        if (ind[i2] == "(") {
            depth++;
            if (depth >= 1) execString += ind[i2];
        } else {
            if (ind[i2] == ")")
            {
            depth--;
            if (depth >= 1) execString += ind[i2];
            } else {
            execString += ind[i2];
            }
        }
        };
        execString += " ";
        i2 = 0; i++;
    };
    value = execString.substr(0, execString.length - 1); i--;
    };
    arr.push(dataType); arr.push(value);
};
return arr;
};

document.addEventListener('DOMContentLoaded', () => {

// WTFCode SCRIPT evaluator
function evalScriptEl(v) { try { if (v.tagName.toLowerCase() == "script" && v.type.toLowerCase() == "text/wtfcode") { if (v.src) { console.warn("The WTFCode script evaluator does not support remote sources yet. Use inline you dummy"); } else { code = v.innerHTML }; window.WTFCode.evaluate(code); }; } catch {}; };

// Run any WTFCode on the page
document.querySelectorAll("script").forEach(evalScriptEl);

// Check for later additions
var observer = new MutationObserver(function (e) {
    e.forEach(function (m) { m.addedNodes.forEach(evalScriptEl); });
});

observer.observe(document.head, { childList: true });

});
