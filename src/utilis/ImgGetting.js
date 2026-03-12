function getimg(item) {
    return new URL(`../assets/products/${item}`, import.meta.url).href;
}

export { getimg }