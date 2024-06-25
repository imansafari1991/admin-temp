"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { iranSansFont } from "@/assets/fonts/fonts";
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, MenuProps } from "antd";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import path from "path";
import Link from "next/link";
const { Header, Content, Sider } = Layout;
const inter = Inter({ subsets: ["latin"] });
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${iranSansFont.variable}  bg-slate-100 `}>
      <body className={inter.className} style={{ height: '100vh' }}>
        <AntdRegistry>
          <ConfigProvider direction="rtl">
            <Layout className="!h-full">

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
                    <Button type="primary"> دکمه</Button>
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </Layout>




          </ConfigProvider>



        </AntdRegistry>
      </body>
    </html >
  );
}
