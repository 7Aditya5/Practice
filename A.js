let cont = document.getElementById("container");

    document.addEventListener("keypress", function onPress(event) {
      if (event.key === " "){
        let style = window.getComputedStyle(cont, null).getPropertyValue('font-size');
        let currentSize = parseInt(style);
        console.log(currentSize);
        cont.style.fontSize = (currentSize * 2)+'px';
        //console.log(cont.style.fontSize);
      }
      if(event.key === 'r'){
        cont.style.color = "red";
      }
  });
  
