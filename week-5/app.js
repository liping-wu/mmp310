submit.onclick= function(){
    var submit = document.getElementById('submit');
    
    var user= document.getElementById('user');
    var keyword =document.getElementById('keyword').value;
    var long= document.getElementById('long').value;
    
    var passWord = '';
    var word='';
    var randomOrder='';
    
    var charts = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*";

	for(i=1;i<=long-keyword.length;i++){
		var a=Math.floor(Math.random()*charts.length);
		randomOrder += charts[a];
		console.log(randomOrder);
	}
	
  	for(i=1;i<=keyword.length;i++){
	  var c=Math.floor(Math.random()*keyword.length);
	  if(c===i){
		 word +=keyword.charAt(c).toUpperCase();
	  }else{
		 word +=keyword.charAt(c).toLowerCase();
	  }
		console.log(word);
	}
	passWord=  word+randomOrder ;

	message1.innerText="User Name: "+ user.value;
    message2.innerText="Your password is: " + passWord;
}
