
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
    block.setAttribute('class', "permahover");
}

var input = document.getElementById("count");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submitC").click();
  }
});

function resetContainer() {

    var elements = document.getElementsByClassName("block");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }

    var elements2 = document.getElementsByClassName("permahover");
    while (elements2.length > 0) {
      elements2[0].parentNode.removeChild(elements2[0]);
    }
  }
