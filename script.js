//diplay all the countries name in console using restcountries APi.

var Country = new XMLHttpRequest();
Country.open("GEt","https://restcountries.com/v3.1/all");
Country.send();
Country.onload = function(){
    var flag = JSON.parse(Country.response);
   
    for(let i=0;i<flag.length;i++){
        console.log(flag[i].flags);
    }

}