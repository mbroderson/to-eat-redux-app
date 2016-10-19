import {connect} from 'react-redux';
import {add} from 'actions/toeats';
import ToeatForm from 'components/toeat-form';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (toeat) => {
      dispatch(add(toeat));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToeatForm);
