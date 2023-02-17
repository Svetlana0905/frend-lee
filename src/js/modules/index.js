import { html, slider, progress, priceInput, initialInput, percent } from './../helpers/elementsNodeList'

slider.oninput = function () {
  progress.style.width = (100 * (this.value - this.min)) / (this.max - this.min) + '%';
};

// logger (Full Logging System) 
function FLS(message) {
  setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

// Проверка браузера на поддержку .webp изображений 
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    html.classList.add(className)

    FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

// Форматирование для инпута
let formatter = new Intl.NumberFormat("ru");
let formatterCurrency = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0
})

function formatInput() {
  priceInput.value = formatter.format(3300000)

  priceInput.addEventListener('blur', function () {
    const val = priceInput.value.replace(/\D/g, '');
    if (priceInput.value && (val > 1500000 && val < 10000000)) {
      priceInput.value = formatter.format(val)
    }
    if (priceInput.value && (val < 1500000)) {
      priceInput.value = formatter.format(1500000)
    }
    if (priceInput.value && (val > 10000000)) {
      priceInput.value = formatter.format(10000000)
    }
  })
}
function formatInitial() {
  const valPrice = priceInput.value.replace(/\D/g, '');
  initialInput.value = formatterCurrency.format(Math.trunc(valPrice / 100 * 10))

  initialInput.addEventListener('blur', function () {
    const val = initialInput.value.replace(/\D/g, '');
    if (initialInput.value && (val > 1500000 && val < 10000000)) {
      initialInput.value = formatterCurrency.format(val)
    }
    if (initialInput.value && (val < 1500000)) {
      initialInput.value = formatterCurrency.format(1500000)
    }
    if (initialInput.value && (val > 10000000)) {
      initialInput.value = formatterCurrency.format(10000000)
    }
  })
  initialInput.addEventListener('input', function () {
    console.log(initialInput.value)
  })
}

export {
  FLS,
  isWebp,
  formatInput,
  formatInitial
}
