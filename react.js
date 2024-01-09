// const p = document.createElement("p");
// p.innerText = "Hello World!";
// document.getElementById('root').appendChild(p);

// In Reactive way

// const myElement = React.createElement('div', null, 'Hello World!');
// const myElement = React.createElement('div', null, React.createElement('p', null, 'Hello World'));

// const myElement = (
//   <div class="card flex  items-center justify-center h-full">
//     <div class="single_card w-3/12 min-h-60 me-2 bg-slate-100">
//       <img
//         class="w-screen"
//         src="https://images.pexels.com/photos/1667282/pexels-photo-1667282.jpeg"
//       />
//       <div class="card_details flex">
//         <div class="flex">
//           <div class="p-4">
//             <h3>Beautiful Art</h3>
//             <h4>
//               Price: <span>500</span>
//             </h4>
//             <h4>
//               Quantity :{" "}
//               <span
//                 id="decrement"
//                 class="cursor-pointer inline-block align-middle text-center  ms-2 me-2 bg-teal-100 w-8 text-rose-600 font-bold text-base"
//               >
//                 {" "}
//                 -{" "}
//               </span>{" "}
//               <span id="quantity">1</span>
//               <span
//                 id="increment"
//                 class="cursor-pointer  align-middle text-center  ms-2 me-2 bg-teal-100 w-8 text-rose-600 font-bold text-base"
//               >
//                 {" "}
//                 +{" "}
//               </span>
//             </h4>
//           </div>
//         </div>
//         <div>
//           <h4 class="p-4">
//             Total : <span id="total-price">500</span>
//           </h4>
//         </div>
//       </div>
//     </div>
//   </div>
// );

function Card() {
    const [quantity, setQuantity] = React.useState(0);
    const baseCost = 500;

    function decreaseQuanity() {
        setQuantity(quantity -1)
    }
    function increaseQuanity() {
        setQuantity(quantity + 1)
    }
    return (
        <div class="card flex  items-center justify-center h-full">
          <div class="single_card w-3/12 min-h-60 me-2 bg-slate-100">
            <img
              class="w-screen"
              src="https://images.pexels.com/photos/1667282/pexels-photo-1667282.jpeg"
            />
            <div class="card_details flex">
              <div class="flex">
                <div class="p-4">
                  <h3>Beautiful Art</h3>
                  <h4>
                    Price: <span>{baseCost}</span>
                  </h4>
                  <h4>
                    Quantity :
                    <span
                        onClick={decreaseQuanity}
                      id="decrement"
                      class="cursor-pointer inline-block align-middle text-center  ms-2 me-2 bg-teal-100 w-8 text-rose-600 font-bold text-base"
                    >
                      -
                    </span>
                    <span id="quantity">{quantity}</span>
                    <span
                    onClick={increaseQuanity}
                      id="increment"
                      class="cursor-pointer  align-middle text-center  ms-2 me-2 bg-teal-100 w-8 text-rose-600 font-bold text-base"
                    >
                    
                      +
                    </span>
                  </h4>
                </div>
              </div>
              <div>
                <h4 class="p-4">
                  Total : <span id="total-price">{baseCost * quantity}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      );
}

ReactDOM.createRoot(document.getElementById("root")).render(
<>
<Card />
<Card />
</>


);
