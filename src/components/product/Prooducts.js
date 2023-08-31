import React, { Component } from 'react';
import axios from './axios'
import addOAuthInterceptor from 'axios-oauth-1.0a';
// import addOAuthInterceptor from "axios-oauth-1.0a";

export default class Prooducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    getUsersData() {
        // Create a client whose requests will be signed
        const client = axios.create();

        // Add interceptor that signs requests
        addOAuthInterceptor(client, {
            // OAuth consumer key and secret
            key: "ck_21211be4499521719d72014c41307e5b5c887d9b",
            secret: "cs_eab9b1f0cff0748dc68f609dc2fba2e67b28fe23",
            // HMAC-SHA1 and HMAC-SHA256 are supported
            algorithm: "HMAC-SHA1",
        });
        // axios.request({
        //     url: "/oauth/token",
        //     method: "get",
        //     baseURL: "http://woocommerce.local/wp-json/wc/v3/products/",
        //     auth: {
        //         username: "ck_21211be4499521719d72014c41307e5b5c887d9b", // This is the client_id
        //         password: "cs_eab9b1f0cff0748dc68f609dc2fba2e67b28fe23" // This is the client_secret
        //     },
        //     data: {
        //         "grant_type": "client_credentials",
        //         "scope": "public"
        //     }
        // }).then(respose => {
        //     console.log(respose);
        // });

    }
    componentDidMount() {
        this.getUsersData()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}