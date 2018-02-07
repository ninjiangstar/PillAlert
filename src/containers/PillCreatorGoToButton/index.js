import { connect } from 'react-redux';
import NavActions from '../../redux/NavActions';
import PillCreatorGoToButtonView from './PillCreatorGoToButtonView';

const mapDispatchToProps = dispatch => ({
  navigateTo() {
    dispatch(NavActions.navigateToPillCreator());
  },
});

export default connect(
  state => state,
  mapDispatchToProps,
)(PillCreatorGoToButtonView);
