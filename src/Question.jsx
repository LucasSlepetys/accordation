import { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/Fa';

function Question({ title, info }) {
  const [displayText, setDisplayText] = useState(false);

  return (
    <div>
      <header>
        <h5>{title}</h5>
        <button
          onClick={() => setDisplayText(!displayText)}
          className='question-btn'
        >
          {displayText ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {displayText && <p>{info}</p>}
    </div>
  );
}

export default Question;
