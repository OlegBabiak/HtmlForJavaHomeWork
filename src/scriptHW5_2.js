window.onload = function(){
    let text1 = 'У мене є секрет!';
    let text2 = 'Хочеш знати який?';
    let text3 = 'А я тобі не скажу!';    
    let box = document.getElementById('boxId');
    box.append(text1);
        
    box.onmouseover = () => {
        box.style.backgroundColor = 'yellow';
        box.style.color = 'blue';
        box.style.border = '10px ridge green';
        box.innerHTML = '';
        box.append(text2);
    }
    
    box.onmousedown = () => {
        box.style.backgroundColor = 'black';
        box.style.color = 'white';
        box.style.border = '10px ridge yellow';
        box.innerText = '';
        box.append(text3);
        
        document.body.onmousedown = document.body.onmouseup = function(e){
            this.style.cursor = (e||event).type === "mousedown" ? "wait":"default";
        }    
    }
    
    box.onmouseleave = () => {
        box.style.backgroundColor = 'purple';
        box.style.color = 'blue';
        box.style.border = '10px ridge orange';
        box.innerHTML = '';
        box.append(text1);
    }
}
 