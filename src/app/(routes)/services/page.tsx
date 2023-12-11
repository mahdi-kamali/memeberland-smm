import Image from "next/image";
import TopSales from "./sections/top-sales/TopSales";
import Iconify from "@/components/icon/Iconify";
import PlatformSelect from "./sections/platform-select/PlatformSelect";
import SearchBox from "./sections/search-box/SearchBox";
import SearchTopSales from "./sections/search-top-sales/SearchTopSales";
import SearchTableResult from "./sections/search-table-result/SearchTableResult";










export default function page() {
    return (
        <main className="services-page">
            <section className="poster">
                <div className="container">
                    <div className="right">
                        <Image
                            src="/images/services/41.png"
                            alt=""
                            fill />
                    </div>
                    <div className="left">
                        <h1>
                            همین الان سرویس رو
                            <br />
                            بخر و

                            <span className="highlight">
                                <small>
                                    دنیای مجازی
                                </small>
                            </span>
                            <br />
                            سریع قورت بگیر !
                        </h1>
                        <p>
                            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است.
                        </p>
                    </div>
                </div>
            </section>

            <TopSales />


            <section className="todays-service">
                <fieldset>
                    <legend>
                        سرویس منتخب امروز
                    </legend>
                    <div className="content">
                        <div className="right">
                            <Image
                                src="/images/services/4.png"
                                alt=""
                                fill />
                        </div>
                        <div className="left">
                            <h2>
                                سرویس لایک پست اینستاگرام / 20 هزار لایک / در 1 ساعت
                            </h2>

                            <ul>
                                <li>
                                    کاملا و واقعی و تضمینی
                                </li>
                                <li>
                                    تحویل سریع و بلافاصله
                                </li>
                                <li>
                                    پشتیبانی آنلاین
                                </li>
                                <li>
                                    قابلیت مشاهده زنده
                                </li>
                                <li>
                                    ایرانی و تمامیت فارسی زبان
                                </li>
                            </ul>

                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و ی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>



                            <div className="buttons">
                                <Iconify icon="ic:round-share" />
                                <Iconify icon="solar:bag-5-bold" />


                                <span className="number">
                                    300
                                    هزار تومان
                                </span>
                            </div>

                        </div>

                    </div>
                </fieldset>

                <div className="shapes">
                    <div className="shape-1">
                        <Image
                            src="/images/services/5.png"
                            alt=""
                            fill />
                    </div>
                </div>
            </section>


            <section className="popular-categories">
                <div className="header">
                    <div className="left">
                        <div className="image">
                            <Image
                                src="/images/services/6.png"
                                alt=""
                                fill />
                        </div>
                    </div>
                    <div className="right">
                        <h1>
                            دسته سرویس هایی<br />
                            که خیلی محبوب هستند
                        </h1>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>
                </div>
                <div className="body">
                    <div className="item">
                        <div className="item-header">
                            <Image
                                src="/images/main-page/25.png"
                                alt=""
                                fill />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس های کامنت
                            </h3>
                            <p>
                                اگر شما یک طراح هستین و یا با طراحی های گرافیکی  دارید به متن های برخورده اید
                            </p>
                            <button>
                                مشاهده سرویس ها
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <Image
                                src="/images/main-page/26.png"
                                alt=""
                                fill />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس های کامنت
                            </h3>
                            <p>
                                اگر شما یک طراح هستین و یا با طراحی های گرافیکی  دارید به متن های برخورده اید
                            </p>
                            <button>
                                مشاهده سرویس ها
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <Image
                                src="/images/main-page/27.png"
                                alt=""
                                fill />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس های کامنت
                            </h3>
                            <p>
                                اگر شما یک طراح هستین و یا با طراحی های گرافیکی  دارید به متن های برخورده اید
                            </p>
                            <button>
                                مشاهده سرویس ها
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <Image
                                src="/images/main-page/28.png"
                                alt=""
                                fill />
                        </div>
                        <div className="item-body">
                            <h3>
                                سرویس های کامنت
                            </h3>
                            <p>
                                اگر شما یک طراح هستین و یا با طراحی های گرافیکی  دارید به متن های برخورده اید
                            </p>
                            <button>
                                مشاهده سرویس ها
                            </button>
                        </div>
                    </div>

                </div>
            </section>


            <PlatformSelect />

            <SearchBox />

            <SearchTopSales />


           <SearchTableResult/>






        </main>
    )
}
