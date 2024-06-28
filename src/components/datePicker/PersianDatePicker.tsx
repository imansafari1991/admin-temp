// components/PersianDatePicker.js
"use client"
import React from 'react';

import moment from 'moment-jalaali';
import locale from 'antd/es/date-picker/locale/fa_IR';
moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });
import { DatePicker, ConfigProvider } from "antd";
import dayjs from 'dayjs'
import { DatePicker as DatePickerJalali, Calendar as CalendarJalali, useJalaliLocaleListener } from "antd-jalali";

// import "antd/dist/antd.css";
// import "./index.css";
interface IPersianDatePickerProps{
    currentDate:Date
}
const PersianDatePicker = (props:IPersianDatePickerProps) => {
    var dateFormat = new Intl.DateTimeFormat("fa",{year:"numeric",month:"2-digit",day:"2-digit"});
    useJalaliLocaleListener();
    console.log(new Date().toLocaleDateString('fa-IR').replaceAll('/','-'));
    const date = dayjs(props.currentDate.toLocaleDateString('fa-IR-u-nu-latn').replaceAll('/','-'));
    return (

        // <DatePicker value={new Date(2024,8,14)}/>
        <DatePickerJalali defaultValue={date} />

    );
};

export default PersianDatePicker;