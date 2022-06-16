/* ========================= Challenges ============================== */

function Header() {
  return (
    <header>
      <nav>
        <img src="./React.webp" width="40px"></img>
      </nav>
    </header>
  );
}

function Page() {
  return (
    //This is JSX
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div>
      <h1>Reasons I'm exited to learn React</h1>
      <ol>
        <li>
          It's popular library, so I'll able to fit in with the cool kids!
        </li>
      </ol>
    </div>
  );
}

function Footer() {
  return <footer>20222 surohan development. All rights reserved.</footer>;
}

ReactDOM.render(<Page />, document.getElementById("root"));
