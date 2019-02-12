// https://reqres.in/

// "id": 2,
// "first_name": "Janet",
// "last_name": "Weaver",
// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"

export class Usuario {
    // public id: number;
    // public first_name: string;
    // public last_name: string;
    // public avatar: string;

    constructor (
    public id: number,
    public first_name: string,
    public last_name: string,
    public avatar: string
    ) {}
}
