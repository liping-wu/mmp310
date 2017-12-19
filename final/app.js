var myRecipes = document.getElementById("recipes");

$(document).ready(function(){
    $("#submit").click(function(){
        
        console.log(myRecipes.value);
        myRecipes.innerHTML = "";
        var myFood = document.getElementById("food").value;
        
        var key = "82b01f2b316f03d7d7843293c28cfc63";
        var url = "https://api.edamam.com/search";
       
        console.log(url + "?q=" + myFood + "&key=" + key + "&callback=?")
        $.ajax({
            url: url + "?q=" + myFood + "&key=" + key + "&format=json",
            type: 'GET',
            crossDomain:true,
            dataType: 'json',
            success: function(json) {
                for (let i = 0; i < json.hits.length; i++) {
                    console.log(json.hits[i].recipe);
                    
                    var img = new Image();              
                    img.src = json.hits[i].recipe.image;
                    document.body.appendChild(img);
                    
//                    var name = document.createElement('p');
//                    name.textContent = json.hits[i].recipe.label;
//                    document.body.appendChild(name);
                    
                    var link = document.createElement('a');
                    link.innerHTML = json.hits[i].recipe.label;
                    link.href = json.hits[i].recipe.url;
                    document.body.appendChild(link);
                    
//                    var link = document.createElement('a');
//                    link.innerHTML = 'Click';
//                    link.addEventListener('click', function(ev) {
//                    link.href = json.hits[i].recipe.url;
//                    link.onload = "url";
//                    }, false);
//                    document.body.appendChild(link);
                    
                }
            },
            error: function(error) {
                console.log("error", error);
            }
            
        })
    
    
    })
    
});