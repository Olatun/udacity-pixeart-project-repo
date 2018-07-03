
function makeGrid() {
    // variables for gridSize
    var rows = $("#input_height").val();
    var columns = $("#input_width").val();
    // code to create table
    var pixelArtTable = $("#pixel_canvas");
    if(pixelArtTable.children().length){
        pixelArtTable.children().remove(); //remove previously created grid
    }
    // for loops for creating grid
    for(var i=0;i<columns;i++){
        pixelArtTable.append("<tr></tr>");
    
        for (var j = 0; j < columns; j++) {
            pixelArtTable.children().last().append("<td></td>");
        }
    }
    //colors change , using event listeners
   pixelArtTable.on("click","td",function(){
       var color = $("#colorPicker").val();
       $(this).attr("bgcolor", color);
    });

}
//To call makeGrid() 
$("input[type='submit']").click(function(e) {
  e.preventDefault(); 
  makeGrid();
});


