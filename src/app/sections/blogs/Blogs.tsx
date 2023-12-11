"use client"

import Iconify from '@/components/icon/Iconify';
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
export default function Blogs() {
    return (
        <section className="blogs">
            <div className="header">
                <h1>بروزترین اخبار و بلاگ های ممبرلند</h1>
                <p>
                    از آخرین راه‌ها برای افزایش فالوئرها در یوتیوب و شبکه‌های اجتماعی با خبر شوید. به ما بپیوندید و تجربه کنید!
                </p>
            </div>
            <div className="body">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="item-header">
                                <div className="image">
                                    <Image
                                        src="/images/main-page/37.png"
                                        alt=''
                                        fill />
                                </div>
                            </div>
                            <div className="item-body">
                                <h3>سرزمین واقعیت‌های غیرواقعی</h3>
                                <p>
                                    به خوبی خوش آمدید! در این پادکست، با شما به سفری فراموش‌نشدنی به سرزمین واقعیت‌های غیرواقعی خواهیم رفت. در هر اپیزود، با داستان‌هایی از دنیاهایی که هرگز واقعی نخواهند شد، آشنا خواهیم شد.
                                </p>
                                <div className="buttons">
                                    <button>
                                        <span>
                                            بیشتر
                                        </span>
                                        <Iconify icon="mingcute:more-3-fill" />
                                    </button>

                                    <button>
                                        <span>
                                            اشتراک
                                        </span>
                                        <Iconify icon="ic:round-share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
             
                </Swiper>
            </div>

            <div className="shapes">
                <div className="shape-1">
                    <Image
                        src="/images/main-page/38.png"
                        alt=''
                        fill />
                </div>
            </div>
        </section>
    )
}
