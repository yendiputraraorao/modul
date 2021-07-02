console.log("2.3.2.2 Tugas Praktek");
console.log("Nomor 1. Pengurutan Pada Array");
var siswa ={
nama: "Yendi Putra",
alamat: "Paninggahan solok",
hp: "0812313131"
};
console.log(siswa.nama);

var namapeserta=["Bob", "Rini", "Amy", "Santi","Kadri"];
namapeserta.sort()
console.log(namapeserta);

var daftarsepatu =[
	{id:1,nama:"Adidas A3",harga:250000},
	{id:2,nama:"carwil x5 ",harga:350000},
	{id:3,nama:"Nike N66",harga:400000},
	{id:4,nama:"Diadora fx",harga:150000}
];
function urutkan(daftarsepatu){

return daftarsepatu.sort(function (a,b){
	return a.harga-b.harga;
})

}

console.log(urutkan(daftarsepatu));



