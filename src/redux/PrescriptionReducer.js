const initialState = {
  prescriptions: [],
  // log: [],
  currentIndex: 0,
};

const initialStateOfPrescription = {
  drugName: '',
  instructions: '',
  cautions: '',
  pillCount: 0,
  dosesPerDay: 1,
  pillsPerDose: 1,
  rx: '',
  nextNotification: Date.now(),
  notified: false,
};

export default function PrescriptionReducer(state = initialState, action) {
  switch (action.type) {
    case 'Prescription/Create': {
      return Object.assign({}, state, {
        prescriptions: [...state.prescriptions, {
          ...initialStateOfPrescription,
          ...action.newPrescription,
          key: state.currentIndex,
        }],
        currentIndex: state.currentIndex + 1,
      });
    }
    case 'Prescription/TakeDose': {
      return Object.assign({}, state, {
        prescriptions: state.prescriptions.slice(0, action.index)
          .concat([{
            ...initialStateOfPrescription,
            ...state.prescriptions[action.index],
            pillCount: action.pillCount,
            nextNotification: action.nextNotification,
            notified: false,
          }])
          .concat(state.prescriptions.slice(action.index + 1)),
      });
    }
    case 'Prescription/Notify': {
      return Object.assign({}, state, {
        prescriptions: state.prescriptions.slice(0, action.index)
          .concat([{
            ...initialStateOfPrescription,
            ...state.prescriptions[action.index],
            notified: true,
          }])
          .concat(state.prescriptions.slice(action.index + 1)),
      });
    }
    default: return state;
  }
}
