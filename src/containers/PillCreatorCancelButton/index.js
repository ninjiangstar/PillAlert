import { connect } from 'react-redux';
import NavActions from '../../redux/NavActions';
import PillCreatorCancelButtonView from './PillCreatorCancelButtonView';

const mapDispatchToProps = dispatch => ({
  navigateTo() {
    // dispatch(NavActions.reset());
    dispatch(NavActions.pop());
  },
});

export default connect(
  state => state,
  mapDispatchToProps,
)(PillCreatorCancelButtonView);
