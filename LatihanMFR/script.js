/**
 *  TO DO LIST :
 *  1. Ambil semua elemen video
 *  2. pilih hanya yang 'JAVASCRIPT LANJUTAN'
 *  3. Ambil durasi masing masing video
 *  4. Ubah durasi menjadi int, ubah menit menjadi detik  
 *  5. Jumlahkan semua detik
 *  6. Ubah formatnya menjadi jam menit detik
 *  7. Simpan di dalam DOM
 **/

 const videos = Array.from(document.querySelectorAll('ul li'));
 
const totalDuration = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

.map(video=>video.getAttribute('data-duration'))

.map(duration=>{
    let time = duration.split(':');
    return parseInt(time[0])*60 +parseInt(time[1]);
})

.reduce((duration,current) => duration + current )

let hour    = Math.floor(totalDuration / 3600);
let minute  = Math.floor((totalDuration - (3600 * hour))/60);
let second  = Math.floor((totalDuration - (3600 * hour) - (minute * 60)))

const filterVIdeo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));


const textDuration = hour+' jam '+minute+' menit '+second+' detik';

timeHTML = document.querySelector('.total-durasi');
countVideo = document.querySelector('.jumlah-video');

timeHTML.innerHTML = textDuration;
countVideo.innerHTML = filterVIdeo.length + ' Video';




