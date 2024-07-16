import { Link } from 'react-router-dom';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  UserOutlined,
  CreditCardOutlined,
  WalletOutlined,
} from '@ant-design/icons';

const AppNav = ({ translate }) => [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: <Link to={'/'}>{translate('dashboard')}</Link>,
  },
  {
    key: 'unit',
    icon: <ProductOutlined />,
    label: <Link to={'/unit'}>Units</Link>,
  },
  {
    key: 'customer',
    icon: <CustomerServiceOutlined />,
    label: <Link to={'/customer'}>{translate('customer')}</Link>,
  },
  {
    key: 'people',
    icon: <UserOutlined />,
    label: <Link to={'/people'}>{translate('people')}</Link>,
  },
  {
    key: 'payment',
    icon: <CreditCardOutlined />,
    label: <Link to={'/payment'}>{translate('payment')}</Link>,
  },
  {
    key: 'expenses',
    icon: <WalletOutlined />,
    label: <Link to={'/expenses'}>{translate('expense')}</Link>,
  },
  {

  // {
  //   key: 'employee',
  //   icon: <UserOutlined />,
  //   label: <Link to={'/employee'}>{translate('employee')}</Link>,
  // },

  {
    label: translate('Settings'),
    key: 'settings',
    icon: <SettingOutlined />,
    children: [
      {
        key: 'admin',
        // icon: <TeamOutlined />,
        label: <Link to={'/admin'}>{translate('Staff')}</Link>,
      },
      {
        key: 'generalSettings',
        label: <Link to={'/settings'}>{translate('general_settings')}</Link>,
      },
      {
        key: 'expensesCategory',
        label: <Link to={'/category/expenses'}>{translate('expenses_Category')}</Link>,
      },
      // {
      //   key: 'emailTemplates',
      //   label: <Link to={'/email'}>{translate('email_templates')}</Link>,
      // },
      {
        key: 'paymentMode',
        label: <Link to={'/payment/mode'}>{translate('payment_mode')}</Link>,
      },
      {
        key: 'taxes',
        label: <Link to={'/taxes'}>{translate('taxes')}</Link>,
      },
      {
        key: 'about',
        label: <Link to={'/about'}>{translate('about')}</Link>,
      },
      // {
      //   key: 'advancedSettings',
      //   label: <Link to={'/settings/advanced'}>{translate('advanced_settings')}</Link>,
      // },
    ],
  },
];

export default AppNav;
