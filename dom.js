import data from "./list.json" assert { type: "json" };
let container = document.getElementById("container");
container.style = "width : 100%; height : 100%;";
let body = document.body;

let dialogBox = document.createElement("dialog");
dialogBox.innerHTML = ``;
function openDialog() {
  dialogBox.setAttribute("open", "open");
  dialogBox.show();
  dialogBox.style.width = "60%";
  dialogBox.style.height = "300px";
  dialogBox.style.fontWeight = 400;
  dialogBox.style.fontSize = "22px";
  dialogBox.style.borderRadius = "10px";
  dialogBox.style.position = "fixed";
  dialogBox.style.top = "38%";
  dialogBox.style.border = "3px solid #ff5b6a";
  dialogBox.style.boxShadow = "rgba(0, 0, 0, 0.15) 1px 2px 5px 0px";
  
}

function closeDialog() {
  dialogBox.setAttribute("close", "close");
  dialogBox.close();
  dialogBox.style.width = "20px";
  dialogBox.style.height = "10px";

}
let x = document.createElement("button");
x.style.width = "25px";
x.style.height = "25px";
x.style.borderRadius = "50px";
x.style.color = "black";
x.innerHTML = "X";
x.style.display = "block";
x.style.float = "right";
x.addEventListener("click", closeDialog);

dialogBox.appendChild(x);

let payList = document.createElement("div");
payList.style.width = "auto";
payList.style.height = "auto";
payList.style.backgroundColor = "white";
payList.style.display = "grid";
payList.style.flexDirection = "row";
payList.style.lineBreak = "auto";
payList.style.alignItems = "center";
payList.style.columnGap = "3px";

dialogBox.appendChild(payList);

let dialogContent = document.createElement("div");
dialogContent.style.width = "97%";
dialogContent.style.height = "230px";
dialogContent.style.backgroundColor = "white";
dialogContent.style.justifyContent = "left";
dialogContent.style.columnGap = "10px";
dialogContent.style.display = "flex";
dialogContent.style.alignItems = "top";
dialogContent.style.padding = "10px";

dialogBox.appendChild(dialogContent);

let chargeButton = document.createElement("button");
chargeButton.innerHTML = "Thanh toán";
chargeButton.style.width = " 200px";
chargeButton.style.height = "40px";
chargeButton.style.backgroundColor = "#ff5b6a";
chargeButton.style.color = "white";
chargeButton.style.borderRadius = "5px";
chargeButton.style.display = "block";
chargeButton.style.float = "right";
chargeButton.style.justifyContent = "bottom";
chargeButton.style.fontSize = "20px";
chargeButton.style.border = "none";
chargeButton.addEventListener("click", () => {
  tinhTien();
});

dialogBox.appendChild(chargeButton);

//deleteButton
let deleteButton = document.createElement("button");
deleteButton.innerHTML = "Xóa đơn hàng";
deleteButton.style.width = " 200px";
deleteButton.style.height = "40px";
deleteButton.style.backgroundColor = "#ff5b6a";
deleteButton.style.color = "white";
deleteButton.style.borderRadius = "5px";
deleteButton.style.display = "block";
deleteButton.style.float = "right";
deleteButton.style.marginRight = "20px";
deleteButton.style.justifyContent = "bottom";
deleteButton.style.fontSize = "20px";
deleteButton.style.border = "none";

deleteButton.addEventListener("click", () => {
  dialogContent.innerHTML = "";
  alert("Đã xóa thành công các sản phẩm trong đơn hàng !!!");
  shoppingList = [];
});

dialogBox.appendChild(deleteButton);

