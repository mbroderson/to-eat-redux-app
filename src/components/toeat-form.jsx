import React from 'react';

class ToeatForm extends React.Component {
  render () {
    const {onSubmit} = this.props;

    return (
      <div style={styles.container}>
        <input placeholder='Enter food name' ref={(ref) => this.input = ref} />
        <button onClick={() => onSubmit(this.input.value)}>add toeat</button>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '400px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

export default ToeatForm;
