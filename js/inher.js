// SINGLE 

class Father {
    drive() {
        console.log("He can drive");
    }
}
class Child extends Father {
    program() {
        console.log("He can program");
    }
}

m1 = new Father();
m1.drive();

m2 = new Child();
m2.drive();
m2.program();

// ------------------------------
// MULTILEVEL 

class A{
    asd(){
        console.log("FROM A");
    }
}
class B extends A{
    bsd(){
        console.log("FROM B");
    }
}
class C extends B{
    csd(){
        console.log("FROM C");
    }
}

c1 = new C();
c1.asd();
c1.bsd();
c1.csd();

// ------------------------------
// HIERARCHICHAL

class D{
            amd(){
                console.log("FROM D");
            }
}
class E extends D{
            bmd(){
                console.log("FROM E");
            }
}
class F extends E{
            cmd(){
                console.log("FROM F");
            }
}

e1 = new E();
e1.amd();
e1.bmd();

f1 = new F();
f1.cmd();
f1.bmd();
