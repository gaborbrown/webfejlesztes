

document.getElementById('done').addEventListener('click', function(){
  var born = document.getElementById('born').value;
  var accuracy = document.getElementById('accuracy').value;
  var poweryes = document.getElementById('power').checked;
  var powerno = document.getElementById('power-no').checked;
  var spin = document.getElementById('spin').value;

  var racketImageUrl = decideRacketImageUrl(born, accuracy, poweryes, powerno, spin);

  var racketImageElem = document.getElementById('racket-image');
  racketImageElem.src = racketImageUrl;
  racketImageElem.style.display = 'block'; // Assuming the image is hidden by default
});

function decideRacketImageUrl(born, accuracy, poweryes, powerno, spin) {
  var imageUrl = '';
  var today = new Date();
  var givendate = new Date(born)
  var millisecondold = today-givendate
  var yearold = millisecondold / (1000 * 60 * 60 * 24 * 365)

  if (powerno && accuracy >= 7 && spin == 3 && yearold > 9) {
    imageUrl = '../media/power_pro.png';
  } 
  else if (powerno && accuracy >= 7 && spin < 3 && yearold > 9) {
    imageUrl = '../media/balance_pro.png';
  } 
  else if (poweryes && accuracy >= 7 && spin == 3 && yearold > 9) {
    imageUrl = '../media/balance_pro.png';
  } 
  else if (poweryes && accuracy >= 7 && spin < 3 && yearold > 9) {
    imageUrl = '../media/spin_pro.png';
  }
  else if (accuracy < 7 && accuracy >= 4 && spin == 3 && powerno && yearold > 9) {
    imageUrl = '../media/power_inter.png';
  }
  else if (accuracy < 7 && accuracy >= 4 && spin < 3 && powerno && yearold > 9) {
    imageUrl = '../media/balance_inter.png';
  }
  else if (accuracy < 7 && accuracy >= 4 && spin == 3 && poweryes && yearold > 9) {
    imageUrl = '../media/balance_inter.png';
  }
  else if (poweryes && accuracy < 7 && accuracy >= 4 && spin < 3 && yearold > 9) {
    imageUrl = '../media/spin_inter.png';
  }
  else if (accuracy < 4 && yearold > 9) {
    imageUrl = '../media/beginner.png';
  }
  else if (yearold <= 9) {
    imageUrl = '../media/junior.png';
  }
  else imageUrl = '../media/junior.png';

  return imageUrl;
}
