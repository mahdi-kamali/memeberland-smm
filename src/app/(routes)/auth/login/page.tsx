import Iconify from "@/components/icon/Iconify";
import Image from "next/image";

export default function page() {
    return (
        <main className="login-page">
            <div className="right">
                <form action="#">
                    <div className="header">
                        <div className="avatar">
                            <Image
                                alt=""
                                width={150}
                                height={150}
                                src="/images/login/3.png" />
                        </div>
                        <div className="info">
                            <button className="item-true">
                                <span>ورود کاربری</span>
                                <Iconify icon="material-symbols:login" />
                            </button>
                            <button>
                                <span>ثبت نام</span>
                                <Iconify icon="mdi:register" />
                            </button>
                        </div>
                    </div>
                    <div className="body">
                        <p>
                            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است
                        </p>
                        <div className="inputs">
                            <div className="form-group">
                                <Iconify icon="tabler:user-filled" />
                                <input type="text" placeholder="نام کاربری" />
                            </div>
                            <div className="form-group">
                                <Iconify icon="mdi:password" />
                                <input type="password" placeholder="گذرواژه" />
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="need-help">
                            مشکل در ورود دارید ؟ کلیک کنید.
                        </button>
                        <button className="submit">
                            ورود
                        </button>

                    </div>
                </form>
            </div>
            <div className="left">
                <div className="image">
                    <Image
                        src="/images/login/2.png"
                        alt=""
                        fill />
                </div>
            </div>

        </main>
    )
}
