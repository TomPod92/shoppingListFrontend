export const preperProductsList = (products, sectionName, filters) => {
    let productsFilteredBySectionName = products.filter(product => product.section === sectionName); // wyślij tylko te produkty które znajdują się w danej sekcji

    if(!filters.length) {
        return productsFilteredBySectionName
    }

    // Jeżeli są ustawione filtry wyświetl tylko te produkty które znajdują się w danych sklepach
    if (filters.length > 0) {
        return productsFilteredBySectionName.filter((product) => product.shops.some(shop => filters.includes(shop)))
    }
}