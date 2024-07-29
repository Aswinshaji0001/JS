std1={name:"Aswin",mark:20,class:10}
std2={name:"Alan",mark:20,class:10}
std3={name:"David",mark:20,class:10}
std4={name:"Avin",mark:20,class:10}
std5={name:"Felix",mark:20,class:10}

function getData() {
    console.log(` Name is ${this.name} of class ${this.class} got marks ${this.mark}`)
}

getData.call(std1);
getData.call(std2);
getData.call(std3);
getData.call(std4);
getData.call(std5);