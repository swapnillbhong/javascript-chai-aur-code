

const ramdomColor = function () {
    const hex = '0123456789ABCDEF'; //hexa color
    let color = '#'; //value of color
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalId
const startChangingColor = function(){

  if(!intervalId)
  {
    intervalId= setInterval(chnagebgColour,1000)
  }
  function chnagebgColour(){
     
    document.body.style
    .backgroundColor = ramdomColor();
  }
};
  

const stopChangingColor = function(){

  clearInterval(intervalId);
  intervalId = null;
  
};

document.getElementById('start')
  .addEventListener('click',startChangingColor);


  document.getElementById('stop')
  .addEventListener('click',stopChangingColor);  
  