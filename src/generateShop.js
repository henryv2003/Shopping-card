function generateShop() {
  return (shop.innerHTML = showItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `<div id=product-id-${id} class="item">
        <div  class="item">
          <img width="215" src=${img} alt="" />
          <div class="details">
            <h3>${name}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id= ${id} class="quantity">0</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
}
