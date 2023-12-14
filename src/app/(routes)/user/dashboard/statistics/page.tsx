import Iconify from "@/components/icon/Iconify";
import Image from "next/image";
import ActiveServices from "./sections/active-services/ActiveServices";
import Events from "./sections/events/Events";

export default function page() {




    return (
        <main className="statistics-page user-panel">

            <section className="quick-views">
                <div className="item">
                    <div className="left">
                        <Iconify icon="eva:done-all-outline" />
                    </div>
                    <div className="right">
                        <div className="header">
                            تمامیه سفارشات
                        </div>
                        <div className="body">
                            {1200}
                        </div>
                    </div>


                </div>
                <div className="item">
                    <div className="left">
                        <Iconify icon="ph:bag-fill" />
                    </div>
                    <div className="right">
                        <div className="header">
                            مجموع خریدها
                        </div>
                        <div className="body">
                            ${1222}
                        </div>
                    </div>


                </div>
                <div className="item">
                    <div className="left">
                        <Iconify icon="heroicons-solid:cash" />
                    </div>
                    <div className="right">
                        <div className="header">
                            موجودی حساب
                        </div>
                        <div className="body">
                            {1000000}
                            <small> تومان  </small>
                        </div>
                    </div>


                </div>
                <div className="item">
                    <div className="left">
                        <Iconify icon="mdi:notifications-active" />
                    </div>
                    <div className="right">
                        <div className="header">
                            سفارشات فعال
                        </div>
                        <div className="body">
                            {12222}
                        </div>
                    </div>


                </div>
            </section>


            <ActiveServices />

            <Events />


            <div className="shapes">
                <div className="shape-1">
                    <Image
                        src="/images/user/dashboard/4.png"
                        fill
                        alt="" />
                </div>
            </div>

        </main>
    )
}
