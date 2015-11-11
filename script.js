document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector("button");
    
    button.addEventListener('click', function(){
      
	var msg = document.querySelector('textarea').value;
	var sign = document.getElementById('pseudo').value;
	if (!msg || !sign)
	    return;
      
	var newMessage = document.createElement('div');
	newMessage.className = "draggable";
	var p = document.createElement('p'); 
	p.className = "content";
	var span = document.createElement('span');
	span.className = "sign";
	
	var text = document.createTextNode(msg);
	p.appendChild(text);
	text = document.createTextNode(sign);
	span.appendChild(text);
	newMessage.appendChild(p);
	newMessage.appendChild(span);
	
	var board = document.querySelector('.board');
	board.appendChild(newMessage);
	
	document.querySelector('textarea').value = "";
	document.getElementById('pseudo').value = "";
	
    });
    
});
