export const fields = {
  unit: {
    type: 'search',
    label: 'Unit Hash',
    entity: 'unit',
    redirectLabel: 'Add New Unit',
    withRedirect: true,
    urlToRedirect: '/unit',
    displayLabels: ['hash'],
    searchFields: 'hash',
    dataIndex: ['unit', 'hash'],
    disableForTable: false,
    feedback: 'unit',
    required: true,
  },

  downPaymentPercent: {
    type: 'number',
    required: true,
    label: 'Down Payment (Percentage)',
  },

  totalMonths: {
    type: 'number',
    required: true,
    label: 'Total Months',
  },

  reminderDate: {
    type: 'date',
    required: true,
    label: 'Reminder Date',
  },
};
