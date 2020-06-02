    // menangkap pilihan player
    const players = document.querySelectorAll('div.area-player ul li img');
    let playerResult = '';
    let compResult = '';
    let result = '';
   
    const imgComputer = document.querySelector('.area-komputer img');
    const info = document.querySelector('.info');
   
    //Saat Player memilih suwit
    for (const player of players){
        player.addEventListener('click',()=>{
            playerResult = player.className;
            const compResult = compGenerate();
            const showResult = rules(playerResult,compResult);
            shuffle();
            setTimeout(()=>{
                imgComputer.setAttribute('src','img/'+compResult+'.png');
                info.innerHTML = showResult;
            },1000);
            
        });
        
    };

    //Putar Image Komputer
    const shuffle = ()=>{
    const startTime = new Date().getTime();
    let i = 0;
    const img = ['gajah','orang','semut'];
    setInterval(()=>{
        if(new Date().getTime() - startTime > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/'+img[i++]+'.png');
        if(i == img.length) i = 0;
    },100);
    }

    //Function Set Random value untuk comp
        const compGenerate = ()=>{
            const comp = Math.random();
            if(comp < 0.34){
                compResult = 'gajah';
            }
            else if(comp > 0.33 && comp < 0.64){
                compResult = 'orang';
            }
            else{
                compResult = 'semut';
            }

            return compResult;
        }
    //Function Rules Suwit
    const rules = (playerResult,compResult)=>{
        if( playerResult == compResult ) {
            result = 'SERI!';
        } else if( playerResult == 'gajah' ) {
            result = ( compResult == 'orang' ) ? 'MENANG!' : 'KALAH!';
        } else if( playerResult == 'orang' ) {
            result = ( compResult == 'gajah' ) ? 'KALAH!' : 'MENANG!';
        } else if( playerResult == 'semut' ) {
            result = ( compResult == 'orang' ) ? 'KALAH' : 'MENANG!';
        } else {
            result = 'memasukkan pilihan yang salah!';
        }

        return result;
    }
    