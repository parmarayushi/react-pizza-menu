export default function Order({ closeHours }) {
  return (
    <div className="order">
      <p>We are open until {closeHours}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}
