

var inputDate = document.createElement("input");
inputDate.setAttribute("type", "date");
inputDate.id = "dob";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.className = "btn btn-primary";
button.innerHTML = "Click Me";
button.addEventListener("click", getDate)

var ele = document.createElement("div")
ele.className = "main"
ele.append(inputDate, button)



document.body.append(ele);

var Differences = document.createElement("div");
Differences.className = "container";
var diffCard = document.createElement("div");
diffCard.className = "col-md-12";
Differences.append(diffCard);


function getDate(){
    

    var input = document.getElementById("dob").value;
    var timestamp = Date.parse(input);
    var inputDate = new Date(timestamp);
    console.log(`Input Date is ${inputDate}`);
    var currentDate = new Date();
    console.log(`Current Date is ${currentDate}`);

    var millisecDiff = parseInt(currentDate.getTime()-inputDate.getTime());
    console.log(`Milliseconds Difference is ${millisecDiff}`);
    var secondsdiff = Math.floor(millisecDiff/1000);
    console.log(`Seconds Difference is ${secondsdiff}`);
    var mindiff = Math.floor(secondsdiff/60);
    console.log(`Minute Difference is ${mindiff}`);
    var hoursdiff = Math.floor(mindiff/60);
    console.log(`Hours Difference is ${hoursdiff}`);
    var dayDiff = Math.floor(hoursdiff/24);
    console.log(`Day Difference is ${dayDiff}`);
    var yearDiff = currentDate.getFullYear() - inputDate.getFullYear();
    console.log(`Year Difference is ${yearDiff}`);
    var monthDiff = (yearDiff*12)+(currentDate.getMonth()-inputDate.getMonth());
    console.log(`Month Difference is ${monthDiff}`);

    diffCard.innerHTML = `Given Input Date is ${inputDate}<br>
                            MilliSeconds Difference is ${millisecDiff} <br>
                            Seconds Difference is ${secondsdiff}<br>
                            Minutes Difference is ${mindiff}<br>
                            Hours Difference is ${hoursdiff}<br>
                            Days Difference is ${dayDiff}<br>
                            Month Difference is ${monthDiff}<br>
                            Years Difference is ${yearDiff}<br>
                            `;
    document.body.append(Differences);
}