//chức năng build navbar
function buildNavbar() {
  let navbar = document.createElement("div");
  navbar.style.boxSizing = "border-box";
  navbar.style.backgroundColor = "white";
  navbar.style.width = "100%";
  navbar.style.height = "100px";
  navbar.style.outlineColor = "rgb(20, 47, 67)";
  navbar.style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 1px 4px 0px";
  navbar.style.display = "block";

  let containerNav = document.createElement("div");
  containerNav.style.boxSizing = "border-box";
  containerNav.style.backgroundColor = "white";
  containerNav.style.width = "100%";
  containerNav.style.maxWidth = "1240px";
  containerNav.style.height = "100%";
  containerNav.style.marginLeft = "auto";
  containerNav.style.marginRight = "auto";
  containerNav.style.paddingRight = "15px";
  containerNav.style.paddingLeft = "15px";
  containerNav.style.display = "flex";
  containerNav.style.alignItems = "center";

  navbar.appendChild(containerNav);

  let logo = document.createElement("img");
  logo.src = "https://www.lotteria.vn/grs-static/images/lotteria_logo.svg";
  logo.style.paddingTop = "1px";
  logo.style.width = "70px";
  logo.style.height = "80px";
  logo.style.marginRight = "48px";
  logo.style.marginLeft = "40px";
  logo.style.paddingRight = "8px";

  containerNav.appendChild(logo);

  let options = ["Khuyến mãi", "Đặt hàng", "Sinh nhật", "Cửa hàng"];

  let optioncontainerNav = document.createElement("div");
  optioncontainerNav.style.boxSizing = "border-box";
  optioncontainerNav.style.backgroundColor = "white";
  optioncontainerNav.style.justifyContent = "space-between";
  optioncontainerNav.style.alignItems = "center";
  optioncontainerNav.style.width = "500px";
  optioncontainerNav.style.height = "inherit";
  optioncontainerNav.style.paddingTop = "40px";
  optioncontainerNav.style.textAlign = "left";
  for (let i = 0; i < options.length; i++) {
    let optionButton = document.createElement("button");
    optionButton.className = i;
    optionButton.innerHTML = options[i];
    optionButton.style.boxSizing = "border-box";
    optionButton.style.backgroundColor = "white";
    optionButton.style.border = "none";
    optionButton.style.color = "black";
    optionButton.style.cursor = "pointer";
    optionButton.style.textAlign = "center";
    optionButton.style.fontSize = "15px";
    optionButton.style.fontFamily = " Arial, Helvetica, sans-serif";
    optionButton.style.fontWeight = "bold";
    optionButton.style.paddingRight = "12px";
    optionButton.style.paddingLeft = "12px";
    optionButton.style.paddingBottom = "40px";
    optionButton.style.textTransform = "uppercase";

    optionButton.addEventListener(
      "mouseenter",
      (e) => {
        optionButton.style.color = "#ff5b6a";
        optionButton.style.borderBottom = "3px solid #ff5b6a";
      },
      false
    );

    optionButton.addEventListener(
      "mouseleave",
      (e) => {
        optionButton.style.color = "black";
        optionButton.style.borderBottom = "0px solid white";
      },
      false
    );

    optioncontainerNav.appendChild(optionButton);
  }
  containerNav.appendChild(optioncontainerNav);

  let right_containerNav = document.createElement("div");
  right_containerNav.style.boxSizing = "border-box";
  right_containerNav.style.backgroundColor = "white";
  right_containerNav.style.float = "right";
  right_containerNav.style.width = "300px";
  right_containerNav.style.height = "inherit";
  right_containerNav.style.display = "block";
  right_containerNav.style.paddingTop = "8px";
  right_containerNav.style.paddingLeft = "20px";
  right_containerNav.style.marginLeft = "auto";
  right_containerNav.style.marginRight = "30px";

  containerNav.appendChild(right_containerNav);

  //upper containerNav rightside
  let uppercontainerNav = document.createElement("div");
  uppercontainerNav.style.boxSizing = "border-box";
  uppercontainerNav.style.backgroundColor = "white";
  uppercontainerNav.style.display = "flex";
  uppercontainerNav.style.position = "relative";
  uppercontainerNav.style.textAlign = "left";
  uppercontainerNav.style.height = "40px";
  uppercontainerNav.style.paddingTop = "3px";

  let upperLanguages = document.createElement("img");
  upperLanguages.src = "image/Language.png";
  upperLanguages.style.width = "120px";
  upperLanguages.style.height = "28px";
  upperLanguages.style.marginRight = "10px";
  upperLanguages.style.borderRadius = "4px";

  uppercontainerNav.appendChild(upperLanguages);

  let upperDownload = document.createElement("img");
  upperDownload.src = "image/Download.png";
  upperDownload.style.width = "120px";
  upperDownload.style.height = "28px";
  upperLanguages.style.marginRight = "10px";
  upperLanguages.style.borderRadius = "4px";

  uppercontainerNav.appendChild(upperDownload);
  right_containerNav.appendChild(uppercontainerNav);

  //lower containerNav rightside
  let lowercontainerNav = document.createElement("div");
  lowercontainerNav.style.boxSizing = "border-box";
  lowercontainerNav.style.backgroundColor = "white";
  lowercontainerNav.style.display = "flex";
  lowercontainerNav.style.position = "relative";
  lowercontainerNav.style.width = "100%";
  lowercontainerNav.style.height = "40x";
  lowercontainerNav.style.position = "relative";
  lowercontainerNav.style.textAlign = "left";
  lowercontainerNav.style.marginRight = "10px";

  let lowerLocation = document.createElement("img");
  lowerLocation.src = "image/LocationLogo.png";
  lowerLocation.style.width = "50px";
  lowerLocation.style.height = "45px";
  lowerLocation.style.marginRight = "20px";
  lowerLocation.style.paddingBottom = "6px";

  lowercontainerNav.appendChild(lowerLocation);

  let lowerUser = document.createElement("img");
  lowerUser.src = "image/UserLogo.png";
  lowerUser.style.width = "50px";
  lowerUser.style.height = "45px";
  lowerUser.style.marginRight = "10px";
  lowerUser.style.paddingBottom = "6px";

  lowercontainerNav.appendChild(lowerUser);

  let lowerNotification = document.createElement("img");
  lowerNotification.src = "image/NotiLogo.png";
  lowerNotification.style.width = "50px";
  lowerNotification.style.height = "45px";
  lowerNotification.style.marginRight = "20px";
  lowerNotification.style.paddingBottom = "6px";

  lowercontainerNav.appendChild(lowerNotification);

  let lowerCart = document.createElement("img");
  lowerCart.src = "image/CartLogo.png";
  lowerCart.style.width = "50px";
  lowerCart.style.height = "45px";
  lowerCart.style.marginRight = "10px";
  lowerCart.style.paddingBottom = "6px";

  lowerCart.addEventListener("click", openDialog);

  lowercontainerNav.appendChild(lowerCart);

  right_containerNav.appendChild(lowercontainerNav);
  return navbar;
}
let newNavbar = buildNavbar();
container.appendChild(newNavbar);

