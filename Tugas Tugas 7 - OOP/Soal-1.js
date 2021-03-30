class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    set setName(name) {
        this._name = name
    }
    get getName() {
        return this._name;
    }

    set setLegs(legs) {
        this._legs = legs;
    }
    get getLegs() {
        return this._legs;
    }

    set setColdBlooded(coldBlooded) {
        this._cold_blooded = coldBlooded;
    }
    get getColdBlooded() {
        return this._cold_blooded;
    }
}

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }

    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log("hop hop");
    }
}

// Test 1
var sheep = new Animal("shaun");
console.log(sheep._name)
console.log(sheep._legs)
console.log(sheep._cold_blooded) 

// Test 2
let sungokong = new Ape("Kera sakti")
sungokong.yell();

// Test 3
let kodok = new Frog("Buduk");
kodok.jump();