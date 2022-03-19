var count = 100;
count += 50; //150
count += "원"; //150원
count += 50; //150원50
count = 100; //150원50100
var count = "100원";
var arr = ["회사소개","제품소개","고객센터"];

//number, string, null, undefined, object

console.log("count 변수값은? ", count, "데이터타입은 ", typeof count );
console.log("arr 값을 가져올때 ", arr[0] , "데이터타입은 ", typeof arr );