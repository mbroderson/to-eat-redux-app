import {connect} from 'react-redux';
import {toggleToeat} from 'actions/toeats'
import ToeatList from 'components/toeat-list';

const mapStateToProps = (state) => {
  return {
    toeats: state.toeats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckItem:(name) => {
      dispatch(toggleToeat(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToeatList);
