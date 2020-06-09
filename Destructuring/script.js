const student = {
    name: 'Dytlan',
    age: 22,
    average: {
        uts:85,
        uas:100,
    }
};

function sayHello({name,age,average:{uts,uas}}){
    console.log(`Hello ${name}, kamu berumur ${age} tahun ya sekarang. Nilai kamu itu uasnya ${uas} dan uts ${uts}`)
}

sayHello(student);