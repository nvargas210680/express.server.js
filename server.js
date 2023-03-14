import express from "express";


const app = express();
const PORT = 4000;

app.get("/", (request, response) => {
    response.send("hello world!!");
});

app.get("/Express", (request, response) => {
    response.send("Express Js Rulez")
});


app.get("/json", (request, response)=> {
    response.json({hello: "world"});
});


app.get("/dateTime", (request, response) => {
    response.send({
        currentDate: new Date (). toLocaleDateString("en-us", {
           month: "long",
           day: "2-digit",
           year: "numeric",
           weekday: "long",
           hour: "numeric",
           minute: "2-digit", 
        })
    })
});

// app.get("/forest", (request, response) => {
//     let daylight = request.query.daylight;

//     if (daylight === "true") {
//         response.send("You are in a deep, decently lit wood....");

//     } else {
//         response.send("You are in a deep, dark wood...");
//     }
// });


app.get("/forest", (request, response)=> {
    let daylight = request.query.daylight;
    let numberOfDragons = request.query.numberOfDragons;

    if(numberOfDragons === undefined){
     return response.send("please enter numberOfDragons");
    }

if (daylight == "true"){
    response.send("You are in a deep, decently lit wood" + "with" + numberOfDragons + "dragons");
} else {
    response.send("You are in a deep, dark wood..." + "with" + numberOfDragons + "dragons");
}

});


app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});
