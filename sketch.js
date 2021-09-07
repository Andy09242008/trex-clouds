var marks = [35,38,42,45,43,34,46,41,48,32];
function findnumber(marks,x){
for (i=0;i<marks.length;i++){
if (marks[i]===x){
return i
}
}
return -1

}

function setup() 
{
  createCanvas(400,400);
var result = findnumber(marks,42)
if (result===-1){
  console.log("number not found")
}
else {
  console.log("number found at index: ",result)
}
}

function draw() 
{
  background(30);
}

 

