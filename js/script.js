import KEYS from "../assests/keys.js";

const $d = document;
const $products = $d.getElementById("products");
const $template = $d.getElementById("products-template").content;
const $fragment = $d.createDocumentFragment();
const options = { Headers: { Authorization: `Bearer ${KEYS.secret}` } };

let products, prices;

Promise.all([
  fetch("https://api.stripe.com/v1/products", options),
  fetch("https://api.stripe.com/v1/prices", options),
]).then((res) => console.log(res));
