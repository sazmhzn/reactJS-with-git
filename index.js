/* ========================= Challenges ============================== */

function Header() {
  return (
    //This is JSX
    <div>
      <header>
        <nav>
          <img src="./React.webp" width="40px"></img>
        </nav>
      </header>
      <h1>Reasons I'm exited to learn React</h1>
          <ol>
            <li>It's popular library, so I'll able to fit in with the cool kids!</li>
          </ol>
      <footer>
        20222 surohan development. All rights reserved.
      </footer>
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
