class Bike{
    constructor(){
        this.company="SUZUKI";
    }
}
class Vehilce extends Bike{
    constructor(name,price){
        super()
        this.name=name;
        this.price=price;
    }
}


v= new Vehilce("WAGONR",135000);
document.writeln(`${v.company} ${v.name} ${v.price}`);