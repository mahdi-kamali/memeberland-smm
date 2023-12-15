"use client"

import Iconify from "@/components/icon/Iconify";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "react-sweetalert2"

export default function page() {


    const [selectedMethod, setSelectedMethod] = useState({
        name : "درگاه زرین پال"
    })

    const [amountOfMoney, setAmountOfMoney] = useState({
        amount: 0,
        fee: 0,
        total: 100000
    })

    const [currentStep, setStep] = useState(1)




    const openSelectPaymentPopup = () => {

    }

    const openAddAmountMoneyPopUp = () => {



    }


    const stepIcon = (counter: any) => {
        if (counter < currentStep) {
            return <Iconify icon="flat-color-icons:ok" />
        } else {
            return counter
        }


    }


    const isCompleted = (stepIndex: any) => {
        if (stepIndex < currentStep) {
            return "completed"
        }
        else {
            return ""
        }
    }


    const isCurrentStep = (stepIndex: any) => {
        if (stepIndex === currentStep) {
            return "currnet-step"
        } else {
            return ""
        }
    }


    useEffect(() => {

        if (selectedMethod) setStep(2)
        if (amountOfMoney.total > 0) setStep(3)

    }, [selectedMethod, amountOfMoney])




    async function handlePayButtonSubmit() {


    }









    return (
        <main className="add-found-page user-panel">

            <div className="header">
                <h1>
                    انرژی نامحدود:
                    <span>
                        با شارژ حساب، برندت را به بالاترین اوج‌ها ببر!
                    </span>
                </h1>
                <p>
                    در دنیای پویای بازاریابی اجتماعی، یک پله جلوتر از رقیبان خود بلند شوید. با شارژ حساب، به برندت انرژی نامحدودی بخشیده و برای ارتقای حضورت در دنیای جذاب بازاریابی اجتماعی، آماده شو!
                </p>
            </div>

            <div className="body">
                <div className="road-map">
                    <div className={`item ${isCurrentStep(1)}
                 ${isCompleted(1)}`}>
                        <div className="left">
                            <span className={'circle-ripple--animation'}>
                                {
                                    stepIcon(1)
                                }
                            </span>
                            <div className="arrow">
                                <Iconify icon="cil:arrow-bottom" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="item-animation">
                                <Image 
                                src="/images/user/dashboard/16.png"
                                alt=""
                                width={200}
                                height={200}/>
                            </div>
                            <div className="item-info">
                                <h2>روش پرداخت را انتخاب کنید</h2>
                                <p>
                                    براساس نیازتان مشخص کنید که از کدام درگاه میخواهید پرداخت انجام شود.
                                </p>
                            </div>
                            <div className="item-input">
                                <fieldset
                                    onClick={openSelectPaymentPopup}>
                                    <legend>
                                        <Iconify icon="ph:contactless-payment-fill" />
                                        <span>انتخاب روش پرداخت</span>
                                    </legend>
                                    <div className="content">
                                        <h1>
                                            {selectedMethod?.name || "کلیک کنید"}
                                        </h1>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className={`item ${isCurrentStep(2)}
                 ${isCompleted(2)}`}>
                        <div className="left">

                            <span className={'circle-ripple--animation'}>
                                {
                                    stepIcon(2)
                                }
                            </span>
                            <div className="arrow">
                                <Iconify icon="cil:arrow-bottom" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="item-animation">
                            <Image 
                                src="/images/user/dashboard/17.png"
                                alt=""
                                width={200}
                                height={200}/>
                            </div>
                            <div className="item-info">
                                <h2>مقدار شارژ را وارد کنید</h2>
                                <p>
                                    مالیات نیز محاسبه خواهد شد
                                </p>
                            </div>
                            <div className="item-input">
                                <fieldset
                                    onClick={openAddAmountMoneyPopUp}>
                                    <legend>
                                        <Iconify icon="healthicons:money-bag" />
                                        <span>مقدار شارژ</span>
                                    </legend>
                                    <div className="content">
                                        <h1 className="number">
                                            {amountOfMoney.total}
                                            <span>
                                                تومان
                                            </span>
                                        </h1>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className={`item ${isCurrentStep(3)}
                 ${isCompleted(3)}`}>
                        <div className="left">
                            <span className={'circle-ripple--animation'}>
                                {
                                    stepIcon(3)
                                }
                            </span>
                            <div className="arrow">
                                <Iconify icon="cil:arrow-bottom" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="item-animation">

                            </div>
                            <div className="item-info">
                                <h2>هزینه را پرداخت کنید</h2>
                                <p>
                                    برای تایید شارژ, هزینه رو پرداخت کرده و از خدمات و سرویس های ما لذت ببرید.
                                </p>
                            </div>
                            <div className="item-input">
                                <button
                                    onClick={
                                        () =>
                                            handlePayButtonSubmit()}
                                    className='pay-button'>
                                    <span>برای پرداخت کلیک کنید</span>
                                    <Iconify icon="formkit:submit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shapes">
                <div className="shape-1">
                    <Image
                        src="/images/user/dashboard/1.png"
                        fill
                        alt="" />
                </div>
            </div>

        </main>
    )
}


