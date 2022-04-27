// day month and year
let day = document.getElementById('day');
 for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option')
    let optionText = document.createTextNode(i)
   option.appendChild(optionText)
    day.appendChild(option)
 }



let month = document.getElementById('month');
for (let i = 1; i <= 12; i++) {
  let option = document.createElement('option');
  let optionText = document.createTextNode(i)
 option.appendChild(optionText)
  month.appendChild(option)
}


 let year = document.getElementById('year');
for (let i = 1900; i <= 2022; i++) {
  let option = document.createElement('option');
  let optionText = document.createTextNode(i)
 option.appendChild(optionText)
 year.appendChild(option)
}
 // end .......
 //document.write('Event ')
function valueGenerate() {
  let val = document.getElementById('Inputfield').value
    document.getElementById('results').innerHTML = val
      
   }
 //check result start
 
 function checkResult() {
     var Bangla= document.getElementById('num').value;
     if(Bangla >= 80 && Bangla <= 100){
         document.getElementById('result').innerHTML= 'Bangla = A+'
     }else if(Bangla >= 70 && Bangla <= 79){
         document.getElementById('result').innerHTML= 'Bangla = A'
     }else if(Bangla >= 60 && Bangla <= 69){
         document.getElementById('result').innerHTML= 'Bangla = A-'
     }else if(Bangla >= 50 && Bangla <= 59){
         document.getElementById('result').innerHTML= 'Bangla = B'
     }else if(Bangla >= 40 && Bangla <= 49){
         document.getElementById('result').innerHTML= 'Bangla = C'
     }else if(Bangla >= 33 && Bangla <= 39){
         document.getElementById('result').innerHTML= 'Bangla = D'
     }else if(Bangla >=0 && Bangla < 33){
         document.getElementById('result').innerHTML= 'Bangla = F'
     }else {
         document.getElementById('result').innerHTML = 'Invalid number'
     }
 
 }
 
 
 function checkResult2() {
     var English= document.getElementById('num').value;
     if(English >= 80 && English <= 100){
         document.getElementById('result').innerHTML= 'English = A+'
     }else if(English >= 70 && English <= 79){
         document.getElementById('result').innerHTML= 'English = A'
     }else if(English >= 60 && English <= 69){
         document.getElementById('result').innerHTML= 'English = A-'
     }else if(English >= 50 && English <= 59){
         document.getElementById('result').innerHTML= 'English = B'
     }else if(English >= 40 && English <= 49){
         document.getElementById('result').innerHTML= 'English = C'
     }else if(English >= 33 && English <= 39){
         document.getElementById('result').innerHTML= 'English = D'
     }else if(English >=0 && English < 33){
         document.getElementById('result').innerHTML= 'English = F'
     }else {
         document.getElementById('result').innerHTML = 'Invalid number'
     }
 
 }
 
 
 function checkResult3() {
     var Math= document.getElementById('num').value;
     if(Math >= 80 && Math <= 100){
         document.getElementById('result').innerHTML= 'Math = A+'
     }else if(Math >= 70 && Math <= 79){
         document.getElementById('result').innerHTML= 'Math = A'
     }else if(Math >= 60 && Math <= 69){
         document.getElementById('result').innerHTML= 'Math = A-'
     }else if(Math >= 50 && Math <= 59){
         document.getElementById('result').innerHTML= 'Math = B'
     }else if(Math >= 40 && Math <= 49){
         document.getElementById('result').innerHTML= 'Math = C'
     }else if(Math >= 33 && Math <= 39){
         document.getElementById('result').innerHTML= 'Math = D'
     }else if(Math >=0 && Math < 33){
         document.getElementById('result').innerHTML= 'Math = F'
     }else {
         document.getElementById('result').innerHTML = 'Invalid number'
     }
}