// const close = document.querySelectorAll('.close');
// const card  = document.querySelectorAll('.card');

// for (const cls of close) {
//     cls.addEventListener('click',(event)=>{
//         event.target.parentElement.style.display = 'none';
//     });
// }

const container = document.querySelector('.container');

container.addEventListener('click',(event)=>{
    if(event.target.className == 'close'){
        event.target.parentElement.style.display = 'none';
    }
});
