import { useEffect, useState } from 'react';

import { Row, Col, notification } from 'antd';
import useLanguage from '@/locale/useLanguage';
import { useMoney } from '@/settings';
import SummaryCard from './components/SummaryCard';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';

import { selectMoneyFormat } from '@/redux/settings/selectors';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '@/config/serverApiConfig';
import ColumnChart from './components/ColumnChart';
import PieChart from './components/PieChart';

axios.defaults.withCredentials = true;

export default function DashboardModule() {
  const translate = useLanguage();
  const { moneyFormatter } = useMoney();
  const [inflowAmount, setInflowAmount] = useState(0);
  const [inflowLoading, setInflowLoading] = useState(true);
  const [outflowAmount, setOutflowAmount] = useState(0);
  const [outflowLoading, setOutflowLoading] = useState(true);
  const money_format_settings = useSelector(selectMoneyFormat);

  const fetchInFlows = async () => {
    try {
      setInflowLoading(true);
      const result = await axios.get(API_BASE_URL + 'inflow/calculate');

      setInflowAmount(result.data?.result || 0);
      setInflowLoading(false);
    } catch (error) {
      console.log(error);
      notification.config({
        duration: 20,
        maxCount: 1,
      });

      notification.error({
        message: 'Something went wrong!',
        description: 'Cannot perform the operation, Try again later',
      });
    }
  };

  const fetchOutFlows = async () => {
    try {
      setOutflowLoading(true);
      const result = await axios.get(API_BASE_URL + 'outflow/calculate');

      setOutflowAmount(result.data?.result || 0);
      setOutflowLoading(false);
    } catch (error) {
      console.log(error);
      notification.config({
        duration: 20,
        maxCount: 1,
      });

      notification.error({
        message: 'Something went wrong!',
        description: 'Cannot perform the operation, Try again later',
      });
    }
  };

  useEffect(() => {
    const currency = money_format_settings.default_currency_code || null;
    if (currency) {
      fetchInFlows();
      fetchOutFlows();
    }
  }, [money_format_settings.default_currency_code]);

  if (money_format_settings) {
    return (
      <>
        <Row gutter={[32, 32]}>
          <SummaryCard
            title={'Inflows'}
            tagColor={'green'}
            prefix={'Total'}
            isLoading={inflowLoading}
            data={inflowAmount}
          />

          <SummaryCard
            title={'Outflows'}
            tagColor={'red'}
            prefix={'Total'}
            isLoading={outflowLoading}
            data={outflowAmount}
          />
        </Row>
        <div className="space30"></div>
        <Row gutter={[32, 32]}>
          <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
            <div className="whiteBox shadow" style={{ height: 458 }}>
              <ColumnChart
                data={[
                  {
                    type: 'Inflows',
                    value: inflowAmount,
                  },
                  {
                    type: 'Outflows',
                    value: outflowAmount,
                  },
                  {
                    type: 'Profit',
                    value: inflowAmount - outflowAmount,
                  },
                ]}
              />
            </div>
            <div className="whiteBox shadow" style={{ height: 458, marginTop: 20 }}>
              <PieChart
                data={[
                  {
                    type: 'Outflows',
                    value: Math.round((outflowAmount / inflowAmount) * 100),
                  },
                  {
                    type: 'Profit',
                    value: Math.round(((inflowAmount - outflowAmount) / inflowAmount) * 100),
                  },
                ]}
              />
            </div>
          </Col>
          <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
            <CustomerPreviewCard isLoading={false} activeCustomer={0} newCustomer={null} />
          </Col>
        </Row>
      </>
    );
  } else {
    return <></>;
  }
}
