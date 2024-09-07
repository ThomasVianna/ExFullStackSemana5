import logo from "./logo.svg";
import "./App.css";

const textos = [
  { id: 1, texto: "Textos 1" },
  { id: 2, texto: "Textos 2" },
  { id: 3, texto: "Textos 3" },
  { id: 4, texto: "Textos 4" },
  { id: 5, texto: "Textos 5" },
];

function Item({ item }) {
  return <li>{item.texto}</li>;
}

function App() {
  return (
    <div>
      <ul>
        {textos.map((x) => (
          <Item key={x.id} item={x} />
        ))}
      </ul>
    </div>
  );
}

export default App;
