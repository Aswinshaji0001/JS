a=[
    {name:"Aswin",age:20,mrk:100},
    {name:"Avin",age:20,mrk:100},
    {name:"Akhil",age:20,mrk:10},
    {name:"Aju",age:20,mrk:10},
]
a.forEach((data)=>{
    console.log(data);
});

const y=a.find((data)=>{
    return data.mrk=="10"
})
console.log(y);

const x=a.filter((item)=>{
    return item.mrk>50;
})
console.log(x);

a.map((r)=>{
    console.log(r);
})

const val=a.reduce((first,last)=>{
    return first+last.name
},"")
console.log(val);