import ContentContainer from "../../components/ContentContainer/ContentContainer";
import Input from "../../components/Input/Input";
import "./RandomNumberPage.css";
import Switch from '../../components/Switch/Switch';
import Button from '../../components/Button/Button';
import Refresh from '../../assets/refresh.svg'
import { useState } from "react";

const RandomNumberPage = () => {

    const [isUnique, setIsUnique] = useState(false);

  return (
    <>
      <ContentContainer>
        <div className="result-display">
          <span className="big-number">7</span>
        </div>
      </ContentContainer>

      <ContentContainer className="number-settings-container">
        <div className="parameters-grid">
          <Input label="Минимум" type="number" placeholder="0" />
          <Input label="Максимум" type="number" placeholder="100" />
          <Input label="Количество" type="number" placeholder="1" />
          <Switch 
            label="Unique" 
            checked={isUnique} 
            onChange={setIsUnique} 
          />
        </div>

        <Button leftIcon={<img src={Refresh} alt="Refresh" />} rightIcon={<img src={Refresh} alt="Refresh" />} className="generate-button">
          Generate
        </Button>
      </ContentContainer>
    </>
  );
};

export default RandomNumberPage;
