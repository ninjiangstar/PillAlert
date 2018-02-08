import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import PrescriptionActions from '../../redux/PrescriptionActions';

const mapStateToProps = state => ({ prescriptions: state.rx.prescriptions });

const mapDispatchToProps = dispatch => ({
  takeDose(key) {
    dispatch(PrescriptionActions.takeDose(parseInt(key, 10)));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
