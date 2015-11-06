document.addEventListener('DOMContentLoaded', function(){
// addEventListener est une fonction qui se déclenche dès que le premier paramètre est déclenché.
// DOMContentLoaded permet d'attendre que toute la page HTML soit chargé avant que le navigateur scan le fichier script.js
// Si cette ligne n'était pas créée, le script aurait dût être chargé à la fin du document HTML afin de ne pas créer d'erreur

	var button = document.querySelector("button");
	// Stockage du bouton dans un variable
	// 'document' cible le document HTML où est executé le script.
	// 'querySelector('params')' permet de sélectionner un élèment de la page de la même manière qu'un sélecteur CSS.


// Création de la fonction d'ajout :
	button.addEventListener('click', function(){ //addEventListener est une fonction qui se déclenche suivant le paramètre choisit. Dès que ce paramètre est activé, la function qui suit se déclenche.

	// Stockage du contenu des inputs dans des variables.
		var msg = document.querySelector('textarea').value;
		var sign = document.getElementById('pseudo').value;

	// Création des élèments(noeud HTML) où seront stockés le contenu de 'msg' et 'sign'
		var newMessage = document.createElement('div'); // 'div' qui contiendra 'p' et 'span'
		var p = document.createElement('p'); 
		var span = document.createElement('span');

	// Intégration du contenu dans les noeuds crée précédement 
		var text = document.createTextNode(msg); // createTextNode créé un nouveau noeud HTML
		p.appendChild(text); // appendChild l'argument choisi (ici 'text') dans la variable précédent la méthode.
		text = document.createTextNode(sign);
		span.appendChild(text);
		newMessage.appendChild(p);
		newMessage.appendChild(span);
	
	// Intégration du bloc dans .board
		var board = document.querySelector('.board');
		board.appendChild(newMessage);

	// Vide les inputs
		document.querySelector('textarea').value = "";
		document.getElementById('pseudo').value = "";

	});

});