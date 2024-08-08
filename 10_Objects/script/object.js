let product = {
    company: 'XYZ',
    itemName: 'Earbuds',
    price: 2999,
    discountedPrice: `Rs ${discountedRupees = 1999}`,
    "price in dollar": `$${30}`,
    averageRating: null,
    totalRating: null,
    rating: {
        fiveStar: 10,
        fourStar: 9,
        threeStar: 3,
        twoStar: 2,
        oneStar: 3,
        showRating: function(){
            let totalRating = this.fiveStar + this.fourStar + this.threeStar + this.twoStar + this.oneStar;
            let averageRating = ((5 * this.fiveStar + 4 * this.fourStar + 3 * this.threeStar + 2 * this.twoStar + 1 * this.oneStar)/totalRating).toFixed(1);
            product.totalRating = totalRating;
            product.averageRating = averageRating;
            console.log('Total Ratings:', totalRating);
            console.log('Average Rating:', averageRating);
        },
    },
}

console.log(product.company);
console.log(product.price);
console.log(product.discountedPrice)
console.log(product['price in dollar']);
product.rating.showRating();

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
console.log(Object.assign(product));

console.log(typeof product);

product.price = 1599;
console.log(product.price);

delete product["price in dollar"];
console.log(product);

function showRating(rating){
    let totalRating = rating.fiveStar + rating.fourStar + rating.threeStar + rating.twoStar + rating.oneStar;
    let averageRating = ((5 * rating.fiveStar + 4 * rating.fourStar + 3 * rating.threeStar + 2 * rating.twoStar + 1 * rating.oneStar)/totalRating).toFixed(1);
    console.log('Total Ratings:', totalRating);
    console.log('Average Rating:', averageRating);
}

showRating(product.rating);