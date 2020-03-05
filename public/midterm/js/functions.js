function searchISBN() {
    $("#info").empty();
    
    $.ajax({
       type: "GET",
       url: "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#ISBN").val() + "&format=json&jscmd=data",
       dataType: "json",
       success: function(data){
           console.log(data);
           $('#info').append("<br>Title: " + data["ISBN:0451526538"]["title"]);
           $('#info').append("<br>Author: " + data["ISBN:0451526538"]["authors"]["0"]["name"]);
           $('#info').append("<br>Publish: " + data["ISBN:0451526538"]["publish_date"]);
           //$('#information').append("<br>Publisher: " + data["ISBN:0451526538"]["publishers"]["0"]["name"]);
           $('#info').append("<br>Publisher: " + data[""]);
           $('#info').append("<br>ISBN: " + data["ISBN:0451526538"]["identifiers"]["isbn_10"]);
           $('#info').append("<br>Pages: " + data["ISBN:0451526538"]["number_of_pages"]);
       }
       
    });
    }//searchImage()
