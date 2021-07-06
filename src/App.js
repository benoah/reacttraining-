import "./App.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}´s kjøkken</h1>
    </header>
  );
}

function Main(props) {
  const imagerest =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={imagerest} alt="just a for testing" height={200} />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}
function Footer(props) {
  return (
    <section>
      <h4>Copyright {props.year} </h4>
    </section>
  );
}

const dishes = ["Hamburger", "Kebab", "Pizza", "Lasagne"];

const dishObject = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="BEN" />
      <Main adjective="Amazing Baby" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
