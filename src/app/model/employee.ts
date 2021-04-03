export class Employee {
    id: number = 0;
    name: string = '';
    position: string = '';
    email: string = '';
    phone: string = '';
    image: string = '';
    favoriteDestination: string = '';

    constructor(properties?: Employee) {
        this.id = properties.id || 0;
        this.name = properties.name || '';
        this.position = properties.position || '';
        this.email = properties.email || '';
        this.phone = properties.phone || '';
        this.image = properties.image || '';
        this.favoriteDestination = properties.favoriteDestination || '';
    }
}
