const shess = document.querySelector('.shess');
const abc = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


function abcAdd(i){
    console.log(i);
}

for(let i = 0; i < 100; i++ ){
    let cub = document.createElement('div');
    // cub.textContent = i;
    shess.appendChild(cub);
    cub.classList.add('cub');
    // if(i > 11 && i <= 88){
    //     if(Math.floor(i / 10) % 2 == 0){
    //         if(i % 2 === 0){
    //             cub.classList.add('black-box');
    //         };    
    //     }else{
    //         if(i % 2 === 1){
    //             cub.classList.add('black-box');
    //         };
    //     };
    // };


    if(i % 10 === 0 || (i + 1) % 10  === 0 || i > 90 || i < 10){
        cub.classList.remove('cub');
        if(i >= 1 &&i < 9 && i != 9 || i != 90 && i > 90 && i != 99){
            if(i < 9){
                cub.textContent = abc[i - 1];
                cub.classList.toggle('skyline');
            }else{
                cub.textContent = abc[(i % 10) - 1];
                cub.classList.toggle('skyline');
            };

        };
        if(i % 10 === 0 ){
            cub.textContent = Math.floor(i / 10);
            cub.classList.toggle('stand-and');
        }else if ((i + 1) % 10  === 0){
            cub.textContent = Math.floor(i / 10);
            cub.classList.toggle('stand-centr');
        };
        if(i === 0 || i === 9 || i === 90 || i === 99){
            cub.textContent = '';
        }
    }
    if(i >= 11 && i <= 88){
        if(Math.floor(i / 10) % 2 == 0){
            if(i % 2 === 0){
                
                if(!(i % 10 === 0) ){
                    cub.classList.add('black-box'); 
                }
                
            };    
        }else{
            if(i % 2 === 1){
                if(!((i + 1) % 10  === 0)){
                cub.classList.add('black-box');
               }
            };
        };
    };
    
    
};
shess.style.cssText ='display: grid; grid-template-columns: repeat(10, 100px);'

const cub =shess.querySelectorAll('.cub');
const skyline = shess.querySelectorAll('.skyline');
const standAnd = shess.querySelectorAll('.stand-and');
const standCentr = shess.querySelectorAll('.stand-centr');
const blackBox = shess.querySelectorAll('.black-box');

cub.forEach(div =>{
    div.style.cssText = 'border: 1px solid black; height: 100px;';
});


skyline.forEach(div =>{
 div.style.cssText = 'display: flex; justify-content: center;'
});
standAnd.forEach(div =>{
    div.style.cssText = 'display: flex; justify-content: flex-end; align-items: center;'
});

standCentr.forEach(div =>{
    div.style.cssText = 'display: flex; align-items: center;'
});
blackBox.forEach(div =>{
    div.style.cssText = 'background: black;'
});




