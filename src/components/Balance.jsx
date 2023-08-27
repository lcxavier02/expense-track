import { useGlobalState } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((total, amount) => (total += amount), 0);

  return (
    <div>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </div>
  );
}

export default Balance;
