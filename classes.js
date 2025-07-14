class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    toFight(){
        
        let attack;
        
        if (this.type === "Wizard") {
            attack = "Magic"
        } else if (this.type === "Warrior") {
            attack = "Sword"
        } else if (this.type === "Monk") {
            attack = "Martial arts"
        } else {
            attack = "Shuriken" }
        
        console.log("The " + this.type + " attacked using " + attack)
    }

}

let character = new Hero("Vinicios", 23, "Ninja")

character.toFight()