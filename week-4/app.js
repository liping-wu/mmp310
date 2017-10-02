var a = ["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];
submit.onclick = function() {
    var answer = a[Math.floor(Math.random() * a.length)];
    var submit = document.getElementById("submit");
    var message = document.getElementById("message");
    message.innerText = answer;
};