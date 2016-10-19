import React from 'react';
import ToEatItem from './toeat-list-item';

class ToEatList extends React.Component {
  render () {
    const {
      toeats,
      onCheckItem,
      onRemoveItem
    } = this.props;

    return (
      <ul style={styles.list}>
        {
          toeats.map((te) => {
            return <ToEatItem
                      onCheck={() => onCheckItem(te.name)}
                      onRemove={() => onRemoveItem(te.name)}
                      key={te.name}
                      {...te} />
          })
        }
      </ul>
    );
  }
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    width: '400px'
  }
};

export default ToEatList;
