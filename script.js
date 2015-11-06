document.addEventListener('DOMContentLoaded', function(){


	var button = document.querySelector("button");

	button.addEventListener('click', function(){
		var msg = document.querySelector('textarea').value;
		var sign = document.getElementById('pseudo').value;

		var newMessage = document.createElement('div');
		var p = document.createElement('p');
		var span = document.createElement('span');

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