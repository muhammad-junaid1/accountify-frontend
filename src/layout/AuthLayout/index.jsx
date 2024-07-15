import React from 'react';
import { Layout, Row, Col } from 'antd';
import { selectLangDirection } from '@/redux/translate/selectors';
import { useSelector } from 'react-redux';
import { Content } from 'antd/lib/layout/layout';
import SelectLanguage from '@/components/SelectLanguage';
export default function AuthLayout({ sideContent, children }) {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Layout
      style={{ textAlign: langDirection === 'rtl' ? 'right' : 'left', direction: langDirection }}
    >
      <Content
        style={{
          padding: '10px 20px',
        }}
      >
        <SelectLanguage />
      </Content>
      <Row>
        <Col
          xs={{ span: 0, order: 2 }}
          sm={{ span: 0, order: 2 }}
          md={{ span: 11, order: 1 }}
          lg={{ span: 12, order: 1 }}
          style={{
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              backgroundPosition: 'left',
              backgroundSize: 'cover',
              width: '50%',
              height: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
            }}
          ></div>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 13, order: 2 }}
          lg={{ span: 12, order: 2 }}
          style={{ background: '#FFF', minHeight: '100vh' }}
        >
          {children}
        </Col>
      </Row>
    </Layout>
  );
}
