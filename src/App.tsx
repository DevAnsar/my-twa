import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "./hooks/useCounterContract";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  return (
    <div className="App">
      <div className="container">
        <TonConnectButton />

        <div className="card">
          <b>Contract Address</b>
          <div className="Hint">{address}</div>
        </div>

        <div className="card">
          <b>Counter Value</b>
          <div>{value ?? "Loading..."}</div>
        </div>

        <button
          className={`Button ${connected ? "Active" : "Disabled"}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
