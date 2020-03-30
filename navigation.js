const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const contacts = document.scrollingElement('li'); // Ctéation d'un élément li

contacts.id = 'contacts'; // Définition de son identifiant
contacts.textContent = 'Contacts'; // Définition de son contenue textuel

document.getElementById('menu').appendChild(contacts); //Insertion du nouvel élément

toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
});