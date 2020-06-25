export const preperProductsList = (products, sectionName, filters) => {
    let productsFilteredBySectionName = products.filter(product => product.section === sectionName); // wyślij tylko te produkty które znajdują się w danej sekcji

    if(!filters.length) {
        return productsFilteredBySectionName
    }

    // Jeżeli są ustawione filtry wyświetl tylko te produkty które znajdują się w danych sklepach
    if(filters.length > 0) {
        const productsFilteredBySectionNameAndShops = productsFilteredBySectionName.filter(product => {
            return product.shops.some(shop => filters.indexOf(shop) >= 0)
        })

        return productsFilteredBySectionNameAndShops
    }
}