const tl = new TimelineLite;
const image1 = document.querySelector('#photo1');
const image2 = document.querySelector('#photo2');
const image3 = document.querySelector('#photo3');
function banner() {
    tl.fromTo(image1, 3, {
        display: 'none',
        width: '0%'
    }, {
        display: 'flex',
        width: '100%',
        ease: Power2.easeOut
    })
        .fromTo(image1, 3, {
            width: '100%'
        }, {
            width: '0%',
            ease: Power2.easeOut
        }, '+=4')
        .fromTo(image2, 3, {
            display: 'none',
            width: '0%'
        }, {
            display: 'flex',
            width: '100%',
            ease: Power2.easeOut
        })
        .fromTo(image2, 3, {
            width: '100%'
        }, {
            width: '0%',
            ease: Power2.easeOut
        }, '+=4')
        .fromTo(image3, 3, {
            display: 'none',
            width: '0%'
        }, {
            display: 'flex',
            width: '100%',
            ease: Power2.easeOut
        })
        .fromTo(image3, 3, {
            width: '100%'
        }, {
            width: '0%',
            ease: Power2.easeOut
        }, '+=4')

}
banner();
setInterval(banner, 32000)