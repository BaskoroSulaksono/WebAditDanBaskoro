const tombol = document.querySelectorAll('#timer ul li');
const timer = document.querySelector('.timer');

tombol[0].style.backgroundColor = '#282A35';
tombol[0].style.color = '#FFF';

for (let i = 0; i < tombol.length; i++) {
  tombol[i].addEventListener('click', function() {
    if (i == 0) {
      timer.style.backgroundColor = '#FFC0C7';
            for (let x of tombol) {
              x.style.backgroundColor = '#FFC0C7';
              x.style.color = '#282A35'
            }
      tombol[i].style.backgroundColor = '#282A35';
      tombol[i].style.color = '#FFF';
    }
    
    else if (i == 1) {
      timer.style.backgroundColor = '#96d4d4';
            for (let x of tombol) {
              x.style.backgroundColor = '#96d4d4';
              x.style.color = '#282A35'
            }
      tombol[i].style.backgroundColor = '#282A35';
      tombol[i].style.color = '#FFF';
    } 
    
    else {
      timer.style.backgroundColor = '#F3ECEA';
            for (let x of tombol) {
              x.style.backgroundColor = '#F3ECEA';
              x.style.color = '#282A35'
            }
      tombol[i].style.backgroundColor = '#282A35';
      tombol[i].style.color = '#FFF';
    }
  });
}




