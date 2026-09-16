telphone = { //{} OR []
    battery: 100, // key: value
    name: "iphone",
    color: "black",
    application: ["app1" , "app2"]
}  // NO INDEX

// 0 1 2 3 

// students = [
//     {
//         battery: 100, // key: value
//         name: "iphone",
//         color: "black",
//         application: ["app1" , "app2"]  
//     }, // value
//     {
//         battery: 70, // key: value
//         name: "sum",
//         color: "red",
//         application: ["app3" , "app4"]
//     }
// ] // INDEX 

telphones = [
    {
        battery, // key: value
        name,
        color,
        application // array
    }
]

// {}

for (let i = 0; i < telphones.length; i++) {
    if (telphones[i].name === "iphone") {
        console.log(telphones[i].color);
        
    } else {
        telphones[i].application.forEach(element => {
            
        });
        
    }
    
}

// .filter(n -> n % 2 == 0)
// .foreach(n -> console.log(n))
// .map(n -> n / 2)

Array.map(n -> n / 2).forEach(n -> console.log(n));
)



console.log(students[1].application[1]);

