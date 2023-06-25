new MobileMenu;
new Tab('.js-tab-trigger', '.js-tab-target');
new Modal('.modal__cover', '.modal__open', '.modal__close');
flatpickr('#calender', {
  locale: 'ja',
  minDate: 'today',
  mode: "range"
});

const header = document.querySelector('.header');

const _navAnimation = function (el, inview) {
  if (inview) {
    header.classList.remove('triggered');
  } else {
    header.classList.add('triggered');
  }
}

const _inviewAnimation = function (el, inview) {
  if(inview) {
    el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
}

const so = new ScrollObserver('.nav-trigger', _navAnimation, { once: false, rootMargin: "100px" });
const so2 = new ScrollObserver('.appear', _inviewAnimation, { once: true, rootMargin: "-130px" });

