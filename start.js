const tll = new TimelineLite;
const headerH1 = document.querySelector('#big-title');
const headerH3 = document.querySelector('#medium-title');
const headerH5 = document.querySelector('#small-title');
tll.fromTo(headerH1, 1, { opacity: '0', y: '20px' }, { opacity: '1', y: '0' })
    .fromTo(headerH3, 1, { opacity: '0', y: '25px' }, { opacity: '1', y: '0' }, '-=1')
    .fromTo(headerH5, 1, { opacity: '0', y: '25px' }, { opacity: '1', y: '0' }, '-=1')