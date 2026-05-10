import "./RandomListPage.css";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import Button from "../../components/Button/Button";
import Refresh from "../../assets/refresh.svg";
import { useState, useRef } from "react";
import CupIcon from "../../assets/cup.svg";

const RandomListPage = () => {
  const [listText, setListText] = useState("");
  const [winnerCount, setWinnerCount] = useState(1);
  const [results, setResult] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFindWinners = () => {
    const items = listText
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (items.length === 0) {
      alert("Пожалуйста, введите хотя бы один элемент в список.");
      return;
    }

    if (winnerCount > items.length || winnerCount <= 0) {
      alert(
        "Количество победителей не может быть больше или меньше списка участников",
      );
      return;
    }

    const shuffled = [...items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, winnerCount);

    setResult(selected);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if(file.type !== 'text/plain') {
        alert('Пожалуйста, выберите текстовый файл (.txt)')
        return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
        const content = e.target?.result
        if(typeof content === 'string') {
            setListText(content)
        }
    }

    reader.readAsText(file)

    event.target.value = ''
  }

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <ContentContainer>
        <div className="result-display">
          {results.length > 0 ? (
            <div className="results-wrapper">
              {results.length === 1 ? (
                <span className="result-list">{results[0]}</span>
              ) : (
                <div className="history-list">
                  {results.map((res, i) => (
                    <div key={i} className="history-number-item">
                      {res}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="empty-state">
              <img src={CupIcon} alt="Cup" className="cup-icon" />
              <p className="empty-text">
                Заполните список и нажмите кнопку, <br />
                чтобы определить победителя
              </p>
            </div>
          )}
        </div>
      </ContentContainer>

      <ContentContainer className="list-settings-container">
        <div className="list-header">
          <h2 className="list-title">Случайный выбор из списка</h2>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            style={{ display: 'none' }} 
            accept=".txt"
          />
          <button className="secondary-action-btn" onClick={triggerFileSelect}>Загрузить файл</button>
        </div>

        <div className="list-main-area">
          <textarea
            className="custom-textarea"
            placeholder="Введите каждый элемент с новой строки..."
            value={listText}
            onChange={(e) => setListText(e.target.value)}
          />

          <div className="list-controls-row">
            <div className="winner-count-inline">
              <span>Количество победителей:</span>
              <input
                type="number"
                className="inline-number-input"
                value={winnerCount}
                onChange={(e) => setWinnerCount(Number(e.target.value))}
              />
            </div>
            <button
              className="clear-list-btn secondary-action-btn"
              onClick={() => setListText("")}
            >
              Очистить список
            </button>
          </div>
        </div>

        <Button
          leftIcon={<img src={Refresh} alt="Refresh" />}
          rightIcon={<img src={Refresh} alt="Refresh" />}
          className="generate-button"
          onClick={handleFindWinners}
        >
          Найти победителя
        </Button>
      </ContentContainer>
    </>
  );
};

export default RandomListPage;
