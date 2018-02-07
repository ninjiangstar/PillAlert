import { connect } from 'react-redux';
import NavActions from '../../redux/NavActions';
import PillCreatorCreateButtonView from './PillCreatorCreateButtonView';

const mapDispatchToProps = dispatch => ({
  navigateTo() {
    dispatch(NavActions.pop());
    // dispatch(NavActions.navigateToDashboard());
  },
});

export default connect(
  state => state,
  mapDispatchToProps,
)(PillCreatorCreateButtonView);
