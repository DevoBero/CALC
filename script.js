// var exp = '', number, decimal, equal, operator, allowSR =;
// var textview = document.forms['myForm']['textview'];

function insertNum(num) {
    // window.alert(num);
    document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML.concat(num);
    
    // if (equal) {
    //     exp = num; 
    //     textview.value = exp;
    //     number = true;
    //     equal = false;
    // }
    // else {
    //     exp = textview.value + num;
    //     textview.value = exp;
    //     number = true;
    // }
    // if (operator) decimal = false;
    // SR('a');
}
    
    function insertOp(op) {
        textview.value = exp + op;
        operator = true;
        equal = false;
        allowSR = false;
        SR('a');
    }

    function insertDec() {
        if (document.getElementById('demo').innerHTML.indexOf('.') > -1)
        {
        //alert(". already exist");
        }
        else {    
        document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML.concat(".");
        }
        // if (number && !decimal) {
        //     textview.vallue = exp + '.';
        //     decimal = true;
        //     operator = false;
        // }
    }

    function equalTo() {
        if (exp0) {
            exp = eval(exp);
            textview.value =exp;
            equal = true;
            decimal = false;
            number = false;
            allowSR = true;
            SR('a')
        }
    }

    function clean() {
        document.getElementById('demo').innerHTML = "0";
        // exp = '';
        // textview.value = exp;
        // decimal = false;
    }

    function ON() {
        document.getElementById('demo').innerHTML ="0";

        // exp = textview.value;
        // exp = exp.substring (0, exp.lenght - 1);
        // textview.value = exp;
    }  
        // }
        // else {    
        // document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML.concat("");
        // }

    function OFF() {
        document.getElementById('demo').innerHTML = "";
        document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML.concat("");
        
        // exp = '';
        // textview.value = exp;
        // decimal = false;
    }

    function SR(x) {
        if (x=='r') {
            exp = math.sqrt(exp);
            textview.value = exp;
        }

        else if (x=='s') {
            exp = exp*exp;
            textview.value = exp;
        }
        else if (x=='a' && allowSR) {
            document.getElementById('r').disabled = false;
            document.getElementById('s').disabled = false;
        }
        else if (!allowSR) {
            document.getElementById('r').disabled = true;
            document.getElementById('s').disabled = true;
        }
        
    }

