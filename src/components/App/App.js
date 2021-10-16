import React, { useState } from 'react';
import './App.css';
import CreditCardForm from '../CreditCardForm/CreditCardForm';
import CreditCardImage from '../CreditCardImage/CreditCardImage';

function App() {

  const [creditCardInfo, setCreditCardInfo] = useState({});

  const creditCardData = info => {
    setCreditCardInfo({
      numCard01: info.numCard01Ref,
      numCard02: info.numCard02Ref,
      numCard03: info.numCard03Ref,
      numCard04: info.numCard04Ref,
      nameCard: info.nameCardRef,
      monthCard: info.monthCardRef,
      yearCard: info.yearCardRef,
      ccvCard: info.ccvCardRef
    });
  }

  return (
    <div className="app">
      <CreditCardImage creditCardInfo={creditCardInfo} />
      <CreditCardForm creditCardData={creditCardData} />
    </div>
  );
}

export default App;
