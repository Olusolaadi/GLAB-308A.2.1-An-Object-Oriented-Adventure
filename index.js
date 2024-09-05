// ========== Part 1: Humble Beginnings ==========

// Modelling a simple adventurer with basic properties such as health and an inventory. 

// Calling the adventurer object "Robin".
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat, sunglasses"],
        },
},

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

    }

     // Create a loop that logs each item in Robin’s inventory.
     let advInv = adventurer.inventory;
     for (let i = 0; i < advInv.length; i++) {
        console.log(advInv[i]);
    }

     adventurer.roll(1);
     adventurer.roll(2);
     adventurer.roll(3);
     adventurer.roll(4);
     adventurer.roll(5);
    
 // ========== Part 2: Class Fantasy ==========

// The basic Character class and a constructor function that allows us to create new characters with whatever name we would like.

 class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    // Adding the roll method to the Character class.
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }

}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.roll(4);
robin.companion.roll();
robin.companion.roll(2);
robin.companion.companion.roll();
robin.companion.companion.roll(3); 

// ========== Part 3: Class Features ==========

class Character2 {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    // Adding the roll method to the Character class.
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }

}

class Adventurer extends Character2 {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
    this.role = 'flexible';
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  
// ========== Other things Adventurers have the ability to do. ==========

  // Adventurers have the ability to sleep.
  sleep () {
    console.log(`${this.name} is sleeping...`);
    this.health = 100;
  }
  // Adventurers have the ability to eat.
  eat () {
    console.log(`${this.name} is eating...`);
    this.health += 50;
  }
  // Adventurers have the ability to take pictures.
  takePicture () {
    console.log(`${this.name} is taking a picture...`);
    this.inventory.push("camera");
  }
  // Adventurers have the ability to buy new clothes.
  buyItems (items) {
    console.log(`${this.name} is buying ${clothes}...`);
    this.inventory.push(clothes);
  }
  // Adventurers have the ability to make new friends.
  newFriends (friends) {
    console.log(`${this.name} is making some new friends...`);
    this.health += 40;
  }

  toString () {
    return `${this.name} is a ${this.role} adventurer.`;
  }

}
// Class Companion extends Character

class Companion extends Character2 {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    // Adding the roll method to the Character class.
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }

    // Every companion starts with blanket and 35 gold coins.
    // this.inventory.push("blanket", "35 gold coins");

    // Companions have the ability to warn adventures of the danger ahead.
    warn () {
        console.log(`${this.name} is warning ${this.name} of the danger ahead...`);
        super.roll();
    }
    // Companions have the ability to support adventurers.
    support () {
        console.log(`${this.name} supports ${this.name} anytime they both go for an adventure...`);
        this.health += 70;
    }
    // Companions have the ability to discover observe the environment
    observe () {
        console.log(`${this.name} is observing the environment...`);
        this.inventory.push("binoculars");
    }
}

const olusola = new Adventurer("Olusola");
olusola.inventory = ["shield", "notebooks", "potion"];
olusola.companion = new Character2("Esther");
olusola.companion.type = "friend";
olusola.companion.companion = new Character2("Dog");
olusola.companion.companion.type = "fur";
olusola.companion.companion.inventory = ["bag", "boots"];

olusola.roll();
olusola.roll(4);
olusola.companion.roll();
olusola.companion.roll(2);
olusola.companion.companion.roll();
olusola.companion.companion.roll(3); 

console.log(olusola.toString()); 

// ========== Part 4: Class Uniforms ==========

// Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
class Character3 {

    static MAX_HEALTH = 100;

    static isValidRole(role) {
        return Adventurer.roles.includes(role);
    }
    
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
}

// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
  class Adventurer2 extends Character {
    static role = ["Fighter", "Healer", "Wizard", "Observer"];

    constructor(name) {

        super(name);

        this.role = role;

// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.


        if (Adventurer.roles.isValid(role)) {
            this.role = role;
        } else {
            throw new Error(`Role does not match: ${role}`);
        }
    }
}

// ========== Part 5: Gather your Party ===========

class AdventurerFactory {  
    // The AdventurerFactory class will be responsible for generating new Adventurers.
    // It will have a generate method that takes a name and role, and returns a new Adventurer.
    // It will also have a findByIndex and findByName method that takes a name or index, and returns the Adventurer.
    // It will also have a findByRole method that takes a role, and returns all Adventurers with that role.
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new AdventurerFactory(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
    findByRole (role) {
      return this.adventurers.filter((b) => b.role === role);
    }
  }
  
  const fighters = new AdventurerFactory("Fighter");
  const healers = new AdventurerFactory("Healer");
  const wizards = new AdventurerFactory("Wizard");
  const observers = new AdventurerFactory("Observer");


    
    fighters.generate("Esther");
    fighters.generate("Robin");
    fighters.generate("Derek");
    fighters.generate("Olusola");

  console.log(fighters);
  console.log(healers);
  console.log(wizards);
  console.log(observers);

  console.log(fighters.findByRole("Fighter"));
  console.log(fighters.findByIndex(0));
  console.log(fighters.findByIndex(1));

// ========== Part 6: Developing Skills ==========

// Create an additional method, duel(), for the Adventurer class with the following functionality:

// Accept an Adventurer as a parameter.
const duel = (Adventurer) => {

    // Use the roll() functionality to create opposing rolls for each adventurer.

    const result1 = Math.floor(Math.random() * 20) + 1 + mod;
    const result2 = Math.floor(Math.random() * 20) + 1 + mod;

    if (result1 > result2) {
        console.log(`${this.name} wins!`);
        Adventurer.health -= 1;
    } else if (result1 < result2) {
        console.log(`${Adventurer.name} wins!`);
        this.health -= 1;
    } else if (result1 === result2) {
        console.log("It is a draw");
    }

}

// ========== Part 7: Adventure Forth ==========



