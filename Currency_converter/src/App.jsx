import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertCurrency = async () => {
    if (!amount || amount <= 0) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      const data = await response.json();
      const rate = data.rates[to];

      if (rate) {
        setResult((parseFloat(amount) * rate).toFixed(2));
      }
    } catch (error) {
      console.error("Failed to fetch exchange rates:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      
      <input
        type="number"
        placeholder="Enter the amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="input">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <span> to </span>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <button onClick={convertCurrency}>Convert </button>

      {result && (
        <h2>
          {amount} {from} = {result} {to}
        </h2>
      )}
    </div>
  );
}

export default App;