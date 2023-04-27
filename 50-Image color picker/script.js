const imageEl = document.querySelector('.image-container');
const imageInput = document.getElementById('image');
const pickColor = document.getElementById('pick-color');
const hexCode = document.querySelector('.hex-code');
const rgbCode = document.querySelector('.rgb-code');
const copyHex = document.querySelector('.copy-hex');
const copyRgb = document.querySelector('.copy-rgb');
const selectedColor = document.querySelector('.selected-color');
let eyeDropper;

//Function On Window Load
window.onload = () => {
    //Check if the browser supports eyedropper
    if ("EyeDropper" in window) {
      eyeDropper = new EyeDropper();
    } else {
        alert('This feature does not on your current browser version.')
      return false;
    }
  };

copyHex.addEventListener('click', ()=>{

    if(hexCode.value){
        //old way of copying
        hexCode.select();
        document.execCommand('copy');
        alert(`copied the hexcode ${hexCode.value}`);
    }else{
        alert('Select a color to copy the code!!')
    }
})

copyRgb.addEventListener('click', ()=>{

    if(rgbCode.value){
        //new way of copying
        rgbCode.select();
        navigator.clipboard.writeText(rgbCode.value);
        alert(`copied the rgbcode ${rgbCode.value}`);
    }else{
        alert('Select a color to copy the code!!')
    }
})

pickColor.addEventListener('click', pickNewColor)

imageInput.addEventListener('change', (e)=>{    
    const image = document.createElement('img');
    image.src =  URL.createObjectURL(e.target.files[0]);
    imageEl.innerHTML ='';
    imageEl.appendChild(image);
    console.log(image);
})

async function pickNewColor(){
    try {
        
        const color = await eyeDropper.open();
        const hexColorCode = color.sRGBHex;
        //converting hex to rgb

        let rgbArr = [];
        for(let i = 1; i < hexColorCode.length; i+= 2){
            rgbArr.push(parseInt(hexColorCode[i] + hexColorCode[i+1], 16));
        }
        const rgbColorCode = `rgb(${rgbArr})`;
        hexCode.value = hexColorCode;
        rgbCode.value = rgbColorCode;
        selectedColor.style.backgroundColor = hexColorCode;
        selectedColor.style.borderColor = '#ccc';

    } catch (error) {
        alert('something went wrong');
    }
}