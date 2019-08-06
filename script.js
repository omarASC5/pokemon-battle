const pokemonOmar = {
	name: 'Omar',
	attack: 150,
	defense: 150,
	health: 150,
	type: 'WATER',
	waterThrowAttack: 250,
	splashAttack: 110,
	dripAttack: 12,
	waterWhipAttack: 60,
	startingHealth: 150,

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
function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255, 0, 0);

	// Bottom Attack Container
	fill(0, 255, 0);
	rect(0, 400, 600, 200);

	// Attacks
	// Water Throw Attack:
	// fill(100, 150, 100);
	// rect(50, 475, 200, 50);
	// fill(0);
	// textSize(32);
	// text('Water Throw', 60, 485, 200, 50);

	attackBox('Water Throw', 50, 425);
	attackBox('Splash', 325, 425);
	attackBox('Drip', 50, 525);
	attackBox('Water Whip', 325, 525);
	// console.log(mouseY);
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