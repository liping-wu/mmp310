submit.onclick = function(){
    var submit = document.getElementById("submit");
    var name = document.getElementById("name");
    var adjective = document.getElementById("adjective");
    var food = document.getElementById("food");
    var friend = document.getElementById("friend");
    var pet = document.getElementById("pet");
    var place = document.getElementById("place");
    var message = document.getElementById("message");
    
    message.innerText = name.value + "travel around" + place.value + "with his friend" + friendname.value + "last Sunday." + name.value + "bought some" + adjective.value + food.value + "to" + pet.value + ", but" + pet.value + "doesn't like it."
}