// function Navbar() {
//   return (
//     <nav>
//       <div className="flex-content">
//         <div className="name">Navbar</div>
//         <div className="edit">
//           <ul>
//             <li>home</li>
//             <li>home</li>
//             <li>home</li>
//             <li>home</li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function MainComponents() {
//   return (
//     <main>
//       <h1>Main Content</h1>
//     </main>
//   );
// }


 const element = <h1 className="header"> This is JSX </h1>
 console.log(element);

const navBar = (
  <nav>
    <h1>
      Bos's Bistra
    </h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);



console.log(navBar);

 //append the code in root element -->
 ReactDOM.render(navBar, document.getElementById("root")); 
