export const ADD = 'Agregar';
export const REMOVE = 'Remover';


export function addToCart(item) {
    return {
        type : ADD,
        item                                
    }
}

export function removeFromCart(item) {
    return {
        type : REMOVE,
        item
    }
}

