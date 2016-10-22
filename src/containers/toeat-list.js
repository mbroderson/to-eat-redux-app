import {connect} from 'react-redux';
import ToeatList from 'components/toeat-list';

const mapStateToProps = (state) => {
  return {
    toeats: state.toeats
  };
};

export default connect(mapStateToProps)(ToeatList);
