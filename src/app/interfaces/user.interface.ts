export interface userInterface{
    _id: string,
    name: string,
    lastName: string,
    email: string,
    userID: number,
    role: string,
    password: string,
    address: {
        city: string,
        street: string,
    },
    cart: {
        items:[
            prodID: {
                _id: string,
                name:string,
                category: string,
                price: number,
                pictureUrl: string
            },
            qty: number,
            _id: string
        ],
        totalPrice: number
    }
} 