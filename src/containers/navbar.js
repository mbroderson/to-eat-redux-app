import {connect} from 'react-redux';
import React from 'react';

class Navbar extends React.Component {
  render() {
    const {toeatCount} = this.props;

    return (
      <div>
        toeats count {toeatCount}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toeatCount: state.toeats.length
  };
};

export default connect(mapStateToProps)(Navbar);
