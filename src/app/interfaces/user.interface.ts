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
            prodID: string,
            qty: number,
            _id: string
        ],
        totalPrice: number
    }
} 