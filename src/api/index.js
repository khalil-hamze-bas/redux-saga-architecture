const URL_API = 'https://my-json-server.typicode.com/khalil-hamze-bas/dummy-data/';


export const fetchProducts = async () => {
    let response = await fetch(URL_API + 'products');
    let json = await response.json();
    console.log(response);
    return json;
};

export const login = async(user) => {
    console.log(user.email);
    return {
        email: user.email,
        password: user.password
    }
}