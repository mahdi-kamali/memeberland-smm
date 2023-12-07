import Iconify from "@/components/icon/Iconify";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-page">

      <section className="poster">

        <div className="right">
          <Image
            src={"/images/main-page/2.png"}
            width={550}
            height={1000}
            alt="" />
        </div>
        <div className="left">
          <Image
            src={"/images/main-page/3.png"}
            width={250}
            height={150}
            alt="" />

          <div className="text">
            <h1>
              با ممبرلند خرید کن و < br />
              فضای مجازی رو انفجار کن
            </h1>
            <p>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است.
            </p>
          </div>

          <form className="login">
            <div className="group">
              <Iconify icon="ri:user-line" />
              <input type="text" placeholder="نام کاربری" />
            </div>
            <div className="group">
              <Iconify icon="mdi:password" />
              <input type="text" placeholder="پسوورد" />
            </div>

            <div className="buttons">
              <button>
                <Iconify icon="basil:login-solid" />
                <span>ورود</span>
              </button>

              <button>
                <Iconify icon="mdi:register" />
                <span>ثبت نام</span>
              </button>
            </div>
          </form>

        </div>

        <div className="shapes">
          <div className="shape-1">
            <Image
              src={"/images/main-page/5.png"}
              alt=""
              fill
            />
          </div>
          <div className="shape-2">
            <Image
              src={"/images/main-page/6.png"}
              fill
              alt="" />
          </div>



          <div className="shape-4">
            <Image
              src={"/images/main-page/8.png"}
              fill
              alt="" />
          </div>

          <div className="shape-5">
            <Image
              src={"/images/main-page/9.png"}
              fill
              alt="" />
          </div>
        </div>


      </section>

      <section className="why-us">


        <div className="right">


          <div className="items">
            <div className="item">
              <div className="image">
                <Image
                  src={"/images/main-page/12.svg"}
                  fill
                  alt=""
                />
              </div>
              <div className="info">
                <h2>
                  خرید آسان و مطعمن
                </h2>
                <p>
                  اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <Image
                  src={"/images/main-page/13.svg"}
                  fill
                  alt=""
                />
              </div>
              <div className="info">
                <h2>
                  سریع و آماده تحویل !
                </h2>
                <p>
                  اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                </p>
              </div>
            </div>


            <div className="item">
              <div className="image">
                <Image
                  src={"/images/main-page/14.svg"}
                  fill
                  alt=""
                />
              </div>
              <div className="info">
                <h2>
                  پشتیبانی 24 ساعته
                </h2>
                <p>
                  اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                </p>
              </div>
            </div>


            <div className="item">
              <div className="image">
                <Image
                  src={"/images/main-page/15.svg"}
                  fill
                  alt=""
                />
              </div>
              <div className="info">
                <h2>
                  خرید آسان و مطعمن
                </h2>
                <p>
                  اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                </p>
              </div>
            </div>
          </div>


        </div>


        <div className="left">
          <div className="avatar">
            <Image
              src={"/images/main-page/10.png"}
              fill
              alt=""
            />
          </div>
        </div>

        <div className="shapes">
          <div className="shape-1">
            <Image
              src={"/images/main-page/29.png"}
              alt=""
              fill
            />
          </div>
        </div>

      </section>

      <section className="platforms">




        <div className="header">

          <h1>کدوم پلتفرما هارو نیاز داری ؟</h1>

          <div className="list">
            <div className="item">
              <Image
                src="/images/main-page/21.png"
                alt=""
                fill />
            </div>
            <div className="item">
              <Image
                src="/images/main-page/16.png"
                alt=""
                fill />
            </div>
            <div className="item">
              <Image
                src="/images/main-page/17.png"
                alt=""
                fill />
            </div>
            <div className="item">
              <Image
                src="/images/main-page/18.png"
                alt=""
                fill />
            </div>
            <div className="item">
              <Image
                src="/images/main-page/19.png"
                alt=""
                fill />
            </div>
            <div className="item">
              <Image
                src="/images/main-page/20.png"
                alt=""
                fill />
            </div>
            <div className="item">
              <Image
                src="/images/main-page/16.png"
                alt=""
                fill />
            </div>
          </div>

          <h2>
            ایسنتاگرام
          </h2>

          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>

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

        <div className="shapes">
          <div className="shape-1">
            <Image
              src="/images/main-page/23.png"
              alt=""
              fill />
          </div>

          <div className="shape-2">
            <Image
              src="/images/main-page/24.png"
              alt=""
              fill />
          </div>
        </div>


      </section>

      <section className="top-services">
        <div className="header">
          <div className="right">
            <div className="image">
              <Image
                src="/images/main-page/30.png"
                alt=""
                fill />
            </div>
          </div>
          <div className="left">
            <h1>
              سرویس های
              <span> پرفروش </span>
              و محبوب رو
              امتحان کن و لذت ببر!
            </h1>
            <p>

              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
            </p>
          </div>

        </div>
        <div className="body">
          <div className="item">
            <div className="image">
              <Image
                src="/images/main-page/21.png"
                fill
                alt="" />
            </div>
            <h3>
              سرویس فالوور اینستاگرام واقعی
            </h3>
            <ul>
              <li>سرویس فالوور اینستاگرام واقعی</li>
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
            <div className="price">
              <Iconify icon="solar:bag-5-bold" />
              <span>
                300 <br />
                هزار تومان
              </span>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <Image
                src="/images/main-page/21.png"
                fill
                alt="" />
            </div>
            <h3>
              سرویس فالوور اینستاگرام واقعی
            </h3>
            <ul>
              <li>سرویس فالوور اینستاگرام واقعی</li>
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
            <div className="price">
              <Iconify icon="solar:bag-5-bold" />
              <span>
                300 <br />
                هزار تومان
              </span>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <Image
                src="/images/main-page/21.png"
                fill
                alt="" />
            </div>
            <h3>
              سرویس فالوور اینستاگرام واقعی
            </h3>
            <ul>
              <li>سرویس فالوور اینستاگرام واقعی</li>
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
            <div className="price">
              <Iconify icon="solar:bag-5-bold" />
              <span>
                300 <br />
                هزار تومان
              </span>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <Image
                src="/images/main-page/21.png"
                fill
                alt="" />
            </div>
            <h3>
              سرویس فالوور اینستاگرام واقعی
            </h3>
            <ul>
              <li>سرویس فالوور اینستاگرام واقعی</li>
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
            <div className="price">
              <Iconify icon="solar:bag-5-bold" />
              <span>
                300 <br />
                هزار تومان
              </span>
            </div>
          </div>
        </div>

        <div className="shapes">
          <div className="shape-1">
            <Image
              fill
              alt=""
              src="/images/main-page/31.png" />
          </div>

          <div className="shape-2">
            <Image
              fill
              alt=""
              src="/images/main-page/32.png" />
          </div>

          <div className="shape-3">
            <Image
              src={"/images/main-page/29.png"}
              alt=""
              fill
            />
          </div>
        </div>

      </section>


      <section className="videos">



        <div className="right">
          <Image
            alt=""
            src="/images/main-page/33.png"
            fill
          />
        </div>


        <div className="left">
          <h1>
            آخرین تکنیک‌ها برای افزایش فالوئرها در یوتیوب و شبکه‌های اجتماعی
          </h1>
          <p>
            از آخرین راه‌ها برای افزایش فالوئرها در یوتیوب و شبکه‌های اجتماعی با خبر شوید. به ما بپیوندید و تجربه کنید!
          </p>
          <button>
            <Iconify
              icon="solar:play-bold" />
            <span>
              مشاهده ویدیو ها
            </span>

          </button>
        </div>

      </section>

    </main>
  )
}
