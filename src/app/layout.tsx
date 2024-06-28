"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'antd/dist/reset.css';
import './globals.css'; // Your global styles

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { iranSansFont } from "@/assets/fonts/fonts";
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, MenuProps, notification } from "antd";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import path from "path";
import Link from "next/link";
import faIR from "antd/locale/fa_IR"
import moment from 'moment-jalaali';
import 'moment/locale/fa'; // Persian (Farsi) locale
import DefaultLayout from "./layouts/DefaultLayout";
import { usePathname } from 'next/navigation';
import LoginLayout from "./layouts/LoginLayout";
import { NotificationProvider } from "@/components/notifications/NotificationContext";

// Configure moment to use Jalaali calendar
moment.loadPersian({ usePersianDigits: true });

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
const RoutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const noLayoutPaths = ['/login', '/register'];
  const pathName = usePathname();
  return (
    <html lang="fa" className={`${iranSansFont.variable}  bg-slate-100 `}>
      <body className={inter.className} style={{ height: '100vh' }}>

        <AntdRegistry>
          <ConfigProvider direction="rtl" locale={faIR} componentSize="large" >
            <NotificationProvider >
              {noLayoutPaths.includes(pathName) ? <LoginLayout>{children}</LoginLayout>
                : <DefaultLayout>{children}</DefaultLayout>
              }

            </NotificationProvider>
          </ConfigProvider>
        </AntdRegistry>


      </body>
    </html >
  );
}

export default RoutLayout;
