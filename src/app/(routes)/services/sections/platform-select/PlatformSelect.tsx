"use client"

import Image from "next/image";






export default function PlatformSelect() {
    return (
        <section className="platform-select">

            <div className="platforms">
                <div className="header">

                    <h1>
                        پلتفرم رو اول اتخاب کن !
                    </h1>

                    <div className="list">
                        <div className="item item-true">
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
            </div>
        </section>
    )
}
