let product = {
    company: 'XYZ',
    itemName: 'Earbuds',
    price: 2999,
    discountedPrice: `Rs ${discountedRupees = 1999}`,
    "price in dollar": `$${30}`,
}

console.log(product.company);
console.log(product.price);
console.log(product.discountedPrice)
console.log(product['price in dollar']);

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
console.log(Object.assign(product));

console.log(typeof product);

product.price = 1599;
console.log(product.price);

delete product["price in dollar"];
console.log(product);