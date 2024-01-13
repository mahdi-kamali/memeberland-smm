"use client"

import Iconify from "@/components/icon/Iconify";
import { useState } from "react";
import TicketHistory from "./componetns/TicketHistory"
import AddNewTicket from "./componetns/AddNewTicket"
import Accordion from "@/components/accordion/Accordion";
import AccordionHeader from "@/components/accordion/AccordionHeader";
import AcccordionBody from "@/components/accordion/AcccordionBody";

export default function Page() {





    const [ticketState, setTicketState] = useState(false)





    const frequentlyAskedQuestions = [
        {
            header: <h1 className='header'>چقدر زمان می‌برد تا پاسخی از تیم پشتیبانی دریافت کنم؟</h1>,
            body: <p className='body'>
                تیم پشتیبانی ما سعی می‌کند تا به سرعت به تمامی تیکت‌ها پاسخ دهد. با این حال، زمان پاسخ ممکن است بستگی به حجم درخواست‌ها داشته باشد. به طور کلی، شما می‌توانید انتظار داشته باشید که در 24-48 ساعت آینده پاسخی دریافت کنید.
            </p>,
            defaultActive: true
        },
        {
            header: <h1 className='header'>چرا سفارش من هنوز تکمیل نشده است؟</h1>,
            body: <p className='body'>
                قبل از ایجاد یک تیکت، وضعیت سفارش خود را از تب سفارشات در داشبورد کاربری خود چک کنید. برای اطلاع از سرعت سفارشات، لطفاً به توضیحات خدمت مراجعه کنید. در صورتی که وضعیت سفارش شما تکمیل شده است اما خدمت ارائه نشده است، لطفاً یک تیکت باز کرده و درخواست بررسی سفارش خود را ارسال کنید.
            </p>,
            defaultActive: true
        },
        {
            header: <h1 className='header'>چرا سفارش من لغو شد؟</h1>,
            body: <p className='body'>
                سفارشات شما به یکی از دلایل زیر لغو می‌شود: <br />
                1- قرار دادن دو یا چند سفارش برای همان لینک همزمان بدون انتظار تکمیل. <br />
                2- فرمت لینک اشتباه است یا دستورالعمل‌های موجود در توضیحات خدمت را دنبال نمی‌کند. <br />
                3- خدمت در حال به‌روزرسانی یا خدمت در حال ارائه نیست. <br />
                4- در برخی موارد، تعداد به افزایش 100 یا 1000 نبوده است.
            </p>,
            defaultActive: false
        }]



    return (
        <main className='tickets-page user-panel'>
            <div className="left">
                <div className="state">
                    <button
                        className={`${!ticketState}`}
                        onClick={() => { setTicketState(false) }}
                    >
                        <Iconify icon="mdi:add-bold" />
                        <span>افزودن تیکت جدید</span>
                    </button>
                    <button
                        className={`${ticketState}`}
                        onClick={() => { setTicketState(true) }}
                    >
                        <Iconify icon="ep:ticket" />
                        <span>تاریخچه تیکت‌ها</span>
                    </button>
                </div>
                <div className="ticket-state-content">
                    {!ticketState ? <AddNewTicket /> : <TicketHistory />}
                </div>
            </div>
            <div className="right">
                {/* <div className="frequently-questions">
                    <div className="question-header">
                        <h1>سوالات متداول تیکت‌ها</h1>
                    </div>
                </div> */}
                <div className="accordions">
                    {frequentlyAskedQuestions.map((item, index) => {
                        return <Accordion
                            className={"item"}
                            defaultActive={item.defaultActive}
                            key={index}>
                            <AccordionHeader>
                                {item.header}
                            </AccordionHeader>
                            <AcccordionBody key={index}>
                                {item.body}
                            </AcccordionBody>
                        </Accordion>
                    })}
                </div>
            </div>
        </main>
    )
}
