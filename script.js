const pokemonOmar = {
	name: 'Omar',
	attack: 150,
	defense: 150,
	health: 150,
	type: 'WATER',
	waterThrowAttack: 16,
	splashAttack: 18,
	dripAttack: 12,
	waterWhipAttack: 9,
	startingHealth: 8,

	takeDamage: function (damage) {
		this.health -= damage;
		if (this.health < 0) {
			this.health = 0;
		}
	},

	attackOpponent: function(pokemonToAttack, attackDamage) {
		let DAMAGE;
		if ((pokemonToAttack.defense > attackDamage) || (pokemonToAttack.defense === attackDamage)) {
				DAMAGE = 0;
		} else {
			DAMAGE = (attackDamage - pokemonToAttack.defense);
		}
		pokemonToAttack.takeDamage(DAMAGE);
	},

	display: function() {
		return`${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.startingHealth}`;
	}
 }

 const pokemonDonnie = {
	name: 'Donnie',
	attack: 3000,
	defense: 1,
	health: 200,
	type: 'FIRE',
	startingHealth: 200,

	takeDamage: function (damage) {
		this.health -= damage;
		if (this.health < 0) {
			this.health = 0;
		}
	},

	
	attackOpponent: function(pokemonToAttack, attackDamage) {
		let DAMAGE;
		if ((pokemonToAttack.defense > attackDamage) || (pokemonToAttack.defense === attackDamage)) {
				DAMAGE = 0;
		} else {
			DAMAGE = (attackDamage - pokemonToAttack.defense);
		}

		pokemonToAttack.takeDamage(DAMAGE);
	},

	display: function() {
		return`${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.startingHealth}`;
	}
 }

// pokemonOmar.takeDamage(40);
// pokemonDonnie.attackOpponent(pokemonOmar);
console.log(pokemonDonnie.display());
console.log(pokemonOmar.display());

let omarPokemonImage;
let donniePokemonImage;
function preload() {
	omarPokemonImage = loadImage('assets/omar-pokemon.png');
	donniePokemonImage = loadImage('assets/donnie-pokemon.png');
}
function setup() {
	createCanvas(600, 600);

}

function draw() {
	background(255, 0, 0);

	// Bottom Attack Container
	fill(0, 255, 0);
	rect(0, 400, 600, 200);

	// Attacks
	// Pokemon Description Box:
	const box = {
		x: 50,
		y: 50,
		
	}
	function pokemonDescriptionBox(x, y, width, height, fontSize, boxColor) {
		fill(boxColor);
		rect(x, y, width, height);
		fill(0);
		textSize(fontSize);
		text(`Pokemon Name: ${pokemonOmar.name}`, x, y - 10, width, height / 2);
		text(`Health: ${pokemonOmar.health}`, x, y + 10, width, height / 2);
		text(`Defense: ${pokemonOmar.defense}`, x, y + 30, width, height / 2);
		text(`Type: ${pokemonOmar.type}`, x, y + 50, width, height / 2);
		
	}
	function pokemonText(name, health, defense, type) {

	}
	pokemonDescriptionBox(50, 50, 200, 100, 16, '#0080ff');

	fill(255, 77, 77);
	rect(350, 200, 200, 100);
	fill(0);
	textSize(16);
	text(`Pokemon Name: ${pokemonDonnie.name}`, 350, 190, 200, 50);
	text(`Health: ${pokemonDonnie.health}`, 350, 210, 200, 50);
	text(`Defense: ${pokemonDonnie.health}`, 350, 230, 200, 50);
	text(`Type: ${pokemonDonnie.type}`, 350, 250, 200, 50);

	attackBox('Water Throw', 50, 425);
	attackBox('Splash', 325, 425);
	attackBox('Drip', 50, 525);
	attackBox('Water Whip', 325, 525);
	// console.log(mouseY);
	fill('rgba(30, 30, 30, 0.5)');
	// Omar's / Attacker's Platform
	ellipse(150, 300, 200, 70);

	// Donnie's / Defender's Platform
	ellipse(450, 150, 200, 70);

	image(omarPokemonImage, 85, 150, 125, 175);
	image(donniePokemonImage, 390, 20, 125, 175);
	// fill(100, 50, 210);
	// 	ellipse(130, 185, 50, 50);
}

function mousePressed() {
	// Water Throw Attack
	if (mouseIsPressed && mouseX > 50 && mouseX < 250 && mouseY > 425 && mouseY < 475) {
		pokemonOmar.attackOpponent(pokemonDonnie, pokemonOmar.waterThrowAttack);
		console.log(pokemonDonnie.display());
	}

	// Drip Attack
	if (mouseIsPressed && mouseX > 50 && mouseX < 250 && mouseY > 525 && mouseY < 575) {
		pokemonOmar.attackOpponent(pokemonDonnie, pokemonOmar.dripAttack);
		console.log(pokemonDonnie.display());
	}

	// Splash Attack
	if (mouseIsPressed && mouseX > 325 && mouseX < 525 && mouseY > 425 && mouseY < 475) {
		pokemonOmar.attackOpponent(pokemonDonnie, pokemonOmar.splashAttack);
		console.log(pokemonDonnie.display());
	}

	// Water Whip Attack
	if (mouseIsPressed && mouseX > 325 && mouseX < 525 && mouseY > 525 && mouseY < 575) {
		pokemonOmar.attackOpponent(pokemonDonnie, pokemonOmar.waterWhipAttack);
		console.log(pokemonDonnie.display());
	}
}

function attackBox(attackName, x, y) {
	textAlign(CENTER, CENTER);
	fill(100, 150, 100);
	rect(x, y, 200, 50);
	fill(0);
	textSize(32);
	text(attackName, x, y, 200, 50);
}

