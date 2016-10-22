import {connect} from 'react-redux';
import {
  toggle,
  remove
} from 'actions/toeats';
import ToeatList from 'components/toeat-list';

const mapStateToProps = (state) => {
  return {
    toeats: state.toeats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckItem: (name) => {
      dispatch(toggle(name));
    },
    onRemoveItem: (name) => {
      dispatch(remove(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToeatList);
