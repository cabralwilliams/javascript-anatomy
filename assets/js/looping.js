
class ForLoopCount {
    constructor(startVal = 0, endVal = 100, increment = 1, variableName = "i") {
        this.startVal = startVal;
        this.endVal = endVal;
        this.increment = increment;
        this.variableName = variableName;
    }

    getMethodHead(declaration = "declaration",condition = "condition",varIncrement = "increment") {
        return `for(<span class='redFont'>${declaration}</span>; <span class='greenFont'>${condition}</span>; <span class='blueFont'>${varIncrement}</span>)`;
    }

    logMessage(messageIndex = 1,messageValue = 0) {
        return `${messageIndex}: ${messageValue}`;
    }

    getLoopSteps(initialVal,condition,varIncrement,incrementNumber,conditionSatisfied) {
        var output = [];
        var initStr = `Initial Value: ${this.variableName} = ${initialVal}`;
        var checkCondition = `1. Check Condition: <span class='greenFont'>${this.variableName} ${condition}</span> ? (&rarr; ${conditionSatisfied}!)`;
        var secondStep = conditionSatisfied ? `2. Execute Statement(s): console.log(${initialVal});` : "";
        var nextStep = conditionSatisfied ? `3. Increment Variable: <span class='blueFont'>${this.variableName}${varIncrement}</span> (${this.variableName} = ${initialVal + incrementNumber})` : "2. Exit the loop";
        var nextStep2 = conditionSatisfied ? `4. Continue Loop` : "";
        output.push(initStr);
        output.push(checkCondition);
        if(secondStep !== "") {
            output.push(secondStep);
        }
        output.push(nextStep);
        if(nextStep2 !== "") {
            output.push(nextStep2);
        }
        return output;
    }
}

class ForLoopOmit {
    constructor(omitParam = 0, varName = "i",varStart = 0,varFinal = 100,varIncrement = 1) {
        this.omitParam = omitParam;
        this.varName = varName;
        this.varStart = varStart;
        this.varFinal = varFinal;
        this.varIncrement = varIncrement;
        this.loopBodies = this.getLoopBodies();
    }

