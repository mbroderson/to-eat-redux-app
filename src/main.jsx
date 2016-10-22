import React from 'react';
import {Provider} from 'react-redux';
import store from 'stores';
import ToEatLayout from 'components/toeat-layout';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h1>To Eat App</h1>
          <ToEatLayout />
        </div>
      </Provider>
    );
  }
}

export default App;
