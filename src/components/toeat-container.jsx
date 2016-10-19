import React from 'react';
import ToeatList from 'containers/toeat-list';
import ToeatForm from 'containers/toeat-form';

class ToEatContainer extends React.Component {
  render () {
    return (
      <div>
        <ToeatForm />
        <ToeatList />
      </div>
    );
  }
}

export default ToEatContainer;
