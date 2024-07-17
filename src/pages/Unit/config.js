export const fields = {
  hash: {
    type: 'string',
    required: true,
  },
  unitNo: {
    type: 'string',
    label: 'Unit No',
  },
  project: {
    type: 'string',
  },

  floor: {
    type: 'string',
  },

  totalPrice: {
    type: 'number',
    label: 'Total Price',
  },

  type: {
    type: 'string',
  },

  pricePerSqFeet: {
    type: 'number',
    label: 'Price Sq/ft',
  },

  sizePerSqFeet: {
    type: 'number',
    label: 'Size Sq/ft',
  },

  status: {
    type: 'string',
  },
  downPayment: {
    type: 'number',
    label: 'Down Payment',
  },
};