let bodyContent = document.createElement("div");
bodyContent.style.width = "100%";
bodyContent.style.display = "flex";
bodyContent.style.flexDirection = "column";
bodyContent.style.justifyContent = "center";
bodyContent.style.alignItems = "center";
bodyContent.style.marginTop = "50px";

bodyContent.appendChild(dialogBox);

let newMainContainer = buildMainContainer();

bodyContent.appendChild(newMainContainer);
container.appendChild(bodyContent);

//build main container for menu items
function buildMainContainer() {
  let mainBox = document.createElement("div");
  mainBox.style.boxSizing = "border-box";
  mainBox.style.backgroundColor = "white";
  mainBox.style.width = "100%";
  mainBox.style.display = "block";
  mainBox.style.lineHeight = "22px";
  mainBox.style.textAlign = "left";
  mainBox.style.height = "100%";
  mainBox.style.paddingTop = "100px";

  //build main frame for menu items
  let mainFrame = document.createElement("div");
  mainFrame.style.boxSizing = "border-box";
  mainFrame.style.display = "block";
  mainFrame.style.height = "100px";
  mainFrame.style.width = "100%";
  mainFrame.style.paddingTop = "40px";
  mainFrame.style.paddingBottom = "40px";
  mainFrame.style.paddingLeft = "15px";
  mainFrame.style.paddingRight = "15px";

  mainBox.appendChild(mainFrame);

  //build menu items
  let cateMenuList = document.createElement("div");
  cateMenuList.style.boxSizing = "border-box";
  cateMenuList.style.display = "block";
  cateMenuList.style.marginBottom = "40px";
  cateMenuList.style.height = "185px";

  mainFrame.appendChild(cateMenuList);

  //build swipe menu container
  let swipeMenuList = document.createElement("div");
  swipeMenuList.style.height = "145px";
  swipeMenuList.style.paddingBottom = "40px";

  cateMenuList.appendChild(swipeMenuList);

  let swipeWrapper = document.createElement("div");
  swipeWrapper.style.transform = "translate3d(0px, 0px, 0px)";
  swipeWrapper.style.transitionDuration = "0ms";
  swipeWrapper.style.height = "145px";
  swipeWrapper.style.position = "relative";
  swipeWrapper.style.width = "100%";
  swipeWrapper.style.display = "flex";
  swipeWrapper.style.boxSizing = "content-box";

  swipeMenuList.appendChild(swipeWrapper);

  //build on-sale div
  let sale = document.createElement("div");
  sale.style.width = "96px";
  sale.style.height = "125px";
  sale.style.marginRight = "20px";

  swipeWrapper.appendChild(sale);

  let saleImage = document.createElement("img");
  saleImage.src = "image/Promotion-01_1.jpg";
  saleImage.style.width = "96px";
  saleImage.style.height = "94px";
  saleImage.style.borderRadius = "15px";

  sale.appendChild(saleImage);

  let saleText = document.createElement("span");
  saleText.style.color = "#142f43";
  saleText.style.display = "block";
  saleText.style.fontSize = "15px";
  saleText.style.fontFamily = "Roboto, Arial, sans-serif";
  saleText.style.fontWeight = "bold";
  saleText.style.textAlign = "center";
  saleText.textContent = "Khuyến Mãi";
  saleText.style.paddingTop = "5px";

  sale.appendChild(saleText);

  //build drink div
  let drink = document.createElement("div");
  drink.style.width = "96px";
  drink.style.height = "125px";
  drink.style.marginRight = "20px";

  swipeWrapper.appendChild(drink);

  let drinkImage = document.createElement("img");
  drinkImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/Promotion-10_1.jpg";
  drinkImage.style.width = "96px";
  drinkImage.style.height = "94px";
  drinkImage.style.borderRadius = "15px";

  drink.appendChild(drinkImage);

  let drinkText = document.createElement("span");
  drinkText.style.color = "#142f43";
  drinkText.style.display = "block";
  drinkText.style.fontSize = "15px";
  drinkText.style.fontFamily = "Roboto, Arial, sans-serif";
  drinkText.style.fontWeight = "bold";
  drinkText.style.textAlign = "center";
  drinkText.textContent = "Thức Uống";
  drinkText.style.paddingTop = "5px";

  drink.appendChild(drinkText);

  //build snack div
  let snack = document.createElement("div");
  snack.style.width = "96px";
  snack.style.height = "125px";
  snack.style.marginRight = "20px";

  swipeWrapper.appendChild(snack);

  let snackImage = document.createElement("img");
  snackImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG-Menu-09_1.jpg";
  snackImage.style.width = "96px";
  snackImage.style.height = "94px";
  snackImage.style.borderRadius = "15px";

  snack.appendChild(snackImage);

  let snackText = document.createElement("span");
  snackText.style.color = "#142f43";
  snackText.style.display = "block";
  snackText.style.fontSize = "15px";
  snackText.style.fontFamily = "Roboto, Arial, sans-serif";
  snackText.style.fontWeight = "bold";
  snackText.style.textAlign = "center";
  snackText.textContent = "Thức Ăn Nhẹ";
  snackText.style.paddingTop = "5px";

  snack.appendChild(snackText);

  //build rice-spaghetti div
  let rice = document.createElement("div");
  rice.style.width = "96px";
  rice.style.height = "125px";
  rice.style.marginRight = "20px";

  swipeWrapper.appendChild(rice);

  let riceImage = document.createElement("img");
  riceImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG_New-10_2.jpg";
  riceImage.style.width = "96px";
  riceImage.style.height = "94px";
  riceImage.style.borderRadius = "15px";

  rice.appendChild(riceImage);

  let riceText = document.createElement("span");
  riceText.style.color = "#142f43";
  riceText.style.display = "block";
  riceText.style.fontSize = "15px";
  riceText.style.fontFamily = "Roboto, Arial, sans-serif";
  riceText.style.fontWeight = "bold";
  riceText.style.textAlign = "center";
  riceText.textContent = "Cơm - Mì Ý";
  riceText.style.paddingTop = "5px";

  rice.appendChild(riceText);

  //build groupMeal div
  let groupMeal = document.createElement("div");
  groupMeal.style.width = "96px";
  groupMeal.style.height = "125px";
  groupMeal.style.marginRight = "20px";

  swipeWrapper.appendChild(groupMeal);

  let groupMealImage = document.createElement("img");
  groupMealImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG_New-05_2.jpg";
  groupMealImage.style.width = "96px";
  groupMealImage.style.height = "94px";
  groupMealImage.style.borderRadius = "15px";

  groupMeal.appendChild(groupMealImage);

  let groupMealText = document.createElement("span");
  groupMealText.style.color = "#142f43";
  groupMealText.style.display = "block";
  groupMealText.style.fontSize = "15px";
  groupMealText.style.fontFamily = "Roboto, Arial, sans-serif";
  groupMealText.style.fontWeight = "bold";
  groupMealText.style.textAlign = "center";
  groupMealText.textContent = "Phần Ăn Nhóm ";
  groupMealText.style.paddingTop = "5px";

  groupMeal.appendChild(groupMealText);

  //build Value div
  let value = document.createElement("div");
  value.style.width = "96px";
  value.style.height = "125px";
  value.style.marginRight = "20px";

  swipeWrapper.appendChild(value);

  let valueImage = document.createElement("img");
  valueImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG_New-03_3.jpg";
  valueImage.style.width = "96px";
  valueImage.style.height = "94px";
  valueImage.style.borderRadius = "15px";

  value.appendChild(valueImage);

  let valueText = document.createElement("span");
  valueText.style.color = "#142f43";
  valueText.style.display = "block";
  valueText.style.fontSize = "15px";
  valueText.style.fontFamily = "Roboto, Arial, sans-serif";
  valueText.style.fontWeight = "bold";
  valueText.style.textAlign = "center";
  valueText.textContent = "Value";
  valueText.style.paddingTop = "5px";

  value.appendChild(valueText);

  //build Combo div
  let foodcombo = document.createElement("div");
  foodcombo.style.width = "96px";
  foodcombo.style.height = "125px";
  foodcombo.style.marginRight = "20px";

  swipeWrapper.appendChild(foodcombo);

  let foodcomboImage = document.createElement("img");
  foodcomboImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG_New.jpeg";
  foodcomboImage.style.width = "96px";
  foodcomboImage.style.height = "94px";
  foodcomboImage.style.borderRadius = "15px";

  foodcombo.appendChild(foodcomboImage);

  let foodcomboText = document.createElement("span");
  foodcomboText.style.color = "#142f43";
  foodcomboText.style.display = "block";
  foodcomboText.style.fontSize = "15px";
  foodcomboText.style.fontFamily = "Roboto, Arial, sans-serif";
  foodcomboText.style.fontWeight = "bold";
  foodcomboText.style.textAlign = "center";
  foodcomboText.textContent = "Combo";
  foodcomboText.style.paddingTop = "5px";

  foodcombo.appendChild(foodcomboText);

  //build Gà Rán Phần div
  let chickenCombo = document.createElement("div");
  chickenCombo.style.width = "96px";
  chickenCombo.style.height = "125px";
  chickenCombo.style.marginRight = "20px";

  swipeWrapper.appendChild(chickenCombo);

  let chickenComboImage = document.createElement("img");
  chickenComboImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/Promotion-03_2.jpg";
  chickenComboImage.style.width = "96px";
  chickenComboImage.style.height = "94px";
  chickenComboImage.style.borderRadius = "15px";

  chickenCombo.appendChild(chickenComboImage);

  let chickenComboText = document.createElement("span");
  chickenComboText.style.color = "#142f43";
  chickenComboText.style.display = "block";
  chickenComboText.style.fontSize = "15px";
  chickenComboText.style.fontFamily = "Roboto, Arial, sans-serif";
  chickenComboText.style.fontWeight = "bold";
  chickenComboText.style.textAlign = "center";
  chickenComboText.textContent = "Gà Rán Phần";
  chickenComboText.style.paddingTop = "5px";

  chickenCombo.appendChild(chickenComboText);

  //build chicken div
  let chicken = document.createElement("div");
  chicken.style.width = "96px";
  chicken.style.height = "125px";
  chicken.style.marginRight = "20px";

  swipeWrapper.appendChild(chicken);
  let chickenImage = document.createElement("img");
  chickenImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG-Menu-Chicken-01-01_1.jpg";
  chickenImage.style.width = "96px";
  chickenImage.style.height = "94px";
  chickenImage.style.borderRadius = "15px";

  chicken.appendChild(chickenImage);
  let chickenText = document.createElement("span");
  chickenText.style.color = "#142f43";
  chickenText.style.display = "block";
  chickenText.style.fontSize = "15px";
  chickenText.style.fontFamily = "Roboto, Arial, sans-serif";
  chickenText.style.fontWeight = "bold";
  chickenText.style.textAlign = "center";
  chickenText.textContent = "Gà Rán";
  chickenText.style.paddingTop = "5px";

  chicken.appendChild(chickenText);

  //build burgerBar div
  let burgerBar = document.createElement("div");
  burgerBar.style.width = "96px";
  burgerBar.style.height = "125px";
  burgerBar.style.marginRight = "20px";

  swipeWrapper.appendChild(burgerBar);

  let burgerBarImage = document.createElement("img");
  burgerBarImage.src =
    "https://cdn.lotteria.vn/media/catalog/tmp/category/BG_New-02_6.jpg";
  burgerBarImage.style.width = "96px";
  burgerBarImage.style.height = "94px";
  burgerBarImage.style.borderRadius = "15px";
  burgerBarImage.style.border = "3px solid red";

  burgerBar.appendChild(burgerBarImage);

  let burgerBarText = document.createElement("span");
  burgerBarText.style.color = "#142f43";
  burgerBarText.style.display = "block";
  burgerBarText.style.fontSize = "15px";
  burgerBarText.style.fontFamily = "Roboto, Arial, sans-serif";
  burgerBarText.style.fontWeight = "bold";
  burgerBarText.style.textAlign = "center";
  burgerBarText.textContent = "Burger";
  burgerBarText.style.paddingTop = "5px";
  burgerBarText.style.color = "red";

  burgerBar.appendChild(burgerBarText);

  return cateMenuList;
}

