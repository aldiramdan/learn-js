function seleksiNilai(nilaiAwal, nilaiAkhir, nilaiArray) {
    let result = []

    // validasi type data 
    if (typeof(nilaiAwal, nilaiAkhir) == 'number') {
        return 'Nilai harus type number'
    } else if (typeof(nilaiArray) != 'object') {
        return 'Nilai Array harus type object'
    //validasi untuk nilaiawal < nilaiakhir
    } else if (nilaiAwal > nilaiAkhir ) {
        return 'Nilai awal harus lebih kecil dari nilai akhir'
    // validasi untuk length array harus lebih dari 5
    } else if (nilaiArray.length <= 5) {
        return 'Jumlah angka dalam nilai array harus lebih dari 5'
    } 

    for (let i = nilaiAwal; i < nilaiAkhir; i++) {
        for (let j = 0; j < nilaiArray.length; j++) {
            if (i == nilaiArray[j]) {
                result.push(nilaiArray[j])
            }
        }
    }
    return result
}
console.log(seleksiNilai(5,20,[2, 25, 4, 14, 17, 30, 8,]));
// console.log(seleksiNilai('a',20,[2, 25, 4, 14, 17, 30, 8,]));
// console.log(seleksiNilai(25,20,[2, 25, 4, 14, 17, 30, 8,]));
// console.log(seleksiNilai(5,20,[2, 25, 4]));