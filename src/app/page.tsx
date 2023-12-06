import Iconify from "@/components/icon/Iconify";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-page">
      <div className="poster">

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


      </div>
    </main>
  )
}