class Burger {
  /**
   * @param {String} id
   * @param {number} stock
   * @param {string} name
   * @param {string} price
   * @param {string} image
   *
   */
  constructor(id, stock, name, price, image) {
    this.id = id;
    this.stock = stock;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

/**
 *
 * @param {Burger} burger
 * @returns
 */
function BuildItemCard(burger) {
  let ItemCard = document.createElement("div");
  Object.assign(ItemCard.style, {
    "font-family": "Roboto, Arial, sans-serif",
    "max-width": "250px",
    "font-size": "16px",
    borderRadius: "10px",
    margin: "0px 5px 10px",
    padding: "10px",
    "background-color": "white",
    height: "350px",
    "outline-color": "rgb(20,47,67)",
    "box-shadow": "rgba(0, 0, 0, 0.15) 1px 2px 5px 0px",
  });

  ItemCard.innerHTML = `<img src="${burger.image}" style="height: 180px; object-fit: cover;">
  <div>
  <h4 style="margin-bottom: 4px;">${burger.name} </h4>
  <p style="margin-top: 5px; color: #ff5b6a; font-size: 30px; font-weight: bold"]">${burger.price} đ</p>
  </div>`;

  let button = document.createElement("button");
  button.innerText = "Thêm vào giỏ hàng";
  button.style.width = "100%";
  button.style.height = "50px";
  button.style.borderRadius = "10px";
  button.style.border = "none";
  button.style.backgroundColor = "#ff5b6a";
  button.style.color = "white";
  button.style.marginTop = "5px";
  button.style.fontSize = "18px";
  button.style.fontWeight = "600";
  button.addEventListener("click", () => {
    addToCart(burger);
  });
  ItemCard.appendChild(button);
  container.appendChild(ItemCard);

  return ItemCard;
}

let listCard = document.createElement("div");
listCard.style.display = "grid";
listCard.style.gridGap = "1rem";
listCard.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
listCard.style.justifyContent = "center";

let ContainerCard = document.createElement("div");
ContainerCard.style.padding = "0px 100px 0px 100px";
ContainerCard.style.width = "70%";
ContainerCard.style.height = "80%";

for (let i = 0; i < data.Burgers.length; i++) {
  let burger = data.Burgers[i];
  let newItem = BuildItemCard(burger);
  listCard.appendChild(newItem);
  console.log(newItem);
}

ContainerCard.appendChild(listCard);
bodyContent.appendChild(ContainerCard);

//Chức năng thêm vào giỏ hàng và tính toán tổng tiền trong giỏ hàng
/** @type {Burger[]} */
let shoppingList = [];

/**
 *
 * @param {Burger} burger
 */
function addToCart(burger) {
    let pic = document.createElement("img");
    pic.src = burger.image;
    pic.style.width = "40px";
    pic.style.height = "40px";
    let itemCartName = document.createElement("p");
    itemCartName.innerHTML = burger.name;
    let itemCartPrice = document.createElement("p");
    itemCartPrice.innerHTML = burger.price;

  let index = shoppingList.findIndex((item) => {
    return item.id == burger.id;
  });
  if (index != -1) {
    shoppingList[index].quantity++;
    console.log(shoppingList);
    return;
  }
  shoppingList.push({
    id: burger.id,
    quantity: 1,
  });
  alert(
    "Bạn vừa thêm thành công sản phẩm " + burger.name + " vào giỏ hàng hiện tại"
  );
  dialogContent.appendChild(pic);
  dialogContent.appendChild(itemCartName);
  dialogContent.appendChild(itemCartPrice);
  console.log(shoppingList);
  payList.return;
}

function tinhTien() {
  if (shoppingList.length == 0) {
    alert("Chưa có món ăn nào trong giỏ hàng");
  } else {
    let total = 0;
    shoppingList.forEach((item) => {
      data.Burgers.forEach((food) => {
        if (food.id == item.id) {
          total += food.price * item.quantity;
        }
      });
    });
    alert("Tổng tiền là: " + total);
    alert("Bạn đã thành công thanh toán đơn hàng");
    shoppingList = [];
    dialogContent.innerHTML = "";
  }
}
