
function grid () {

    let b = document.getElementById("count").value;
    let c = b * b;

        for (i=0; i < c; i++) {

            var block = document.createElement('div');
            block.className = "block";
            block.setAttribute('onmouseover', 'color(this)');
            document.getElementById('container').appendChild(block);
        
            let grid = document.getElementById('container');
            grid.setAttribute('style','grid-template-columns: repeat(' + b + ', auto)');
        }
}

function color (block){
    block.setAttribute('class', "permahover")
}


