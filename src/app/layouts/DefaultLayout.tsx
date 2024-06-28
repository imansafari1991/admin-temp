import { Breadcrumb, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { MenuProps } from "antd/lib";

import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Link from "next/link";
import { Content } from "antd/es/layout/layout";
const DefaultLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
            const key = String(index + 1);

            return {
                key: `منو ${key}`,
                icon: React.createElement(icon),
                label: `زیر منو ${key}`,

                children: new Array(4).fill(null).map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: <Link href={'/link'}>
                            ایمان
                        </Link>,
                        path: '/link'
                    };
                }),
            };
        },
    );

    return (<Layout className="!h-full">

        <Layout >

            <Sider width={220} className="site-layout-background !h-full" >
                <img src='/images/76.jpg' />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items2}

                />
            </Sider>


            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >

                    {children}
                </Content>
            </Layout>
        </Layout>
    </Layout>
    );
}

export default DefaultLayout;