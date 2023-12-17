import Iconify from '@/components/icon/Iconify'
import Image from 'next/image'
import React from 'react'

export default function page() {



    return (
        <section className='mass-orders user-panel'>

            <section className="intro row">
                <div className="left">
                    <Image
                        src="/images/user/dashboard/19.png"
                        width={250}
                        height={250}
                        alt='' />
                </div>
                <div className="right">
                    <h1>سفارش انبوه</h1>
                    <p>
                        بخش اختصاصی سفارشات انبوه را ارائه می‌دهیم تا سفارشات بزرگ پنل SMM شما را به بهترین شکل مدیریت کنیم. بخش سفارشات انبوه به شما این امکان را می‌دهد که تعداد زیادی سفارش را وارد کرده و پیگیری کنید، تا تجربه‌ای روان و لذت‌بخش داشته باشید.
                    </p>
                </div>
            </section>

            <section className="how-it-work row">

                <h1>چگونه کار می‌کند؟</h1>

                <ul className='guid'>
                    <li>
                        <span>
                            سفارشات خود را فرمت کنید
                        </span>
                        <p>
                            هر سفارش باید به صورت جداگانه وارد شود، با این ساختار: service_id | link | quantity.
                        </p>
                    </li>
                    <li>
                        <span>
                            شناسه سرویس
                        </span>
                        <p>
                            شناسه منحصر به فرد سرویس رسانه‌ای اجتماعی را که می‌خواهید خریداری کنید مشخص کنید.
                        </p>
                    </li>
                    <li>
                        <span>
                            لینک
                        </span>
                        <p>
                            لینک مربوطه را ارائه دهید که می‌خواهید سرویس را اعمال کنید. می‌تواند لینک پست، لینک پروفایل یا هر لینک مربوطه دیگری باشد.
                        </p>
                    </li>
                    <li>
                        <span>
                            تعداد
                        </span>
                        <p>
                            تعداد یا تعداد واحدهای انتخابی برای سرویس انتخابی را مشخص کنید.
                        </p>
                    </li>
                </ul>
            </section>

            <section className="examples row">
                <h1>مثال‌ها:</h1>
                <div className="items">
                    <div className="example-item">
                        <h2>
                            مثال ۱
                        </h2>
                        <ul>
                            <li>
                                <span>
                                    شناسه سرویس
                                </span>
                                <p>
                                    ۱۲۳۴۵
                                </p>
                            </li>
                            <li>
                                <span>
                                    لینک
                                </span>
                                <p>
                                    https://www.instagram.com/p/abc123
                                </p>
                            </li>
                            <li>
                                <span>
                                    تعداد
                                </span>
                                <p>
                                    ۱۰۰۰
                                </p>
                            </li>
                            <li>
                                <span>
                                    نتیجه
                                </span>
                                <p>
                                    ۱۲۳۴۵ | https://www.instagram.com/p/abc123 | ۱۰۰۰
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="example-item">
                        <h2>
                            مثال ۲
                        </h2>
                        <ul>
                            <li>
                                <span>
                                    شناسه سرویس
                                </span>
                                <p>
                                    ۶۷۸۹۰
                                </p>
                            </li>
                            <li>
                                <span>
                                    لینک
                                </span>
                                <p>
                                    https://www.instagram.com/p/xyz789
                                </p>
                            </li>
                            <li>
                                <span>
                                    تعداد
                                </span>
                                <p>
                                    ۵۰۰
                                </p>
                            </li>
                            <li>
                                <span>
                                    نتیجه
                                </span>
                                <p>
                                    ۶۷۸۹۰ | https://www.instagram.com/p/xyz789 | ۵۰۰
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <form className="order-box row"
                action='#'>
                <div className="form-header"></div>
                <div className="form-groups">
                    <textarea name="order" cols={30} rows={10} placeholder='شناسه_سرویس | لینک | تعداد'>
                    </textarea>
                </div>
                <div className="form-buttons">
                    <button>
                        <Iconify icon="formkit:submit" />
                        <span>ثبت</span>
                    </button>
                </div>
            </form>
        </section>

    )
}
