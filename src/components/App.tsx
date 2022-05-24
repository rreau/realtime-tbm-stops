import Header from './Header/Header';
import Main from './Main/Main';

import { StopPointListener } from '@contexts/StopPointListener';

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <StopPointListener>
        <Header />
        <Main />
      </StopPointListener>
    </div>
  );
};

export default App;
