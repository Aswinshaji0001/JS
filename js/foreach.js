a=[
    {name:"Aswin",age:20,mrk:100},
    {name:"Avin",age:20,mrk:100},
    {name:"Akhil",age:20,mrk:100},
    {name:"Aju",age:20,mrk:10},
]
a.forEach((data)=>{
    console.log(data);
});

// const x=a.find((data)=>{
//     return data.name=="Aswin"
// })
// console.log(x);

const x=a.filter((item)=>{
    return item.mrk>50;
})
console.log(x);

a.map((r)=>{
    console.log(r);
})

const val=a.reduce((total,item)=>{
    return total+item.mrk
},0)
console.log(val);