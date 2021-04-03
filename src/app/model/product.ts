export class Product {
    id: number = 0;
    catId: any = 0;
    name: string = '';
    description: string = '';
    image: string = '';
    price: number = 0;
    salesPrice: number = 0;
    stock: number = 0;
    featured: boolean = false;
    featured2: string = '';
    active: boolean = true;

    constructor(properties?: Product) {
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || 0;
            this.name = properties.name || '';
            this.description = properties.description || '';
            this.image = properties.image || '';
            this.price = properties.price || 0;
            this.salesPrice = properties.salesPrice || 0;
            this.stock = properties.price || 0;
            this.featured = properties.featured || false;
            this.featured2 = properties.featured2 || '';
            this.active = properties.active || true;
        }
    }
}
