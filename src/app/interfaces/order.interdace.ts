export interface orderInterface {
    _id: string,
    email: string,
    date: string,
    city: string,
    street: string,
    cart:{
        items:[
            prodID:string,
            qty: number,
            _id: string
        ],
        totalPrice: number
    }
}