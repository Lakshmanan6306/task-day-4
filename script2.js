let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};

var a = Object.values(obj1);

var b = Object.values(obj2);

var res ;

if (a.length==b.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key])){
  res = true;
}else{
    res = flase;
}
console.log(res);