// import React, { Component } from 'react';
// import axios from './axios'

// export default class Products extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             products: []
//         };
//     }
//     getUsersData() {
//         axios
//             .get(`/products`, {})
//             .then(res => {
//                 const data = res.data
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     componentDidMount() {
//         this.getUsersData()
//     }
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }