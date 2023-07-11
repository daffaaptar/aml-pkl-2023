// Mengembalikan nilai

function namakalian() {
  let nama = "ilham andriansyah";
  return nama;
}

console.log(namakalian());

// Penjumlahan

function perkalian(angka1, angka2) {
  let hasil = angka1 * angka2;
  return hasil;
}

let angka1 = 5;
let angka2 = 3;
let hasilPerkalian = perkalian(angka1, angka2);

console.log("Hasil dari perkalian " + angka1 + " dan " + angka2 + " adalah " + hasilPerkalian);

// Biodata

function datadiri() {
  let nama = "Adit";
  let umur = 7;
  let alamat = "Jakarta";
  let hobi = "berenang";

  console.log("Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobi yaitu " + hobi + ".");
}

datadiri();
