export const checkResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(res.status);
    }
}