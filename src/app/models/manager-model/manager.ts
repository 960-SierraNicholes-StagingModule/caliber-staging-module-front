export class Manager {

    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number,firstName?: string,
    lastName?: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
