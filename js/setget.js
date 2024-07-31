class Setget{
     mark1;
     mark2;
     mark3;
     name;
    constructor(m1,m2,m3,nk){

        this.mark1=m1;
        this.mark2=m2;
        this.mark3=m3;
        this.mr=document.createElement("div");
        this.mr.textContent="Name is "+nk+" physics "+m1+" physics "+m2+" physics "+m3;
        
        document.body.appendChild(this.mr);

    }
    mk(){
    let tot1=(this.mark1+this.mark2+this.mark3)/30;
    this.tot=document.createElement("div");
    this.tot.textContent="CGPA "+tot1;
    document.body.appendChild(this.tot);

}
}
let stu=new Setget(100,17,10,"Aswin");
stu.mk();