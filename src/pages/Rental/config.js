export const fields = {
  totalAmount: {
    type: 'number',
    label: 'Total Amount',
    required: true,
  },

  totalMonths: {
    type: 'number',
    label: 'Total Months',
    required: true,
  },

  haveAppreciation: {
    type: 'boolean',
    label: 'Appreciation?',
    required: true,
    defaultValue: false,
  },

  monthlyPercentage: {
    type: 'number',
    label: 'Monthly Percentage',
    required: true,
  },

  appreciationPercentage: {
    type: 'number',
    disableForTable: true,
    label: 'Appreciation Percentage (Leave it blank if there is no appreciation)',
  },

  reminderDate: {
    type: 'date',
    default: Date.now,
    label: 'Reminder Date',
  },
};
