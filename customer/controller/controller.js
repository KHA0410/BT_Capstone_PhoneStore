btnBuy = (button) => {
  const productContainer = button.closest(".col");
  const img = productContainer.querySelector("img").src;
  const name = productContainer.querySelector("h4").textContent;
  const price = productContainer.querySelector("h5").textContent;
  const type = button.getAttribute("type");
  const screen = productContainer.querySelector("#screen").textContent;
  const backCamera = productContainer.querySelector("#backCamera").textContent;
  const frontCamera =
    productContainer.querySelector("#frontCamera").textContent;
  const desc = productContainer.querySelector("#desc").textContent;

  // Thực hiện các hành động với thông tin sản phẩm
  console.log("Thông tin sản phẩm:", {
    name,
    price,
    type,
    screen,
    backCamera,
    frontCamera,
    desc,
  });

  const phoneObject = new Phone(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  addProductToAPI(phoneObject);
};
// Hàm thêm sản phẩm vào API
const addProductToAPI = (phoneObject) => {
  axios({
    url: "https://6552135b5c69a77903297e99.mockapi.io/product",
    method: "POST",
    data: phoneObject,
  })
    .then((res) => {
      console.log("Đã thêm sản phẩm:", res.data);

      // Sau khi thêm thành công, cập nhật danh sách sản phẩm
      getProductList();
    })
    .catch((err) => {
      console.log("Lỗi khi thêm sản phẩm:", err);
    });
};

//Gọi API để lấy danh sách sản phẩm

const getProductList = () => {
  axios({
    url: "https://6552135b5c69a77903297e99.mockapi.io/product",
    method: "GET",
  })
    .then((res) => {
      renderProductList(res.data);
      console.log(res.data);
    })
    .catch((err) => {})
    .finally(() => {
      //Luôn luôn được thực thi dù thành công hay thất bại
      console.log("Call API XONG");
    });
};
getProductList();

//Chức năng xóa
const deletePhone = (phoneID) => {
  console.log("phoneID: ", phoneID);

  // Gọi API để xóa phone
  axios({
    url: `https://6552135b5c69a77903297e99.mockapi.io/product/${phoneID}`,
    method: "DELETE",
  })
    .then((res) => {
      console.log("res: ", res);
      getProductList();
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

//Cập nhật giỏ hàng
