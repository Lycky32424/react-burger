import { checkResponse } from "../utils/check-response";

const BASE_URL = "https://norma.nomoreparties.space/api";

export const sendRequest = async ( url, options) => {
    const data = await fetch(`${BASE_URL}/${url}`, options).then(checkResponse);
    return data;
}

export const prerareRequest = async (url, options) => {
    try {
        const data = await sendRequest(url, options);
        return data;
    } catch (error) {
        throw new Error('Ошибка');
    }
}