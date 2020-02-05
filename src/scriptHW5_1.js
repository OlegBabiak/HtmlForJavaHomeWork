    let currentColor=0;
    let color = ['red', 'yellow', 'green'];
        
document.querySelector('#box').onmouseover = function() {
        box.style.backgroundColor = color[currentColor];
        currentColor++;
    if (currentColor>2) currentColor = 0;    
}

document.querySelector('#box').onmouseout = function() {
        box.style.backgroundColor = 'purple';
}
