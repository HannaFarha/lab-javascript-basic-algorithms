
var hacker1="john";
console.log("The driver's name is " + hacker1)
var hacker2="johny";
console.log("The navigator name is " + hacker2)

if(hacker1.length > hacker2.length){
   console.log("The driver has the longest name "+ hacker1.length  +" characters!")
}
  else if(hacker1.length < hacker2.length)
  {
    console.log("It seems that the navigator has the longest name " +hacker2.length  +" characters!")
  }
  else if (hacker1.length === hacker2.length)
{
    console.log("Wow, you both have equally long names "+hacker1.length +" characters!");
  }

for (let i=0;i<hacker1.length;i++){
  
 var h=hacker1[i]
 console.log(h.toUpperCase());
}

 var v = hacker1.toUpperCase();
 console.log (v.split(""))


var splitString = hacker2.split("");
splitString.reverse();
console.log(splitString);
function compareNames(name1, name2) {
 return name1.localeCompare(name2);
}



if (compareNames(hacker1, hacker2) < 0) {
 console.log(`The driver's name (${hacker1}) goes first.`);
} else if (compareNames(hacker1, hacker2) > 0) {
 console.log(`Yo, the navigator (${hacker2}) goes first definitely.`);
} else {
 console.log(`What?! You both have the same name (${hacker1})?`);
}

const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis velit sed dolor ullamcorper, a malesuada augue venenatis. Cras facilisis urna a augue pretium"
var count=1;
var count2=0;
for(let i =0;i<loremIpsumText.length;i++){
  if(loremIpsumText[i]==" "){
    count+=1;
  }
}
console.log(count) ;
for(let i =0;i<loremIpsumText.length;i++){
  if(loremIpsumText[i] =="e"&& loremIpsumText[i+1]=="t"){
    count2+=1;
  }
}
console.log(count2) ;


var phraseToCheck ="that is everything!! iam finish with the lab for today, put it up";
var index=phraseToCheck.indexOf("put");
for(let i =0;i<phraseToCheck.length;i++){
  console.log([i]);
if(index){
  break;
}
}console.log(index);