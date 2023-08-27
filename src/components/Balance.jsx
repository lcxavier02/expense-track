import { useGlobalState } from "../context/GlobalContext";

function Balance() {
  const data = useGlobalState();

  return (
    <div>
      <h1>Balance</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default Balance;
