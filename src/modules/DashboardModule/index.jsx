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

axios.defaults.withCredentials = true;

export default function DashboardModule() {
  const translate = useLanguage();
  const { moneyFormatter } = useMoney();
  const [inflowAmount, setInflowAmount] = useState(0);
  const [inflowLoading, setInflowLoading] = useState(true);
  const money_format_settings = useSelector(selectMoneyFormat);

  const fetchInFlows = async () => {
    try {
      setInflowLoading(false);
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

  useEffect(() => {
    const currency = money_format_settings.default_currency_code || null;
    if (currency) {
      fetchInFlows();
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
        </Row>
        <div className="space30"></div>
        <Row gutter={[32, 32]}>
          <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
            <div className="whiteBox shadow" style={{ height: 458 }}></div>
          </Col>
          <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
            {/* <CustomerPreviewCard
              isLoading={clientLoading}
              activeCustomer={clientResult?.active}
              newCustomer={clientResult?.new}
            /> */}
          </Col>
        </Row>
      </>
    );
  } else {
    return <></>;
  }
}
