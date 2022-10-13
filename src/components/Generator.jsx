import React, { useState, useRef, useEffect } from 'react';

const Generator = ({ setColorTheme }) => {
  const [lengthStr, setLengthStr] = useState(46);
  const [password, setPassword] = useState('');

  useEffect(() => {
    setPassword(generatorPassword(lengthStr));
  }, [lengthStr]);

  const generatorPassword = (length) => {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '!@#$%^&*()_=+';

    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomStr = '';
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * allChars.length);
      randomStr += allChars[random];
    }
    if (randomStr.length > 10) {
      setColorTheme('#ffd966');
    }
    if (randomStr.length < 10) {
      setColorTheme('#be0032');
    }
    if (randomStr.length > 18) {
      setColorTheme('#c0f0b0');
    }
    if (randomStr.length > 26) {
      setColorTheme('#76eaae');
    }
    return randomStr;
  };

  const inputEl = useRef(null);
  const currentValue = (e) => {
    setLengthStr(e.target.value);
  };
  const valueInput = (e) => {
    inputEl.current.style.left = e.target.value / 2 + '%';
  };

  const copyLink = (index) => {
    navigator.clipboard.writeText(index);
  };
  return (
    <div className="getarator">
      <div className="getarator__container">
        <div className="getarator__password">
          <div className="getarator__number">{password}</div>
          <div onClick={copyLink(password)} className="getarator__copy">
            <svg height={22} width={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" />
            </svg>
          </div>
        </div>
        <div className="getarator__length">
          <div className="getarator__length-title">Длиная пароля:</div>
          <div className="getarator__length-value">{lengthStr}</div>
        </div>
        <div className="getarator__range">
          <input
            onInput={(value) => valueInput(value)}
            onChange={(value) => currentValue(value)}
            type="range"
            id="range"
            min="6"
            max="46"
            steps="1"
          />
          <div ref={inputEl} id="selector"></div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
