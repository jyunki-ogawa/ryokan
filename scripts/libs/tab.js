class Tab {
  constructor(menu, content) {
    this.DOM = {};
    this.DOM.menus = document.querySelectorAll(menu);
    this.DOM.contents = document.querySelectorAll(content);
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable = "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
  }

  _addEvent() {
    this.DOM.menus.forEach(menu => menu.addEventListener('click', this._menuOpen.bind(this)));
  }

  _menuOpen(e) {
    const currentMenu = e.target;
    // カスタムデータ属性を使用してidを比較
    const currentContent = document.getElementById(currentMenu.dataset.id);

    this.DOM.menus.forEach(menu => {
      menu.classList.remove('is-open')
    });

    currentMenu.classList.add('is-open')

    // タブコンテンツを非アクティブにする
    this.DOM.contents.forEach(content => {
      content.classList.remove('is-open')
    });
    // 対象コンテンツ(指定したIDの要素があったら)を表示させる
    if (currentContent !== null) {
      currentContent.classList.add('is-open')
    };
  };
}