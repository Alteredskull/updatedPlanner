function updateTime(){
var current = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#time').text( "Current time in New York: " + current );
console.log(current);
}

updateTime();
setInterval(function(){
   updateTime();
},1000);

for (var i = 1; i < 10; i++) {
  $("#note" + i).text(localStorage.getItem("save" + i));
}
      
$(".saveBtn").on("click", function () {
  var userEntry = $(this).parent().siblings().children("textarea").val();
  var saveId = $(this).attr("id");
  localStorage.setItem(saveId, userEntry);
});
      
$("#clearBtn").on("click", function () {
  localStorage.clear();
  for (var i = 1; i < 10; i++) {
    $("#note" + i).val("");
  }
});
      
//not too sure how to keep track of the time on each task