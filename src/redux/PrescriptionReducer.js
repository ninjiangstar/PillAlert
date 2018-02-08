const initialState = {
  prescriptions: [],
  log: [],
  currentIndex: 0,
};

export default function PrescriptionReducer(state = initialState, action) {
  switch (action.type) {
    case 'Prescription/Create':
      return Object.assign({}, state, {
        prescriptions: [...state.prescriptions, { ...action.newPrescription, key: state.currentIndex }],
        key: state.currentIndex + 1,
      });
    default:
      return state;
  }
}
