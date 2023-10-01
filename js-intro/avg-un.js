const mtk = 80
const bahasaIndonesia = 78
const bahasaInggris = 90
const ipa = 90

const avg = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

if (typeof(mtk, bahasaIndonesia, bahasaInggris, ipa) !== 'number'){
    console.log('Nilai bukan number');
} else if (avg > 90 && avg <= 100) {
    console.log(`Rata-Rata : ${avg}\nGrade : A`);
} else if (avg > 80 && avg < 89) {
    console.log(`Rata-Rata : ${avg}\nGrade : B`);
} else if (avg > 70 && avg < 79) {
    console.log(`Rata-Rata : ${avg}\nGrade : C`);
} else if (avg > 60 && avg < 69) {
    console.log(`Rata-Rata : ${avg}\nGrade : D`);
} else if (avg < 59 && avg >= 0) {
    console.log(`Rata-Rata : ${avg}\nGrade : E`)
} else {
    console.log('Avarage Invalid');
}