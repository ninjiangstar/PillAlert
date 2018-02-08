function createPrescription(unfilteredData) {
  const newPrescription = {
    drugName: unfilteredData.drugName,
    instructions: unfilteredData.instructions,
    cautions: unfilteredData.cautions,
    pillCount: parseInt(unfilteredData.pillCount, 10),
    dosesPerDay: parseInt(unfilteredData.dosesPerDay, 10),
    pillsPerDose: parseInt(unfilteredData.pillsPerDose, 10),
    rx: unfilteredData.rx,
    nextNotification: Date.now(),
  };

  return {
    type: 'Prescription/Create',
    newPrescription,
  };
}

function takeDose(key) {
  return (dispatch, getState) => {
    const { rx } = getState();
    const itemIndex = rx.prescriptions.findIndex(item => parseInt(item.key, 10) === parseInt(key, 10));
    const itemRef = rx.prescriptions[itemIndex];
    dispatch({
      type: 'Prescription/TakeDose',
      key,
      index: itemIndex,
      pillCount: itemRef.pillCount - itemRef.pillsPerDose,
      nextNotification: Date.now() + (3600000 * (16 / itemRef.dosesPerDay)),
      // for the MVP, we assume average wake-time of a user is 24 hours
      // and the notification for the next pill is (24 / dose frequency) hours
      // which isn't realistic, but takes a more involved calculation
    });
  };
}

function notify(key) {
  return (dispatch, getState) => {
    const { rx } = getState();
    const itemIndex = rx.prescriptions.findIndex(item => parseInt(item.key, 10) === parseInt(key, 10));
    dispatch({
      type: 'Prescription/Notify',
      key,
      index: itemIndex,
    });
  };
}

export default {
  createPrescription,
  takeDose,
  notify,
};
