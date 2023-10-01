const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

// let result = []

// for (let i = 0; i < name.length; i++) {
//     if (checkName(name[i]) === true) {
//         result.push(name[i])
//     }
// }


function searchName(str, num, cbfn) {
    let result = []
    for (let i = 0; i < name.length; i++) {
        if (cbfn(name[i], str) === true) {
            result.push(name[i])
            console.log(result);
            result = result.slice(0, num)
        }
    }
    return result
}

function checkName(name, str) {
    let cekNama = false
    let str2 = 0
    let lowerName = name.toLowerCase()
    let lowerStr = str.toLowerCase()
    for (let i = 0; i < lowerName.length; i++) {
        for (let j = 0; j < lowerStr.length; j++) {
            if (lowerName[i+j] === lowerStr[j]) { 
                str2++            
            } else {
                str2 = 0
            }
            if (str2 === lowerStr.length){
                cekNama = true
                return cekNama  
            }
        }
    }
    return cekNama
}
console.log(searchName('an', 3, checkName));

// function searchName(str, num, callback){
//     let result = name.filter((name) => name.indexOf(str) !== -1)
//     result = result.slice(0, num)
//     callback(result)
// }

// function showSearchName(result){
//     console.log(result);
// }
// searchName("an", 3, showSearchName)