import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/idurar-crm-erp.svg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  const langDirection = useSelector(selectLangDirection);

  return (
    <Content
      style={{
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        {/* <img
          src={logo}
          alt="IDURAR ERP CRM"
          style={{ margin: '0 auto 40px', display: 'block' }}
          height={63}
          width={220}
        /> */}
        <h2 style={{ color: '#4a5ed8', textAlign: 'center' }}>Accountify</h2>
      </div>
    </Content>
  );
}
