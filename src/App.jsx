import { useEffect, useState } from "react";
import { fetchBySymbolOrName } from "./services/alphaVantageApi";
import Input from "./components/Input/Input";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const NotiflixCfg = {
  position: "center-top",
  width: "400px",
  timeout: 4000,
  messageMaxLength: "600",
  backOverlay: true,
};

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    if (inputVal.trim()) {
      setSuggestions([]);
      setLoading(true);

      // Debounce fetching
      const timerId = setTimeout(() => {
        fetchBySymbolOrName(inputVal, controller.signal)
          .then(setSuggestions)
          .catch((error) => {
            Notify.failure(
              `Failed to fetch data. ${error.message}`,
              NotiflixCfg
            );
            setSuggestions([]);
          })
          .finally(setLoading(false));
      }, 800);

      return () => {
        clearTimeout(timerId);
        controller.abort();
      };
    } else {
      setSuggestions([]);
    }
  }, [inputVal]);

  const handleClearInputVal = () => {
    setInputVal("");
    setSuggestions([]);
    setFinancialData(null);
  };

  return (
    <Container>
      <Heading level={1} title="Stock financial data visualizer" />
      <div>
        <Input
          type="text"
          value={inputVal}
          placeholder="Enter Stock Symbol or Company Name"
          onChange={(e) => {
            setInputVal(e.target.value.replace(/\s+/g, " ")); // replace double whitespace
          }}
          clearInputVal={handleClearInputVal}
        />
      </div>
    </Container>
  );
};

export default App;
