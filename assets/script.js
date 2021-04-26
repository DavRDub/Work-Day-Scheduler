$(document).ready(function () {
    
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDay);

    $(".saveBtn").on("click", function () {
         // applies changes made to description class.
        var text = $(this).siblings(".description").val();
         // applies changes made to the time ids.
        var time = $(this).parent().attr("id");
    
        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //retreives data from LocalStorage.
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    function timeStamping() {
        var currentTime = moment().hour();

        $(".time-stamp").each(function () {
            var pauseTime = parseInt($(this).attr("id").split("hour")[0]);
            if (pauseTime < currentTime){
                $(this).removeClass(["present" , "future"]).addClass("past");
            } else if (pauseTime === currentTime) {
                $(this).removeClass(["past" , "future"]).addClass("present");
            } else {
                $(this).removeClass(["past" , "present"]).addClass("future");
            }
        })
    }
    timeStamping();
})