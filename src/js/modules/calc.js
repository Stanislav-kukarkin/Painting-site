const calc = (size, mat, opc, promo, result) => {
    const sizeBlock = document.querySelector(size),
          matBlock = document.querySelector(mat),
          opcBlock = document.querySelector(opc),
          promoBlock = document.querySelector(promo),
          resultBlock = document.querySelector(result);
    
    let sum = 0;
    
    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+matBlock.value) + (+opcBlock.value));

        if(sizeBlock.value == '' || matBlock.value == ''){
            resultBlock.textContent = 'Пожалуйста выберите, размер и материал картины';
        } else if (promoBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum*0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    matBlock.addEventListener('change', calcFunc);
    opcBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);
};
export default calc;