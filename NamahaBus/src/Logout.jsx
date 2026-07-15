// import { useEffect } from "react";
// import axios from "axios";
// export default function Logout() {
//     //    useEffect(() => {
//     //           axios.post("http://localhost:3000/logout")
//     //             .then((res) => {
//     //                 console.log(res);
//     //             })
//     //             .catch((err)=>{
//     //               console.log(err);
//     //           })
//     //      }, []);
//     useEffect(() => {
//         localStorage.clear();
//   axios.post(
//     "http://localhost:3000/logout",
//     {},
//     {
//       withCredentials: true,
//     }
//   )
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }, []);
//   return (
//     <>
//     <h1>You have logged out</h1>

//     </>
//   );
// }