function importAll(r) {
    let images ={};
    r.keys().forEach((item, index) => {images[item.replace('./', '')] = r(item); });
    return images
}

export const FoodImages = importAll(require.context('./food', false, /\.(png|jpe?g|svg)$/));

export const BeverageImages = importAll(require.context('./beverage', false, /\.(png|jpe?g|svg)$/));

export const ProductImages = importAll(require.context('./product', false, /\.(png|jpe?g|svg)$/));