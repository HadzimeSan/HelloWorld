class CartDrawer extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    // Инициализация компонента
    this.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="close"]')) {
        this.hide();
      }
    });
  }

  // Метод для открытия drawer
  show() {
    this.classList.add('is-open');
    document.body.classList.add('overflow-hidden');
    document.dispatchEvent(new CustomEvent('cart-drawer:open'));
  }

  // Метод для закрытия drawer
  hide() {
    this.classList.remove('is-open');
    document.body.classList.remove('overflow-hidden');
    document.dispatchEvent(new CustomEvent('cart-drawer:close'));
  }

  // Метод для обновления содержимого
  async refreshContent() {
    try {
      const response = await fetch('/cart?view=drawer');
      if (!response.ok) throw new Error('Network response was not ok');
      const html = await response.text();
      this.innerHTML = html;
      this.init(); // Переинициализируем после обновления
    } catch (error) {
      console.error('Error refreshing cart:', error);
    }
  }
}

// Регистрируем компонент
if (!customElements.get('cart-drawer')) {
  customElements.define('cart-drawer', CartDrawer);
}