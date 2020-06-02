//Ini buat bikin button background Red Colornya berubah pake DOM
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    document.body.classList.toggle('red');
});

//Ini buat button baru setelah button background red color terus abis itu bikin random warna
const newButton = document.createElement('button');
const textButton = document.createTextNode('Random Background Color');
newButton.append(textButton);
newButton.setAttribute('type','button');

button.after(newButton);

newButton.addEventListener('click',()=>{
    //Math round buat pembulatan dan math random untuk random angka
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const b = Math.round(Math.random()*255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
});

//ini query selector menggunakan name elemen di HTML
const slideRed = document.querySelector('input[name=red]');
const slideGreen = document.querySelector('input[name=green]');
const slideBlue = document.querySelector('input[name=blue]');

slideRed.addEventListener('input',()=>{
    const r = slideRed.value;
    const g = slideGreen.value;
    const b = slideBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

slideGreen.addEventListener('input',()=>{
    const r = slideRed.value;
    const g = slideGreen.value;
    const b = slideBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

slideBlue.addEventListener('input',()=>{
    //.value merupakan value dari nilai nodenya
    const r = slideRed.value;
    const g = slideGreen.value;
    const b = slideBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

//Ini jika ingin mengetahui posisi mouse ada dimana, someday ini bakal penting banget sih
document.body.addEventListener('mousemove',(event)=>{
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    console.log(width);
});