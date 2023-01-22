//use the same rest country api print all the countires name and region and sub region and population

var rest = new XMLHttpRequest();
rest.open("GET","https://restcountries.com/v3.1/all");
rest.send();
rest.onload = function(){
    var result = JSON.parse(rest.response);
    //console.log(result);
    for(var i in result){
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
    }
}


