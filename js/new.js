
a=0;
sum=0;
    do
    {
        if(a%2==1)
            {
                console.log( "The odd numbers are "+a);
            }
        a++;
        
    }while(a<=10);

    for(a=0;a<=10;a++)

        {
           sum=sum+a;
            
        }
        console.log(sum);

    for(a=1;a<=10;a++)

        {
            if(a%2==0)
                {
                    console.log("The even numbers are "+a);
                }
            
        }
    
    let b=0;
    let c=1;
    let d;
    console.log(b);
    console.log(c);
        for( let i=0;i<=10;i++)
        {
            d=b;
            b=c;
            c=d+b;
            console.log(c);
        }
// for(let i=1;i<=100;i++)
// {
//     if(i%3==0)
//     {
//         console.log("fizz");
//     }
//     else
//     {
//         console.log(i);
//     }
// }
// for(let i=1;i<=100;i++)
//     {
//         if(i%5==0)
//         {
//             console.log("buzz");
//         }
//         else
//         {
//             console.log(i);
//         }
//     }