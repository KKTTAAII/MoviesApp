$("form").on("submit", function(evt){
    evt.preventDefault();
    let movieTitle = $('input').eq(0).val();
    let rating = $('input').eq(1).val();

    $("ul").append("<li>" + movieTitle + " is " + "rated " + ": " + rating +"</li>");
    $("li").addClass("font")
    deleteBtn = $("<button />").addClass("deleteBtn").text("x");
    if ($("li:last").find("button").length === 0) {
            $("li:last").append(deleteBtn);
    }
    //credit: https://stackoverflow.com/questions/66646093/jquery-add-button-once-to-list-items
    $("#moviesList").on("click", "li", function(){
        $(this).closest("li").remove();
    })
})