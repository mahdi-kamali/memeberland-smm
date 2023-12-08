"use client"


import Marquee from "react-fast-marquee";

import Iconify from "@/components/icon/Iconify";
import Image from "next/image";



// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CustomersReviews() {
    return (
        <section className="customers-reviews">

            <div className="right">
                <div className="image">
                    <Image
                        src="/images/main-page/35.png"
                        alt=""
                        fill />
                </div>
            </div>

            <div className="left">

                <div className="header">
                    <h1>
                        نظرات بعضی از مشتریان ما :
                    </h1>
                    <p>
                        از تجربیات موفق مشتریان ما در خدمات SMM خود بخوانید. از آیدا رحمانی که فالوئرهایش به شکل با ما همراه شوید و به سرعت در شبک
                    </p>
                </div>

                <div className="body">


                    <Marquee
                        pauseOnHover
                        gradient
                        gradientColor={"#a541ff"}
                        speed={100}
                        loop={0}  
                        delay={0}
                    >

                        <div className="initial-child-container">

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <div className="image">
                                        <Image
                                            src="/images/main-page/36.png"
                                            fill
                                            alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>آیدا رحمانی</h3>
                                        <h4 className="number date">1402/07/29</h4>
                                        <div className="stars">
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                            <Iconify icon="solar:star-bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-body">
                                    <h3>
                                        تجربه فوق‌العاده!
                                    </h3>
                                    <p>
                                        خدمات شما عالی بود! به شدت راضی هستم و تعداد فالوئرهایم به طور چشمگیری افزایش یافت.
                                    </p>
                                    <ul>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                کاملا و واقعی و تضمینی
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                خیلی سریع بود !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                همشون ایرانی بودن !
                                            </span>
                                        </li>
                                        <li>
                                            <Iconify icon="flat-color-icons:ok" />
                                            <span>
                                                مشکلی بود , اما سریع حل کردن !
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </Marquee>


                </div>

            </div>

        </section>
    )
}
