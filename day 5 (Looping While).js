console.log("LOOPING PERTAMA");

for (let counter = 2; counter < 22; counter += 2) {
  document.write(counter + ' - Ilham Ganteng Banget<br>');
}

console.log("LOOPING KEDUA");

for (let counter = 20; counter > 0; counter -= 2) {
  document.write(counter + ' - Aku ingin jadi bajak laut<br>');
}

console.log();

console.log("Looping For");

for (let angka = 1; angka <= 20; angka++) {
  if (angka % 3 === 0) {
    console.log(`${angka} - INI KELIPATAN 3`);
  } else {
    if (angka % 2 === 0) {
      console.log(`${angka} - INI ADALAH ANGKA GENAP (${angka})`);
    } else {
      console.log(`${angka} - INI ADALAH ANGKA GANJIL (${angka})`);
    }
  }
}

console.log();

console.log("Looping #");

let text = "";

for (let i = 0; i < 4; i++) {
  text += "#";
  console.log(text);
}

console.log("Looping # Ngajejer");

let s = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    s += "#";
  }
  s += "\n";
}

console.log(s);

console.log("Looping #");

let ashiap = "";

for (let i = 0; i < 8; i++) {
  ashiap += "# # # #\n";
}

console.log(ashiap);
