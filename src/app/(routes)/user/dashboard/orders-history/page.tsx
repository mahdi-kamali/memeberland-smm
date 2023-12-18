
"use client"
import Iconify from "@/components/icon/Iconify";
import Image from "next/image";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



export default function page() {
  return (
    <main className='orders-history user-panel'>
      <section className="intro row">
        <div className="left">
          <Image
            src="/images/user/dashboard/20.png"
            width={250}
            height={250}
            alt='' />
        </div>
        <div className="right">
          <h1>تاریخچه سفارشات شما</h1>
          <p>
            در این بخش شما میتوانید به تمامیه سرویس هایی که قبلا خریداری کرده اید , دسترسی داشته باشین
          </p>
        </div>
      </section>

      <section className="orders">
        <div className="body">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={5.25}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className="item">
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
                    <Iconify icon="el:ok" />
                  </button>
                </div>
              </div>

            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  )
}
