const renderProductList = (productArr) => {
  let contentHTML = "";
  productArr.forEach((value, index) => {
    contentHTML += `
      <li class="product">
                    <a href="#" class="product-link">
                      <span class="product-image">
                        <img src="${value.img}"
                        />
                      </span>
                      <span class="product-details">
                        <h3>${value.name}</h3>
                        <span class="qty-price">
                          <span class="qty">
                            <form action="#" name="qty-form" id="qty-form-1">
                              <button class="minus-button" id="minus-button-1">
                                -
                              </button>
                              <input
                                type="
                                ${value.type}"
                                id="qty-input-3"
                                class="qty-input"
                                step="1"
                                min="1"
                                max="1000"
                                name="qty-input"
                                value="1"
                                pattern="[0-9]*"
                                title="Quantity"
                                inputmode="numeric"
                              />
                              <button class="plus-button" id="plus-button-1">
                                +
                              </button>
                              <input
                                type="hidden"
                                name="item-price"
                                id="item-price-3"
                                value="12.00"
                              />
                            </form>
                          </span>
                          <span class="price">${value.price}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#remove" class="remove-button"
                      ><span onclick="deletePhone(${value.id})" class="remove-icon">X</span></a
                    >
                  </li>
      
      `;
  });
  document.getElementById("itemInCart").innerHTML = contentHTML;
};
