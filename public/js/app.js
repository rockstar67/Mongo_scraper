$(document).ready(function() {


    $(document).on("click", ".btn.save", saveArticle);
    $(document).on("click", ".btn.delete", deleteArticle);
    $(document).on("click", ".btn.add", add);
    $(document).on("click", ".btn.addComment", addComment);
    $(document).on("click", ".deleteComment", deleteComment);
    
});

function saveArticle(){
    $.ajax({
        method: "PUT",
        url : "/savedArticle/"+ $(this).data("id"),
        data : { saved: true }

    })
    .then(function(dbSavedArticle){
        // console.log(dbSavedArticle)
        location.reload();
    })
};

function deleteArticle(){
    $.ajax({
        method : "DELETE",
        url : "/deleteArticle/"+ $(this).data("id")
    })
    .then(function(dbDeletedArticle){
        // console.log(dbDeletedArticle)
        location.reload();
    })
};
