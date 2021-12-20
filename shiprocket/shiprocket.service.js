var axios = require('axios');
const queryString = require('query-string');


const getToken = (email='jaswanthtata@ymail.com', password='J@ultimate3') => {
    console.log(email, password);
    return new Promise((resolve, reject) => {
        axios
            .post('https://apiv2.shiprocket.in/v1/external/auth/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                resolve(response.data.token);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const getCourierCharges = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://apiv2.shiprocket.in/v1/external/orders/${orderId}/courier-charges`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

getToken().then(token => { 
 console.log(   queryString.stringify({
        orderId: 'ORDER_ID',}));
    console.log(token);
 
}).catch(err => { 

    console.log(err);
});