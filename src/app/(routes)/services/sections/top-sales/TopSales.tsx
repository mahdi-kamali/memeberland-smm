"use client"

import Iconify from "@/components/icon/Iconify";
import Image from "next/image";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function TopSales() {
    return (
        <section className="top-sales">
            <h1>
                <Iconify icon="solar:star-bold" />
                <span>
                    سرویس های پرفروش
                </span>
            </h1>

            <div className="body">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5.5}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="item-header">
                            <Image
                                src="/images/services/2.png"
                                width={125}
                                height={125}
                                alt="" />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس فالوور اینستاگرام واقعی
                            </h3>
                            <ul>
                                <li>زمان : 10 دقیقه</li>
                                <li>
                                    تعداد 2 هزار
                                </li>
                                <li>
                                    قیمت تمام شده : 350 هزار تومان
                                </li>
                                <li>
                                    تکرار : بله
                                </li>
                            </ul>
                        </div>

                        <div className="item-buttons">
                            <button>
                                <span className="number">
                                    320 تومان
                                </span>
                                <Iconify icon="ph:bag-fill" />
                            </button>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
