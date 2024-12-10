// let svar = ['Yesss', 'Better luck next time',
//     'No', 'Dont know', 'Ask someone', 'You shall not pass',
//     'Yes sir!', 'Hell yeah', 'Just a chill guy', 'La pation',
//     'Yahooo', 'Why you redeme it'];
// let answer = '8';
// let classFont = 'font'

// show();
// function show() {
//     let html = '';
//     html += `   <div class="ball8">
//                     <div  class="whiteCircle" onclick="getRandomAnswer()">
//                         <div class="${classFont}">
//                             ${answer}
//                         </div>
//                     </div>
//                 </div>`
//     document.getElementById('app').innerHTML = html
// }


// function getRandomAnswer() {
//     let randomIndex = Math.floor(Math.random() * svar.length)
//     let svarTxt = svar.length > 0 ? svar[randomIndex] : 'legg på mer penger'
//     classFont = '';
//     answer = svarTxt;
//     svar.splice(randomIndex, 1);
//     show();
// }
