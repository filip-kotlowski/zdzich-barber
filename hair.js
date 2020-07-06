const option1 = document.querySelector('#num1');
const option2 = document.querySelector('#num2');
const option3 = document.querySelector('#num3');
const option4 = document.querySelector('#num4');
const option5 = document.querySelector('#num5');
const option6 = document.querySelector('#num6');
const option7 = document.querySelector('#num7');
const option8 = document.querySelector('#num8');
const board = document.querySelector('#hair-game');
const model = document.querySelector('#model-image');
const firstRate = document.querySelector('#rate1');
const secondRate = document.querySelector('#rate2');
const thirdRate = document.querySelector('#rate3');
const fourthRate = document.querySelector('#rate4');
const closeButton = document.querySelector('#close-btn');
const reviev = document.querySelector('#reviev');
const firstImage = document.querySelector('#image1');
const secondImage = document.querySelector('#image2');
const thirdImage = document.querySelector('#image3');
option1.addEventListener('click', firstOption);
option2.addEventListener('click', secondOption);
option3.addEventListener('click', thirdOption);
option4.addEventListener('click', fourthOption);
option5.addEventListener('click', fifthOption);
option6.addEventListener('click', sixthOption);
option7.addEventListener('click', seventhOption);
option8.addEventListener('click', eightOption);
function startup(numJPG, firstrate, secondrate, thirdrate, fourthrate) {
    board.style.display = 'flex';
    model.style.backgroundImage = "url('./img/num" + numJPG + ".png'";
    firstImage.style.backgroundImage = "url('./img/hairstyles/num" + numJPG + ".3.png')";
    secondImage.style.backgroundImage = "url('./img/hairstyles/num" + numJPG + ".2.png')";
    thirdImage.style.backgroundImage = "url('./img/hairstyles/num" + numJPG + ".1.png')";

    const tl = new TimelineMax;
    tl.fromTo(firstRate, 2, { width: '0%' }, { width: firstrate + '%' })
        .fromTo(secondRate, 2, { width: '0%' }, { width: secondrate + '%' }, '=-2')
        .fromTo(thirdRate, 2, { width: '0%' }, { width: thirdrate + '%' }, '=-2')
        .fromTo(fourthRate, 2, { width: '0%' }, { width: fourthrate + '%' }, '=-2');
    closeButton.addEventListener('click', (e) => {
        board.style.display = 'none';
    })
}

function firstOption() {
    startup(1, 50, 60, 38, 49.33);
}
function secondOption() {
    startup(2, 80, 20, 43, 47.67);
}
function thirdOption() {
    startup(3, 40, 50, 55, 48.33);
}
function fourthOption() {
    startup(5, 50, 78, 90, 72.67);
}