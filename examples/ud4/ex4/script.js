window.onload = function() {
const notes = document.querySelectorAll('.ani-boxes > div')

for(var i=0;i<notes.length;i++){

  notes[i].addEventListener('mouseenter',function(e) { 
      const ani = e.target.dataset.ani;
      e.target.classList.add('animated', 'infinite', ani);
    window.setTimeout(function(){
      e.target.classList.remove('animated', 'infinite', ani);
    }, 3000);
  });
}

};