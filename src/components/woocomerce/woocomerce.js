import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_eebe0c1e0336f00dbe4c44103a28284d72b3ce2b";
const cs = "cs_647e67cece3d822426a5744397838cbe2c96a22f";
const baseURL = "http://woocommerce.local/wp-json";

const Woocommerce = {

    getProducts: () => {
        return makeRequest("/wc/v3/products");
    },
    getProductByID: id => {
        return makeRequest("/wc/v3/products/" + id);
    }
};

function makeRequest(endpoint, method = "GET") {
    const oauth = getOauth();

    const requestData = {
        url: baseURL + endpoint,
        method
    };

    const requestHTTP =
        requestData.url + "?" + jQuery.param(oauth.authorize(requestData));

    return axios.get(requestHTTP);
}

function getOauth() {
    return Oauth({
        consumer: {
            key: ck,
            secret: cs
        },
        signature_method: "HMAC-SHA1",
        hash_function: function (base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
        }
    });
}

export default Woocommerce;