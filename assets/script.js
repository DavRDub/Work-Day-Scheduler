//use moment() to display current date and time.
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function () {
    //obtains closest values.
    console.log(this);
     // applies changes made to description class.
    var text = $(this).siblings(".description").val();
     // applies changes made to the time ids.
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
})

function timeStamping() {
    //Obtains current timestamps.
    var currentTime = moment().hour();

    // Loops thru all time-stamps
    $(".time-stamp").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime); 

        //Refers to the current time to run if statement.
        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}


