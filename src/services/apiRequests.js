const apiLinc = "https://norma.nomoreparties.space/api/ingredients";
const orderPostLinc = "https://norma.nomoreparties.space/api/orders";

export const getIngredientsData = async () => {
    try {
        const data = await fetch(apiLinc).then(res => {if (res.ok) {
                return res.json(); 
            } else { return Promise.reject(res.status) }
        })
        return data.data;
    } catch (error) {
        throw new Error('Ошибка');
    }
}

export const postOrderRequest = async (ingredients) => {
    try {
        const res = await fetch(orderPostLinc, ingredients).then(res => {
            if(res.ok) {
                return res.json();
            } else { return Promise.reject(res.status) }
        })
        return res;
    } catch (error) {
        throw new Error('Ошибка')
    }
}