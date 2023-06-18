const BASE_URL = "https://norma.nomoreparties.space/api";

export const sendRequest = async ( url, options) => {
    const data = await fetch(`${BASE_URL}/${url}`, options).then(res =>  checkResponse(res));
    return data;
}

export const checkResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(res.status);
    }
}

export const prerareRequest = async (url, options) => {
    try {
        const data = await sendRequest(url, options);
        return data;
    } catch (error) {
        throw new Error('Ошибка');
    }
}