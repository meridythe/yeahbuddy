// function validateItems() {
//     var num1 = document.forms["numberFun"]["startNum"].value;
//  document.getElementById("startNumDisplay").innerHTML = num1;
 
// //     clearErrors();
// //     var num1 = document.forms["numberFun"]["num1"].value;
// //     var num2 = document.forms["numberFun"]["num2"].value;
// //     if (num1 == "" || isNaN(num1)) {
// //         alert("Num1 must be filled in with a number.");
// //         document.forms["numberFun"]["num1"]
// //            .parentElement.className = "form-group has-error";
// //         document.forms["numberFun"]["num1"].focus();
// //         return false;
// //     }
// //    if (num2 == "" || isNaN(num2)) {
// //        alert("Num2 must be filled in with a number.");
// //        document.forms["numberFun"]["num2"]
// //           .parentElement.className = "form-group has-error"
// //        document.forms["numberFun"]["num2"].focus();
// //        return false;
// //    }
// //    document.getElementById("results").style.display = "block";
// //    document.getElementById("submitButton").innerText = "Recalculate";
// //    document.getElementById("addResult").innerText = Number(num1) +
// //                                                      Number(num2);
// //    document.getElementById("subtractResult").innerText = num1 - num2;
// //    document.getElementById("multiplyResult").innerText = num1 * num2;
// //    document.getElementById("divideResult").innerText = num1 / num2;
//    // We are returning false so that the form doesn't submit 
//    // and so that we can see the results
//    return false;
// }

function validateValues() {    
    var startNum = +document.forms["numberFun"]["startNum"].value;    
    var endNum = +document.forms["numberFun"]["endNum"].value;
    var stepNum = +document.forms["numberFun"]["stepNum"].value;  
    var results = document.getElementById("results");
    var array = [];

    document.getElementById("resultMessage").textContent = "Here are the even numbers between " + startNum + " and " + endNum + " by " + stepNum + "'s";

    for (var i = startNum; i <= endNum; i += stepNum) {
        if(i % 2 == 0){
            array.push(i);  
        } 
    }    

    results.innerHTML = array.join(', ');  


    return false;
}