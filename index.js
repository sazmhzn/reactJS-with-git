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

// const section = (
//   <div>
//     <img src="./React.webp" width="40px"></img>
//     <h1> Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// console.log(section);

//append the code in root element -->
// ReactDOM.render(<TemporaryName />, document.getElementById("root"));

/*==================== compoments ========================*/

/* ========================= Challenges ============================== */

function Header() {
  return (
    <header>
      <nav>
        <img src="./React.webp" width="40px"></img>
        <h1>
          Reasons I'm exited to learn React
        </h1>
        <ol>
          It is popular
        </ol>
      </nav>
    </header>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
