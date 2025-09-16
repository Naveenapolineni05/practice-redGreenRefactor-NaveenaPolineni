// Refactor Phase:

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i].toLowerCase())){
            num++;
        }
    }
    return num;
}

// Green Phase:

// function countVowels(str) {
//     let num = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (
//             str[i].toLowerCase() === 'a' ||
//             str[i].toLowerCase() === 'e' ||
//             str[i].toLowerCase() === 'i' ||
//             str[i].toLowerCase() === 'o' ||
//             str[i].toLowerCase() === 'u'
//         ) {
//             num++;
//         }
//     }
//     return num;
// }

module.exports = countVowels;