export class User{
    firstName: string;
    lastName:string;
    age: number;
    isActive: boolean;

    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.isActive = false;
    }
}