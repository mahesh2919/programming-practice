$(function(){

function getpost(){
    var $listgroup = $(".list-group");
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method:"GET",
        success: function(data){
           var newData = data.slice(0, 15);
           var listitem=[];
           newData.forEach(function(newItam){
               //console.log("newItam", newItam);
               var $li = $("<li/>",{
                   class:"list-group-item",
                   "data-id":newItam.id,
                   html:newItam.title
               });
               listitem.push($li);
           });
           $listgroup.append(listitem);
        },
        error:function(){
            console.log("err");
        }
    });
}

getpost();


$(".list-group").on("click", '.list-group-item', function(event){
    //console.log(event.target);
    var id = $(event.target).attr("data-id");
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/"+ id,
    method:"GET",
   success:function(data){
        //console.log("data", data);
      $(".content").html(data.body);
    },
    error(){

    }
});
});
});