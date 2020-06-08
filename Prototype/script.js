class Human{
    constructor(name,energy){
        this.name = name;
        this.energy = energy;
    }

    makan(porsi){
        this.energy += porsi;
    }

    main(jam){
        this.energy -= jam * 2;
    }

}

let dytlan = new Human('Dyt','50');