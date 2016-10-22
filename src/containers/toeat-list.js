import {connect} from 'react-redux';
import {toggleToeat, fetchToeats} from 'actions/toeats'
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
    },
    fetchList: () => {
      dispatch(fetchToeats());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToeatList);
