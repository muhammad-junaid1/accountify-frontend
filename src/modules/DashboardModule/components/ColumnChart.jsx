import { Column, Line } from '@ant-design/charts';

const ColumnChart = ({ data = [] }) => {
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      fill: ({ type }) => {
        if (type === 'Inflows') {
          return '#53ef6c';
        } else if (type === 'Outflows') {
          return '#f16161';
        } else {
          return '#3e7eec';
        }
      },
    },
  };
  return <Column {...config} />;
};

export default ColumnChart;
