import Pizza from "./Pizza";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];
export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi
            beatae excepturi magni enim officia maiores quod odio nostrum
            impedit, fugit magnam debitis! Omnis officia dolorum nostrum neque
            fugit suscipit
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our Menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        image="images/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        image="images/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        image="images/margherita.jpg"
        price={10}
      /> */}
    </main>
  );
}
