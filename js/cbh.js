function orderFood(callback){
    setTimeout(()=>{
        console.log("FOOD ORDERED");
        callback();
    },1000)
}

function decorateVenue(callback){
    setTimeout(()=>{
        console.log("VENUE DECORATED");
        callback();
    },1000)
}

function arrangeDJ(callback){
    setTimeout(()=>{
        console.log("DJ ARRANGED");
        callback();
    },1000)
}

orderFood(()=>{
    decorateVenue(()=>{
        arrangeDJ(()=>{
            console.log("MISSION PASSED");
        });
    });
});