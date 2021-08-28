import { Collapse } from '../../../helpers';
const Question = ({ question, answer }) => {
  return (
    <li className='questions'>
      <button className='questionBtn' onClick={Collapse}>
        {question}
        <span className='questionBtnIcon'>+</span>
      </button>
      <div className='answers close'>
        <p className='answer-text'>{answer}</p>
      </div>
    </li>
  );
};

export default Question;
