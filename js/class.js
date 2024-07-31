class Animal{
    leg;
    teeth;

    // constructor(){
    //     console.log("Animals");
    // }
    constructor(lg,tt){
        this.leg=lg;
        this.teeth=tt;
    }
    hunt(){
        console.log("Animals hunt using "+this.leg+" legs and "+this.teeth+" teeth");
    }

    nonVeg(){
        console.log("NON-VEG");
    }
    veg(){
        console.log("VEG");
    }
}

let fox=new Animal(4,"Sharp");
console.log(fox.leg,fox.teeth);
fox.nonVeg();
fox.hunt();