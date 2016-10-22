import React from 'react';
import update from 'react-addons-update';
import ToEatList from 'containers/toeat-list';
import ToEatForm from 'containers/toeat-form';

class ToEatLayout extends React.Component {
  render () {
    return (
      <div>
        <ToEatForm />
        <ToEatList />
      </div>
    );
  }
}

export default ToEatLayout;
