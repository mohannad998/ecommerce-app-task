// ProductModel.js

class ProductModel {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.permalink = data.permalink;
        this.dateCreated = new Date(data.date_created);
        this.dateModified = new Date(data.date_modified);
        this.type = data.type;
        this.status = data.status;
        this.featured = data.featured;
        this.catalogVisibility = data.catalog_visibility;
        this.description = data.description;
        this.shortDescription = data.short_description;
        this.sku = data.sku;
        this.price = data.price;
        this.regularPrice = data.regular_price;
        this.salePrice = data.sale_price;
        this.onSale = data.on_sale;
        // ... other properties you want to include

        // Process the images data
        if (Array.isArray(data.images)) {
            this.images = data.images.map(image => ({
                id: image.id,
                src: image.src,
                alt: image.alt,
                // ... other image properties
            }));
        } else {
            this.images = [];
        }

        // Process the categories data
        if (Array.isArray(data.categories)) {
            this.categories = data.categories.map(category => ({
                id: category.id,
                name: category.name,
                slug: category.slug,
                // ... other category properties
            }));
        } else {
            this.categories = [];
        }
    }
}

export default ProductModel;
