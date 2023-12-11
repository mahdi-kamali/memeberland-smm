import Image from "next/image";
import TopSales from "./sections/top-sales/TopSales";










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
        
        </main>
    )
}
