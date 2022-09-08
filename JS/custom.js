

$("#panda-btn").on("click", function(e){
    e.preventDefault();
    $("#form-section").show();
});
$("#yes").on("click", function(){
    alert("Me too!");
    console.log(":D");
});
$("#no").on("click", function(){
    $("#form-section").hide();
    console.log(":(");
});