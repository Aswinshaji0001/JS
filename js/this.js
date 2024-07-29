const person1 = {
    name:"synnefo",
    location:"kochi",
    method:getName,
};
const person2 = {
    name:"novavi",
    location:"kochi",
    method:getName,
};

function getName(){
    console.log(this);
    console.log(this.name);
    console.log(this.location);
}
person1.method();
person2.method();
// -------------------------------------------

const person3 = {
    name:"synnefo",
    location:"kochi",
};
const person4 = {
    name:"novavi",
    location:"kochi",
};

function getData(a,b,c){
    console.log(a,b,c);
    console.log(this.name);
    console.log(this.location);
}
getData.call(person1,"1","2","3")
getData.apply(person2,[1,2,3])

const newName=getData.bind(person1);
newName();

// -----------------------

const person5={
    name:"novavi",
    location:"kochi",
    method(){
        return function getData(){
            return this;
        };
        
    }
}

x=person5.method();
console.log(x());