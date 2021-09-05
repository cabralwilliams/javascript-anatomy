//Get variables from document
//First for loop
var variableName0 = document.querySelector("#variableName0");
var startValue0 = document.querySelector("#startValue0");
var finalValue0 = document.querySelector("#finalValue0");
var increment0 = document.querySelector("#increment0");
var submit0 = document.querySelector("#submit0");
var clear0 = document.querySelector("#clear0");
var forLoopCode0 = document.querySelector("#forLoopCode0");
var forLoopAction0 = document.querySelector("#forLoopAction0");
var forLoopConsole0 = document.querySelector("#forLoopConsole0");

//Second for loop
var forOmit1 = document.getElementsByName("forOmit");
var variableName1 = document.querySelector("#variableName1");
var startValue1 = document.querySelector("#startValue1");
var finalValue1 = document.querySelector("#finalValue1");
var increment1A = document.querySelector("#increment1A");
var submit1 = document.querySelector("#submit1");
var clear1 = document.querySelector("#clear1");
var forLoopBroken1 = document.querySelector("#forLoopBroken1");
var forLoopWorking1 = document.querySelector("#forLoopWorking1");
var forLoopNotes1 = document.querySelector("#forLoopNotes1");

//Create Object Variables
var forLoop0, forLoop0Timer, fl0var, fl0Start, fl0Final, fl0Increment, fl0CodeStr, fl0ActionStr, fl0ConsoleStr;
var forLoop1, fl1O, fl1var, fl1Start, fl1Final, fl1Increment;


