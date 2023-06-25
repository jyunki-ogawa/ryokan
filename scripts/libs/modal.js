class Modal {
    constructor(cover, openTrigger, closeTrigger) {
      this.DOM = {};
      // this.DOM.body = document.getElementsByTagName('body');
      this.DOM.container = document.querySelector("#global-container");
      this.DOM.cover = document.querySelector(cover);
      this.DOM.openTrigger = document.querySelectorAll(openTrigger);
      this.DOM.closeTrigger = document.querySelector(closeTrigger);
      this.eventType = this._getEventType();
      this._addEvent();
    }
  
    _getEventType() {
      const isTouchCapable = "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
  
      return isTouchCapable ? "touchstart" : "click";
    }
  
    _toggle() {
      this.DOM.container.classList.toggle('modal-open');
    }
  
    _addEvent() {
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        // this.DOM.openTrigger.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.openTrigger.forEach(trigger => trigger.addEventListener('click', this._toggle.bind(this)));
        this.DOM.closeTrigger.addEventListener(this.eventType, this._toggle.bind(this));
    }
  }
  