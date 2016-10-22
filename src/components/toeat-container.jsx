import React from 'react';
import update from 'react-addons-update';
import ToEatList from 'containers/toeat-list';
import ToEatForm from 'containers/toeat-form';

class ToEatContainer extends React.Component {
  constructor(props) {
    super(props);
    this._checkItem = this._checkItem.bind(this);
  }

  _checkItem(index) {
    const {toeats} = this.state;
    const newItem = {...toeats[index], eaten: !toeats[index].eaten};

    const newToeats = update(this.state.toeats, {$splice: [[index, 1, newItem]]});
    this.setState({toeats: newToeats});
  }

  render () {
    return (
      <div>
        <ToEatForm />
        <ToEatList onCheckItem={this._checkItem} />
      </div>
    );
  }
}

export default ToEatContainer;
