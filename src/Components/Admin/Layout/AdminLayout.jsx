import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, theme } from 'antd'
import {
  AppstoreAddOutlined,
  AreaChartOutlined,
  CodeSandboxOutlined,
  FileDoneOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../../Features/Auth/AuthSlice'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import { toast } from 'react-toastify'

const { Header, Sider, Content } = Layout

const AdminLayout = () => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      dispatch(logout())
      navigate('/admin/login')
    }
  }, [dispatch, navigate])

  const handleMenuClick = useCallback(({ key }) => {
    if (key === 'logout') {
      dispatch(logout()); // Dispatch the logout action
      toast.success('Logout successfully');
      // Redirect to login page after logout
      navigate('/admin/login');
    } else {
      toast.error('Something Went Wrong!');
    }
  }, [dispatch, navigate]); // Dependencies of useCallback

  const items = useMemo(() => [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: 'logout',
    },
  ], []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <ScrollToTop />
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            color: 'white',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          ADMIN 3DSHOP
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: '/admin/dashboard',
              icon: <AreaChartOutlined />,
              label: t('side_menu.dashboard_label'),
            },
            {
              key: '/admin/catalog',
              icon: <ShopOutlined />,
              label: t('side_menu.catalog_management_label'),
              children: [
                {
                  key: '/admin/categories',
                  icon: <AppstoreAddOutlined />,
                  label: t('side_menu.category_management_label'),
                },
                {
                  key: '/admin/brands',
                  icon: <CodeSandboxOutlined />,
                  label: t('side_menu.brand_management_label'),
                },
                {
                  key: '/admin/products',
                  icon: <CodeSandboxOutlined />,
                  label: t('side_menu.product_management_label'),
                },
              ],
            },
            {
              key: '/admin/orders',
              icon: <FileDoneOutlined />,
              label: t('side_menu.order_management_label'),
            },
            {
              key: '/admin/customers',
              icon: <TeamOutlined />,
              label: t('side_menu.customer_management_label'),
            },
            {
              key: '/admin/blogs',
              icon: <FormOutlined />,
              label: t('side_menu.blog_management_label'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row
            justify="space-between"
            align="middle"
            style={{ padding: '0 24px' }}
          >
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            </Col>
            <Col>
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                }}
              >
                <a onClick={e => e.preventDefault()}>
                  <Avatar src="url_to_your_profile_image" />
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
