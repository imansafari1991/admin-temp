// components/PersianDatePicker.js
"use client"
import React from 'react';
import moment from 'moment-jalaali';
moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });
import dayjs from 'dayjs'
import { DatePicker as DatePickerJalali, Calendar as CalendarJalali, useJalaliLocaleListener } from "antd-jalali";
interface IPersianDatePickerProps{
    currentDate:Date
}
const PersianDatePicker = (props:IPersianDatePickerProps) => {

    const date = dayjs(props.currentDate.toLocaleDateString('fa-IR-u-nu-latn').replaceAll('/','-'));
    return (

        <DatePickerJalali defaultValue={date} />

    );
};

export default PersianDatePicker;