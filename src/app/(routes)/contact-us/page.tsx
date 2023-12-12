import Iconify from "@/components/icon/Iconify";
import Image from "next/image";

export default function page() {
    return (
        <main className="contact-us">
            <div className="background">
            </div>

            <form action="#">


                <div className="form-header">
                    <h1>
                        تیم 24 ساعته ممبرلند <br/>
                        آماده پاسخگوشی به تمامیه <br/>

                        <span>
                            <small>مشکلات</small>
                        </span>
                        شما هستیم.
                    </h1>

                    <p>
                        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است.
                    </p>
                </div>

                <div className="form-body">
                    <div className="form-group">
                        <input type="text" placeholder="نام و نام خانوادگی" />
                        <Iconify icon="mdi:user" />
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="ایمیل" />
                        <Iconify icon="entypo:email" />
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="شماره تماس" />
                        <Iconify icon="bi:phone-fill" />
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="موضوع" />
                        <Iconify icon="material-symbols:subject-rounded" />
                    </div>

                    <div className="form-group message">
                        <textarea  
                        cols={10}
                        rows={8}
                        placeholder="متن پیام شما" />
                        <Iconify icon="ic:baseline-message" />
                    </div>

                </div>

                <div className="form-buttons">
                    <button>
                        <span>
                            ثبت پیام
                        </span>
                    </button>
                </div>



            </form>

        </main>
    )
}
