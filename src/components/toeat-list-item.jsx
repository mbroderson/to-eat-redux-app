import React from 'react';

class ToEatItem extends React.Component {
  render () {
    const {name, eaten, onCheck, onRemove} = this.props;

    return (
      <li style={styles.item}>
        <span>{name}</span>
        <div>
          <label>
            eaten:
            <input onClick={onCheck} type='checkbox' checked={eaten}></input>
          </label>
          <button onClick={onRemove}>remove</button>
        </div>
      </li>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 12px',
    border: '1px solid #ddd',
    marginBottom: '5px'
  }
};

export default ToEatItem;
