import React from 'react';
import ToEatItem from './toeat-list-item';

class ToEatList extends React.Component {
  componentDidMount(){
    this.props.fetchList();
  }

  render () {
    const {toeats, onCheckItem} = this.props;

    return (
      <ul style={styles.list}>
        {
          toeats.map((te) => {
            return <ToEatItem
                      onCheck={() => onCheckItem(te.name)}
                      key={`item-${te.name}`}
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
