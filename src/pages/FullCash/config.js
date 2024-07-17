export const fields = {
  // unit: {
  //   type: 'async',
  //   label: 'Unit details',
  //   displayLabels: ['unit', 'hash'],
  //   dataIndex: ['unit', 'hash'],
  //   entity: 'unit',
  //   required: true,
  // },
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
  },
  totalAmount: {
    type: 'number',
    label: 'Total Amount',
  },

  discount: {
    type: 'number',
    label: 'Discount %',
  },
};
