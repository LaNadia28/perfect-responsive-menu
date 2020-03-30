const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const contact = document.createElement('li'); // Ctéation d'un élément li

contact.id = 'contact'; // Définition de son identifiant
contact.textContent = 'Contact'; // Définition de son contenue textuel

document.getElementById('menu').appendChild(contact); //Insertion du nouvel élément
contacts.addEventListener('click', function(){
	console.log("click");
});


toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
});