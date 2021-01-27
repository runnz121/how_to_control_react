import React, {useState} from 'react';
import Info from './info'

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
      
    </div>
  );
};

export default App;

//자바스크립트와 리엑트 비교 
//https://velog.io/@gwak2837/React-Component%EC%99%80-Javascript-%EB%B9%84%EA%B5%90