console.log('funguju');

const shirt = document.querySelector('svg');

document.querySelector('.colors').innerHTML += `
<div class="color">
            <div class="color-box color-box--black"></div>
            <p class="color__name">černá</p>
          </div>
          <div class="color">
            <div class="color-box color-box--red"></div>
            <p class="color__name">červená</p>
          </div>
          <div class="color">
            <div class="color-box color-box--blue"></div>
            <p class="color__name">nebesky modrá</p>
          </div>`;

const colors = document.querySelectorAll('.color-box');

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', () => {
    shirt.style = `fill : ${getComputedStyle(colors[i]).backgroundColor}`;
  });
}

const productOrder = () => {
  const productContainerElm = document.querySelector('.product');
  productContainerElm.textContent = 'Objednáno!';
};

const orderIt = document.querySelector('#product__order');
orderIt.addEventListener('click', productOrder);
