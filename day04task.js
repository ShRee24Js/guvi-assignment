//1.comparing two Json have the same properties without order:
let obj1={
    name:"persone1",
    age:5
};
let obj2={
    age:5,
    name:"persone2",
};
let len= Object.keys(obj2)
var check= true
for (var i of Object.keys(obj2)) {
    if (obj1[i]!=obj2[i]) {
    check = false;
        
    }
}
console.log(check)



// iteration - iterate
// keya =keyb= b, valuea= 2, valueb= 21

// key c value 3
// key a value 1





//2. display all country falgs in console

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all")
// request.send(); // 
// request.onload=function(){
// var result=JSON.parse(request.response)

// for(var i in result){
//       console.log(result[i].flags)
 
// }
// }


//3.print all countries name,region, sub-region and population
// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all")
// request.send(); // 
// request.onload=function(){
// var result=JSON.parse(request.response)
// // console.log(result)

// for(var i in result){
//       console.log(result[i].name,result[i].region,result[i].subregion,result[i].population)
 
// }
// }