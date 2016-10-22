import {connect} from 'react-redux';
import {addToeat} from 'actions/toeats';
import ToeatForm from 'components/toeat-form';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name) => {
      dispatch(addToeat(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToeatForm);
