console.log("24.4.2.2 Tugas Praktek");
console.log("Nomor 2. Membuat Program Aritmatika");
var siswa ={
nama: "Yendi Putra",
alamat: "Paninggahan solok",
hp: "0812313131"
};
console.log(siswa.nama);

const readline = require('readline-sync');
console.info('Program penambahan angka');
const number1 = readline.question('Masukkan angka pertama :');
const number2 = readline.question('Masukkan angka kedua   :');
console.log("=========================== +");
function tambah(a, b) {
 return a + b;
}
function kurang(a, b) {
    return a - b;
   }
   const hasiltambah = tambah(parseInt(number1), parseInt(number2));
   console.log("hasil Penjumlahan dari "+number1+ "+"+number2+"="+hasiltambah);

function kurang(a, b) {
    return a - b;
   }
   const hasilkurang = kurang(parseInt(number1), parseInt(number2));
   console.log("hasil Pengurangan dari "+number1+ "-"+number2+"="+hasilkurang);

function kali(a,b){
    return a*b;
}
const hasilkali = kali(parseInt(number1), parseInt(number2));
console.log("hasil Kali dari "+number1+ "x"+number2+"="+hasilkali);

function bagi(a,b){
    return a/b;
}
const hasilbagi = bagi(parseInt(number1), parseInt(number2));
console.log("hasil Bagi dari "+number1+ "/"+number2+"="+hasilbagi);