import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h2>Hello world</h2>
    </GlobalProvider>
  );
}

export default App;