    getLoopBodies() {
        var workingCode = "";
        var brokenCode = "";
        var workingCodeStatus, brokenCodeStatus;
        var brokenCodeNote;
        var isInifiniteLoop = false;
        //Statuses: 0 = loops and leaves, 1 = infinite loop, 2 = loop fails
        switch(this.omitParam) {
            case 0: //Variable declaration omitted from for loop
                workingCode += `<div class='redFont'>var ${this.varName} = ${this.varStart};</div>`;
                brokenCode += `<div>for( ; <span class='greenFont'>${this.varName} `;
                if(this.varFinal > this.varStart) {
                    brokenCode += `< ${this.varFinal + 1}`;
                } else if(this.varFinal < this.varStart) {
                    brokenCode += `> ${this.varFinal - 1}`;
                } else {
                    brokenCode += `== ${this.varFinal}`;
                }
                brokenCode += `</span>; <span class='blueFont'>${this.varName}`;
                if(this.varIncrement === 1) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += `++`;
                } else if(this.varIncrement > 0) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += ` += ${this.varIncrement}`;
                } else if(this.varIncrement === -1) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += `--`;
                } else if(this.varIncrement < 0) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += ` -= ${-this.varIncrement}`;
                } else {
                    isInifiniteLoop = true;
                    brokenCode += ` += 0`;
                }
                brokenCode += `</span>) {</div>`; //Top line of loop complete
                brokenCode += `<div class='marginLeft30'>console.log(${this.varName});</div><div class='marginLeft30'>//Other statements</div>`;
                brokenCode += `<div>}</div>`;
                workingCode += brokenCode;
                brokenCodeNote = `The broken code fails here because there has been no <span class='redFont'>variable declaration</span>.  Since the variable ${this.varName} has not been declared, the loop will produce a reference error.  If ${this.varName} is declared earlier as in the working code, it does not need to be declared in the for loop.  Generally, though, within the for loop's parantheses is where the declaration takes place.`;
                if(isInifiniteLoop) {
                    brokenCodeNote += `  In this case, the working code causes a problem as well as that code creates an infinite loop.`;
                }
                break;
            case 1: //Variable condition omitted from for loop
                workingCode += `<div>for(<span class='redFont'>var ${this.varName} = ${this.varStart}</span>; ; <span class='blueFont'>${this.varName}`;
                brokenCode += `<div>for(<span class='redFont'>var ${this.varName} = ${this.varStart}</span>; ; <span class='blueFont'>${this.varName}`;
                if(this.varIncrement === 1) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += `++`;
                    brokenCode += `++`;
                } else if(this.varIncrement > 0) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += ` += ${this.varIncrement}`;
                    brokenCode += ` += ${this.varIncrement}`;
                } else if(this.varIncrement === -1) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += `--`;
                    brokenCode += `--`;
                } else if(this.varIncrement < 0) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += ` -= ${-this.varIncrement}`;
                    brokenCode += ` -= ${-this.varIncrement}`;
                } else {
                    workingCode += ` += 0`;
                    brokenCode += ` += 0`;
                }
                workingCode += `</span>) {</div>`;
                brokenCode += `</span>) {</div>`; //Top line of loop complete
                workingCode += `<div class='marginLeft30'>if(<span class='greenFont'>${this.varName} `;
                if(this.varFinal > this.varStart) {
                    workingCode += ">";
                } else if(this.varFinal < this.varStart) {
                    workingCode += "<";
                } else {
                    workingCode += "==";
                }
                workingCode += ` ${this.varFinal}</span>} {</div>`;
                workingCode += `<div class='marginLeft60'>break;</div><div class='marginLeft30'>}</div>`;
                workingCode += `<div class='marginLeft30'>console.log(${this.varName});</div><div class='marginLeft30'>//Other statements</div>`;
                brokenCode += `<div class='marginLeft30'>console.log(${this.varName});</div><div class='marginLeft30'>//Other statements</div>`;
                workingCode += `<div>}</div>`;
                brokenCode += `<div>}</div>`;
                brokenCodeNote = `The broken code fails here because there has been no <span class='greenFont'>variable condition</span> added.  Since there is no condition to test against, the loop will continue to run infinitely.  If a condition and break statement are placed within the for loop's body, as is the case with the working code, then the loop can still work.  Generally, though, within the for loop's parantheses is where the declaration takes place.`;
                if(isInifiniteLoop) {
                    brokenCodeNote += `  In this case, the working code causes a problem as well as that code also creates an infinite loop.`;
                }
                break;
            case 2: //Variable increment omitted from for loop
                workingCode += `<div>for(<span class='redFont'>var ${this.varName} = ${this.varStart}</span>; <span class='greenFont'>${this.varName} `;
                brokenCode += `<div>for(<span class='redFont'>var ${this.varName} = ${this.varStart}</span>; <span class='greenFont'>${this.varName} `;
                if(this.varFinal > this.varStart) {
                    workingCode += ` < ${this.varFinal + 1}`;
                    brokenCode += ` < ${this.varFinal + 1}`;
                } else if(this.varFinal < this.varStart) {
                    workingCode += ` > ${this.varFinal - 1}`;
                    brokenCode += ` > ${this.varFinal - 1}`;
                } else {
                    workingCode += ` == ${this.varFinal}`;
                    brokenCode += ` == ${this.varFinal}`;
                }
                workingCode += `</span>; ) {</div>`;
                brokenCode += `</span>; ) {</div>`;
                workingCode += `<div class='marginLeft30'>console.log(${this.varName});</div><div class='marginLeft30'>//Other statements</div>`;
                brokenCode += `<div class='marginLeft30'>console.log(${this.varName});</div><div class='marginLeft30'>//Other statements</div>`;
                workingCode += `<div class='marginLeft30'><span class='blueFont'>${this.varName}`;
                if(this.varIncrement === 1) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += "++";
                } else if(this.varIncrement > 0) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += ` += ${this.varIncrement}`;
                } else if(this.varIncrement === -1) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += "--";
                } else if(this.varIncrement < 0) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    workingCode += ` -= ${-this.varIncrement}`;
                } else {
                    workingCode += ` += 0`;
                }
                workingCode += `</span>;</div>`;
                workingCode += `<div>}</div>`;
                brokenCode += `<div>}</div>`;
                brokenCodeNote = `Because of the lack of a <span class='blueFont'>variable increment</span>, the broken code example will always produce an infinite loop.  The condition will always be satisfied.`;
                if(isInifiniteLoop) {
                    brokenCodeNote += `  In this case, the working code also creates an infinite loop.`;
                }
                break;
            default: //Repeat the case 0 case
                workingCode += `<div class='redFont'>var ${this.varName} = ${this.varStart};</div>`;
                brokenCode += `<div>for( ; <span class='greenFont'>${this.varName} `;
                if(this.varFinal > this.varStart) {
                    brokenCode += `< ${this.varFinal + 1}`;
                } else if(this.varFinal < this.varStart) {
                    brokenCode += `> ${this.varFinal - 1}`;
                } else {
                    brokenCode += `== ${this.varFinal}`;
                }
                brokenCode += `</span>; <span class='blueFont'>${this.varName}`;
                if(this.varIncrement === 1) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += `++`;
                } else if(this.varIncrement > 0) {
                    if(this.varFinal < this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += ` += ${this.varIncrement}`;
                } else if(this.varIncrement === -1) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += `--`;
                } else if(this.varIncrement < 0) {
                    if(this.varFinal > this.varStart) {
                        isInifiniteLoop = true;
                    }
                    brokenCode += ` -= ${-this.varIncrement}`;
                } else {
                    isInifiniteLoop = true;
                    brokenCode += ` += 0`;
                }
                brokenCode += `</span>) {</div>`; //Top line of loop complete
                brokenCode += `<div class='marginLeft30'>console.log(${this.varName});</div><div class='marginLeft30'>//Other statements</div>`;
                brokenCode += `<div>}</div>`;
                workingCode += brokenCode;
                brokenCodeNote = `The broken code fails here because there has been no <span class='redFont'>variable declaration</span>.  Since the variable ${this.varName} has not been declared, the loop will produce a reference error.  If ${this.varName} is declared earlier as in the working code, it does not need to be declared in the for loop.  Generally, though, within the for loop's parantheses is where the declaration takes place.`;
                if(isInifiniteLoop) {
                    brokenCodeNote += `  In this case, the working code causes a problem as well as that code creates an infinite loop.`;
                }
                break;
        }
        return [workingCode,brokenCode,brokenCodeNote];
    }
}