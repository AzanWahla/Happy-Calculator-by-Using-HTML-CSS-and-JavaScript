let string="";
let buttons=document.querySelectorAll('.button')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try{
                string=eval(string)
            document.querySelector('input').value=string
            }catch{
                document.querySelector('input').value="Error"
            }
            
        }

        else if(e.target.innerHTML=='C'){
            string=''
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='x²'){
            if (string !== '') {
            let number = parseFloat(string);
            string = (number * number).toString();
            }
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='Del'){
            string = string.slice(0, -1); 
            document.querySelector('input').value=string;
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;

        }
    })  
})

let btn=document.getElementById("btn")
let isWhiteTheme=true;
btn.addEventListener('click',()=>{
    if(isWhiteTheme){
      
    document.body.style.backgroundColor="aquamarine";
    document.querySelector('.main').style.backgroundColor="blue"

    }
    else{

        document.body.style.backgroundColor="white";
        document.querySelector('.main').style.backgroundColor="yellow"
    
    }
        isWhiteTheme = !isWhiteTheme;
})