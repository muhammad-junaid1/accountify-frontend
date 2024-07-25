import { Pie } from '@ant-design/charts';

const PieChart = ({ data }) => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: ({ value }) => {
        return value + '%';
      },
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: null,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;
