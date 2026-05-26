import ContentContainer from "../../components/ContentContainer/ContentContainer";
import Input from "../../components/Input/Input";
import "./RandomNumberPage.css";
import Switch from "../../components/Switch/Switch";
import Button from "../../components/Button/Button";
import Refresh from "../../assets/Refresh.svg";
import { useState, useEffect } from "react";

const RandomNumberPage = () => {
  const [isUnique, setIsUnique] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);

  const [currentResult, setCurrentResult] = useState<number | string>("1");
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("randomNumberHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const HandleGenerate = () => {
    const range = max - min + 1;

    if (min >= max) {
      alert("Максимум должен быть больше минимума");
      return;
    }

    if (isUnique && count > range) {
      alert("Недостаточно уникальных чисел в заданном диапазоне");
      return;
    }

    let counter = 0;
  const interval = setInterval(() => {
    setCurrentResult(Math.floor(Math.random() * range) + min);
    counter++;

    if (counter > 10) {
      clearInterval(interval);
      
      let newNumbers: number[] = [];
      while (newNumbers.length < count) {
        const num = Math.floor(Math.random() * range) + min;
        if (isUnique) {
          if (!newNumbers.includes(num)) newNumbers.push(num);
        } else {
          newNumbers.push(num);
        }
      }

      const finalStr = newNumbers.join(", ");
      setCurrentResult(finalStr);

      const updatedHistory = [...newNumbers, ...history].slice(0, 10);
      setHistory(updatedHistory);
      localStorage.setItem("randomNumberHistory", JSON.stringify(updatedHistory));
    }
  }, 40);
};

  return (
    <>
      <ContentContainer>
        <div className="result-display">
          <span className="big-number">{currentResult}</span>
        </div>
      </ContentContainer>

      <ContentContainer className="number-settings-container">
        <div className="parameters-grid">
          <Input
            label="Минимум"
            type="number"
            placeholder="0"
            className="min-number"
            onChange={(e) => setMin(Number(e.target.value))}
          />
          <Input
            label="Максимум"
            type="number"
            placeholder="100"
            className="max-number"
            onChange={(e) => setMax(Number(e.target.value))}
          />
          <Input
            label="Количество"
            type="number"
            placeholder="1"
            className="count-number"
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <Switch label="Unique" checked={isUnique} onChange={setIsUnique} />
        </div>

        <Button
          leftIcon={<img src={Refresh} alt="Refresh" />}
          rightIcon={<img src={Refresh} alt="Refresh" />}
          className="generate-button"
          onClick={HandleGenerate}
        >
          Сгенерировать
        </Button>
      </ContentContainer>

      {history.length > 0 && (
        <ContentContainer
          className="history-number-container"
          title="Последние результаты"
        >
          <div className="history-list">
            {history.map((num, index) => (
              <div key={index} className="history-number-item">
                {num}
              </div>
            ))}
          </div>
        </ContentContainer>
      )}
    </>
  );
};

export default RandomNumberPage;
