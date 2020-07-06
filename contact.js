const map = document.querySelector('#left-bubble');
const mapParagraph = document.querySelector('#left-paragraph');
const bubbleOptions = document.querySelector('#big-bubble');
const navigation = document.querySelector('nav');
const corpoMap = document.querySelector('#company-map');
const exitButton = document.querySelector('#exit');
map.addEventListener('mouseover', (e) => {
    map.style.width = '15%';
    mapParagraph.innerHTML = 'Lokalizacja';
})
map.addEventListener('mouseout', (e) => {
    map.style.width = '6%';
    mapParagraph.innerHTML = '';
});
map.addEventListener('click', (e) => {
    bubbleOptions.style.display = 'flex';
    corpoMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5083.815811554903!2d18.116731626460872!3d50.42418746788678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47110f7c29a4fd3d%3A0xb6fcb7f922a748ea!2sGaleria%20Ewa!5e0!3m2!1spl!2spl!4v1584530287059!5m2!1spl!2spl" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    document.body.style.overflow = 'hidden';
    navigation.style.display = 'none';
})
exitButton.addEventListener('click', (e) => {
    bubbleOptions.style.display = 'none';
    document.body.style.overflowY = 'scroll';
    navigation.style.display = 'flex';
})