// import React from "react";
//
// // Calls the children callback numTimes to produce a repeated component
// // function Repeat(props) {
// //     let items = [];
// //     for (let i = 0; i < props.numTimes; i++) {
// //         items.push(props.children(i));
// //     }
// //     return <div>{items}</div>;
// // }
//
// class Repeat extends React.Component<{numTimes: number}, {}> {
//     render() {
//         // let items = [];
//         // for (let i = 0; i < this.props.numTimes; i++) {
//         //     items.push(this.props.children(i));
//         // }
//         // return <div>{items}</div>;
//     }
// }
//
// function ListOfTenThings() {
//     return (
//         {/*<Repeat numTimes={10}>*/}
//             {/*{(index) => <div key={index}>This is item {index} in the list</div>}*/}
//         {/*</Repeat>*/}
//     );
// }
//
// export class SonElement extends React.Component<{}, {}> {
//     render() {
//         return <div>
//             <h1>子元素</h1>
//             <ListOfTenThings/>
//         </div>
//     }
// }