

const ramdomColor = function () {
    const hex = '0123456789ABCDEF'; //hexa color
    let color = '#'; //value of color
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color
  };

const startChangingColor = function(){
  document.body.style.backgroundColor = ramdomColor();
};
  

const stopChangingColor = function(){};

document.getElementById('start')
  .addEventListener('click',startChangingColor);


  document.getElementById('stop')
  .addEventListener('click',stopChangingColor);  
  