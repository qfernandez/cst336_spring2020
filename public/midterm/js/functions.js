function searchISBN() {
    $("#info").empty();
    
    $.ajax({
       type: "GET",
       url: "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#ISBN").val() + "&format=json&jscmd=data",
       dataType: "json",
       success: function(data){
           console.log(data);
           $("#info").append("<img src='"+ data["ISBN:" + $("#ISBN").val()]["cover"]["large"]+"' width='350' height='350'>");
           $('#info').append("<br>Title: " + data["ISBN:" + $("#ISBN").val()]["title"]);
           $('#info').append("<br>Author: " + data["ISBN:" + $("#ISBN").val()]["authors"]["0"]["name"]);
           $('#info').append("<br>Publish: " + data["ISBN:"+ $("#ISBN").val()]["publish_date"]);
           //$('#information').append("<br>Publisher: " + data["ISBN:0451526538"]["publishers"]["0"]["name"]);
           $('#info').append("<br>Publisher: " + data[""]);
           $('#info').append("<br>ISBN: " + data["ISBN:" + $("#ISBN").val()]["identifiers"]["isbn_10"]);
           $('#info').append("<br>Pages: " + data["ISBN:" + $("#ISBN").val()]["number_of_pages"]);
       }
       
    });
    }//searchImage()
