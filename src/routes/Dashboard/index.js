import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({ prescriptions: state.rx.prescriptions });

export default connect(
  mapStateToProps,
)(Dashboard);
