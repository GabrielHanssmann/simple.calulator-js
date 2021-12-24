let display = document.getElementById('display');

// transformar elementos divs en arrays
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            // caso tecla C que borre texto
            case 'C':
                display.innerText = '';
                break;
            // Caso tecla borrar con if statemnet para prevenir si llega a estar vacio el display    
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            // Caso tecla = EVAL hace que se tome el valor de lo que se introduce y que javascript lo lea haga la operacion que se ingreso
            case '=':
                // try hace que se intente la operacion y si no la logra hacer pasa a catch que se le puso que diga error en display
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!';
                }
                break;
            // introducir contenido a html display
            default:
                display.innerText += e.target.innerText;
        }
    })
})