export class Contact {
    _id: string;
    first_name: string;
    last_name: string;
    phone: string;

    constructor(first_name:string, last_name:string, phone:string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
    }
}
