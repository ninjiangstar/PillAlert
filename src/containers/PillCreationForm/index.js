import { connect } from 'react-redux';
import PrescriptionActions from '../../redux/PrescriptionActions';
import NavActions from '../../redux/NavActions';
import PillCreationForm from './PillCreationForm';

const mapStateToProps = state => state.rx;

const mapDispatchToProps = dispatch => ({
  createPrescription(formdata) {
    dispatch(PrescriptionActions.createPrescription(formdata));
  },
  pop() {
    dispatch(NavActions.pop());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PillCreationForm);
