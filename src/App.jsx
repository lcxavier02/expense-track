import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h2>Hello world</h2>
    </GlobalProvider>
  );
}

export default App;
