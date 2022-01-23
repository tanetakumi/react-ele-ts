import ReactDOM from 'react-dom';
import { default as Hello} from './components/Hello';

import './styles.css';

const App = () => {
  return (
    <div className="container">
      <h1>Hello.</h1>
    </div>
  );
};

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

ReactDOM.render(
  <>
    <div className="container">
     <Hello
        title={'こんにちわ'}
        content={'挨拶'}
      /> 
    </div>
    
  </>,
  document.getElementById('hello')
);