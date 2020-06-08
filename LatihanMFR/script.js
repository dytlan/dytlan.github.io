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

 //Point 1
 const videos = Array.from(document.querySelectorAll('ul li'));
 
 //Point 2
const totalDuration = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//Point 3
.map(video=>video.getAttribute('data-duration'))

//Point 4
.map(duration=>{
    let time = duration.split(':');
    return parseInt(time[0])*60 +parseInt(time[1]);
})

//Point 5
.reduce((duration,current) => duration + current )

//Point 6
let hour    = Math.floor(totalDuration / 3600);
let minute  = Math.floor((totalDuration - (3600 * hour))/60);
let second  = Math.floor((totalDuration - (3600 * hour) - (minute * 60)))

//Point 2
const filterVIdeo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));

//Point 7
const textDuration = hour+' jam '+minute+' menit '+second+' detik';

timeHTML = document.querySelector('.total-durasi');
countVideo = document.querySelector('.jumlah-video');

timeHTML.innerHTML = textDuration;
countVideo.innerHTML = filterVIdeo.length + ' Video';




