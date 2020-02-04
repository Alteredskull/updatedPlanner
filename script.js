function updateTime(){
var current = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#time').text( "Current time in New York: " + current );
console.log(current);
}

updateTime();
setInterval(function(){
   updateTime();
},1000);


    //need to fix save
      $("#note" + "input").val(localStorage.getItem("note"));

    function saveNotes() {
      //Change styles of button
      $("#saveBtn").removeClass("notSaved").addClass("Saved");
      // Save data to localstorage
        localStorage.setItem($("#note", input).val());
      }

    $("#saveBtn").on("click", function() {
        saveNotes();
      });