import questions from './data';
import Question from './Question';

const App = () => {
  return (
    <main>
      <div className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
          const { id, title, info } = question;
          return (
            <div key={id} className='question'>
              <Question title={title} info={info} />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default App;
