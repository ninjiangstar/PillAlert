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

export default {
  createPrescription,
};
