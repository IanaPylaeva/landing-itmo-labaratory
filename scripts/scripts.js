const underSberLogo = document.getElementById('undersberlogo');
const bottomHuaweiLogo = document.getElementById('bottomhuaweilogo');

const zoneUnder = document.querySelector('.partners__logo-zone-under');
const zoneBottom = document.querySelector('.partners__logo-zone-bottom');

const gazpromlogo = document.getElementById('gazpromlogo');
const maillogo = document.getElementById('maillogo');



/*
function one(){
  if (window.innerWidth < 768) {
    underSberLogo.style.display = 'none';
    bottomHuaweiLogo.style.display = 'none';
  } else {
    underSberLogo.style.display = 'flex';
    bottomHuaweiLogo.style.display = 'flex';
  }
};
*/

/*
function one(){
  if (window.innerWidth < 768) {
    underSberLogo.remove();
    bottomHuaweiLogo.remove();
  } else {
    gazpromlogo.append(underSberLogo);
    zoneBottom.appendChild(bottomHuaweiLogo);
  }
}
*/

/*
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function one(){
  if (window.innerWidth < 768) {
    underSberLogo.remove();
    bottomHuaweiLogo.remove();
  } else {
    insertAfter(underSberLogo, maillogo);
    zoneBottom.appendChild(bottomHuaweiLogo);
  }
}

function one(){
  if (window.innerWidth < 768) {
    underSberLogo.remove();
    bottomHuaweiLogo.remove();
  } else {
    gazpromlogo.insertAdjacentHTML('afterend', <li><a href="https://www.sberbank.ru" id="undersberlogo" target="_blank" rel="noopener" class="partners__logo"><img src="./img/partners-logo/sberbank_logo.svg" alt="Сбербанк логотип"></a></li>);
    zoneBottom.appendChild(bottomHuaweiLogo);
  }
}
*/

/*

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}   


function one() {
  if (window.innerWidth > 768) {
    if (document.querySelectorAll('.partners__logo').length > 10) {
      return
    } else {
      const cloneSber = underSberLogo.cloneNode(true);
      insertAfter(cloneSber, maillogo);
    }
  }
}
*/

function one() {
  if (document.querySelectorAll('.partners__logo').length > 10) {
    return;
  } else {
    if (window.innerWidth > 768) {  
      const cloneSber = underSberLogo.cloneNode(true);
      zoneUnder.prepend(cloneSber);
    }
  }
}




window.addEventListener('resize', one);