//Button listeners
submit0.addEventListener("click", function() {
    fl0var = variableName0.value;
    fl0Start = parseInt(startValue0.value); //Convert the string value of the element into an integer value
    fl0Final = parseInt(finalValue0.value);
    fl0Increment = parseInt(increment0.value);
    //Set the display strings to empty strings at the start
    fl0ActionStr = "";
    fl0ConsoleStr = "";
    //Create the for loop object
    forLoop0 = new ForLoopCount(fl0Start,fl0Final,fl0Increment,fl0var);
    var forCondition, forIncrement;
    if(fl0Start <= fl0Final) {
        forCondition = `${fl0var} < ${fl0Final + 1}`;
    } else {
        forCondition = `${fl0var} > ${fl0Final - 1}`;
    }
    if(fl0Increment == 1) {
        forIncrement = `${fl0var}++`;
    } else if(fl0Increment == -1) {
        forIncrement = `${fl0var}--`;
    } else if(fl0Increment > 1) {
        forIncrement = `${fl0var} += ${fl0Increment}`;
    } else if(fl0Increment < -1) {
        forIncrement = `${fl0var} -= ${-fl0Increment}`;
    } else {
        forIncrement = "";
    }
    var forLoopDeclaration = forLoop0.getMethodHead(`var ${fl0var} = ${fl0Start}`,forCondition,forIncrement);
    fl0CodeStr = `<div>${forLoopDeclaration}</div><div class='marginLeft30'>console.log(${fl0var});</div><div>}</div>`;
    forLoopCode0.innerHTML = fl0CodeStr;
    if(fl0Start < fl0Final && fl0Increment > 0) {
        //Start less than end and values increase
        var i = fl0Start - fl0Increment;
        var counter = 0;
        var stillGoing = true;
        var roundStr;
        forLoop0Timer = setInterval(function() {
            i += fl0Increment;
            var currentState = (i < (fl0Final - fl0Start) + 1) ? true : false;
            var incrStr = fl0Increment == 1 ? "++" : ` += ${fl0Increment}`;
            var currentSteps = forLoop0.getLoopSteps(i,`< ${fl0Final + 1}`,incrStr,fl0Increment,currentState);
            counter++;
            if(stillGoing) {
                roundStr = `<h5>Round ${counter}</h5>`;
                fl0ActionStr += `<h5>Round ${counter}</h5>`;
                forLoopAction0.innerHTML = roundStr;
            }
            if(i < (fl0Final - fl0Start) + 1) {
                var actionIndex = -1;
                while(actionIndex < currentSteps.length) {
                    actionIndex++;
                    if(actionIndex < currentSteps.length) {
                        roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                        fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                        forLoopAction0.innerHTML = roundStr;
                    }
                }
                fl0ConsoleStr += `<div>${forLoop0.logMessage(counter,i)}</div>`;
                forLoopConsole0.innerHTML = fl0ConsoleStr;
            } else {
                if(stillGoing) {
                    var actionIndex = -1;
                    while(actionIndex < currentSteps.length) {
                        actionIndex++;
                        if(actionIndex < currentSteps.length) {
                            roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                            fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                            forLoopAction0.innerHTML = roundStr;
                        }
                    }
                    stillGoing = false;
                } else {
                    forLoopAction0.innerHTML = fl0ActionStr;
                }
            }
        },4000);
    } else if(fl0Final < fl0Start && fl0Increment < 0) {
        //Start greater than end and values decrease
        var i = fl0Start - fl0Increment;
        var counter = 0;
        var stillGoing = true;
        var roundStr;
        forLoop0Timer = setInterval(function() {
            i += fl0Increment;
            var currentState = (i > fl0Final - 1) ? true : false;
            var incrStr = fl0Increment == -1 ? "--" : ` -= ${-fl0Increment}`;
            var currentSteps = forLoop0.getLoopSteps(i,`> ${fl0Final - 1}`,incrStr,fl0Increment,currentState);
            counter++;
            if(stillGoing) {
                roundStr = `<h5>Round ${counter}</h5>`;
                fl0ActionStr += `<h5>Round ${counter}</h5>`;
                forLoopAction0.innerHTML = roundStr;
            }
            if(i > fl0Final - 1) {
                var actionIndex = -1;
                while(actionIndex < currentSteps.length) {
                    actionIndex++;
                    if(actionIndex < currentSteps.length) {
                        roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                        fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                        forLoopAction0.innerHTML = roundStr;
                    }
                }
                fl0ConsoleStr += `<div>${forLoop0.logMessage(counter,i)}</div>`;
                forLoopConsole0.innerHTML = fl0ConsoleStr;
            } else {
                if(stillGoing) {
                    var actionIndex = -1;
                    while(actionIndex < currentSteps.length) {
                        actionIndex++;
                        if(actionIndex < currentSteps.length) {
                            roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                            fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                            forLoopAction0.innerHTML = roundStr;
                        }
                    }
                    stillGoing = false;
                } else {
                    forLoopAction0.innerHTML = fl0ActionStr;
                }
            }
        },4000);
    } else if(fl0Start < fl0Final && fl0Increment < 0) {
        //Start less than end and values decrease
        var i = fl0Start - fl0Increment;
        var counter = 0;
        var stillGoing = true;
        var roundStr;
        var alertInfinite = false;
        forLoop0Timer = setInterval(function() {
            i += fl0Increment;
            var currentState = (i < (fl0Final - fl0Start) + 1) ? true : false;
            var incrStr = fl0Increment == -1 ? "--" : ` -= ${-fl0Increment}`;
            var currentSteps = forLoop0.getLoopSteps(i,`< ${fl0Final + 1}`,incrStr,fl0Increment,currentState);
            counter++;
            if(counter > 15) {
                alertInfinite = true;
            }
            if(stillGoing  && !alertInfinite) {
                roundStr = `<h5>Round ${counter}</h5>`;
                fl0ActionStr += `<h5>Round ${counter}</h5>`;
                forLoopAction0.innerHTML = roundStr;
            } else if(stillGoing) {
                roundStr = `<h5>Round ${counter} - <span class='redFont'>Oh Crap! Infinite Loop!</span></h5>`;
                fl0ActionStr += `<h5>Round ${counter} - <span class='redFont'>Oh Crap! Infinite Loop!</span></h5>`;
                forLoopAction0.innerHTML = roundStr;
            }
            if(i < (fl0Final - fl0Start) + 1 && !alertInfinite) {
                var actionIndex = -1;
                while(actionIndex < currentSteps.length) {
                    actionIndex++;
                    if(actionIndex < currentSteps.length) {
                        roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                        fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                        forLoopAction0.innerHTML = roundStr;
                    }
                }
                fl0ConsoleStr += `<div>${forLoop0.logMessage(counter,i)}</div>`;
                forLoopConsole0.innerHTML = fl0ConsoleStr;
            } else {
                if(stillGoing) {
                    var actionIndex = -1;
                    while(actionIndex < currentSteps.length) {
                        actionIndex++;
                        if(actionIndex < currentSteps.length) {
                            roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                            fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                            forLoopAction0.innerHTML = roundStr;
                        }
                    }
                    roundStr += `<div><span class='redFont'>Oh Crap! Infinite Loop!</span></div>`;
                    fl0ActionStr += `<div><span class='redFont'>Oh Crap! Infinite Loop!</span></div>`;
                    forLoopAction0.innerHTML = roundStr;
                    fl0ConsoleStr += `<div><span class='redFont'>Infinite Loop!  Still going!</span></div>`;
                    forLoopConsole0.innerHTML = fl0ConsoleStr;
                    stillGoing = false;
                } else {
                    forLoopAction0.innerHTML = fl0ActionStr;
                }
            }
        },4000);
    } else if(fl0Final < fl0Start && fl0Increment > 0) {
        //Start greater than end and values increase
        var i = fl0Start - fl0Increment;
        var counter = 0;
        var stillGoing = true;
        var roundStr;
        var alertInfinite = false;
        forLoop0Timer = setInterval(function() {
            i += fl0Increment;
            var currentState = (i > fl0Final - 1) ? true : false;
            var incrStr = fl0Increment == 1 ? "++" : ` += ${fl0Increment}`;
            var currentSteps = forLoop0.getLoopSteps(i,`> ${fl0Final - 1}`,incrStr,fl0Increment,currentState);
            counter++;
            if(counter > 15) {
                alertInfinite = true;
            }
            if(stillGoing  && !alertInfinite) {
                roundStr = `<h5>Round ${counter}</h5>`;
                fl0ActionStr += `<h5>Round ${counter}</h5>`;
                forLoopAction0.innerHTML = roundStr;
            } else if(stillGoing) {
                roundStr = `<h5>Round ${counter} - <span class='redFont'>Oh Crap! Infinite Loop!</span></h5>`;
                fl0ActionStr += `<h5>Round ${counter} - <span class='redFont'>Oh Crap! Infinite Loop!</span></h5>`;
                forLoopAction0.innerHTML = roundStr;
            }
            if(i > fl0Final - 1 && !alertInfinite) {
                var actionIndex = -1;
                while(actionIndex < currentSteps.length) {
                    actionIndex++;
                    if(actionIndex < currentSteps.length) {
                        roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                        fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                        forLoopAction0.innerHTML = roundStr;
                    }
                }
                fl0ConsoleStr += `<div>${forLoop0.logMessage(counter,i)}</div>`;
                forLoopConsole0.innerHTML = fl0ConsoleStr;
            } else {
                if(stillGoing) {
                    var actionIndex = -1;
                    while(actionIndex < currentSteps.length) {
                        actionIndex++;
                        if(actionIndex < currentSteps.length) {
                            roundStr += `<div>${currentSteps[actionIndex]}</div>`;
                            fl0ActionStr += `<div>${currentSteps[actionIndex]}</div>`;
                            forLoopAction0.innerHTML = roundStr;
                        }
                    }
                    roundStr += `<div><span class='redFont'>Oh Crap! Infinite Loop!</span></div>`;
                    fl0ActionStr += `<div><span class='redFont'>Oh Crap! Infinite Loop!</span></div>`;
                    forLoopAction0.innerHTML = roundStr;
                    fl0ConsoleStr += `<div><span class='redFont'>Infinite Loop!  Still going!</span></div>`;
                    forLoopConsole0.innerHTML = fl0ConsoleStr;
                    stillGoing = false;
                } else {
                    forLoopAction0.innerHTML = fl0ActionStr;
                }
            }
        },4000);
    }
});

clear0.addEventListener("click", function() {
    clearInterval(forLoop0Timer);
    forLoopConsole0.innerHTML = "";
    forLoopCode0.innerHTML = "";
    forLoopAction0.innerHTML = "";
});

submit1.addEventListener("click", function() {
    fl1O = forOmit1;
    console.log(fl1O);
    var fl1Onumber = 0;
    for(var i = 0; i < fl1O.length; i++) {
        if(fl1O[i].checked) {
            fl1Onumber = i;
            break;
        }
    }
    
    fl1var = variableName1.value;
    fl1Start = parseInt(startValue1.value);
    fl1Final = parseInt(finalValue1.value);
    fl1Increment = parseInt(increment1A.value);
    forLoop1 = new ForLoopOmit(fl1Onumber,fl1var,fl1Start,fl1Final,fl1Increment);
    forLoopBroken1.innerHTML = forLoop1.loopBodies[1];
    forLoopWorking1.innerHTML = forLoop1.loopBodies[0];
    forLoopNotes1.innerHTML = forLoop1.loopBodies[2];
});

clear1.addEventListener("click", function() {
    forLoopBroken1.innerHTML = "";
    forLoopWorking1.innerHTML = "";
    forLoopNotes1.innerHTML = "";
});