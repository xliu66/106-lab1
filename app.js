function createTodo(){
    
    //get the text
    var text2 = $("#txtText").val();
    
    // create an li
    var li = '<li>'+ text2 +' <button>Done!</button> '+'</li>';

    // add the li to the ul
    $("#pending").append(li);

    // clear the input field
    $("#txtText").val("");
    // set the focus to the field
    $('#txtText').focus();
}


// this is the fn
function init(){

    // get the text from the input field
    // var text = document.getElementById("txtTest").value;
    // console.log("JS way", text);

    

    // hook events
    // when a click happens on elem btnSave, exec createTodo fn
    $("#btnSave").click(createTodo); 
    $("#txtText").keypress(function(e){
        console.log(e);

        if(e.key=="Enter"){
            createTodo();
        }
    });

}

// when the browser finish redering all HTML elements
// will execute a function called init 
window.onload = init;