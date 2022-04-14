const underSberLogo = document.getElementById('undersberlogo');
const bottomHuaweiLogo = document.getElementById('bottomhuaweilogo');

function one(){
  if (window.innerWidth < 850) {
    underSberLogo.style.display = 'none';
    bottomHuaweiLogo.style.display = 'none';
  } else {
    underSberLogo.style.display = 'flex';
    bottomHuaweiLogo.style.display = 'flex';
  }
};

window.addEventListener('resize', one);