import Iconify from '@/components/icon/Iconify'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer>

            
            <div className="header">
                <div className="right">
                    <Image
                        src="/images/main-page/39.png"
                        fill
                        alt='' />
                </div>
                <h2 className="left">
                    ممبرلند: همیشه با شما، راهی ساده به سوی رشد در فضای اجتماعی.
                </h2>
            </div>
            <div className="social-links">
                <div className="item">
                    <Iconify
                        icon="teenyicons:instagram-solid" />
                    <span>
                        www.member-land.com
                    </span>
                </div>
                <div className="item">
                    <Iconify
                        icon="teenyicons:instagram-solid" />
                    <span>
                        www.member-land.com
                    </span>
                </div>
                <div className="item">
                    <Iconify
                        icon="teenyicons:instagram-solid" />
                    <span>
                        www.member-land.com
                    </span>
                </div>
            </div>
            <div className="lists">
                <ul>
                    <h1>
                        پشتیبانی
                    </h1>

                    <li>
                        مستندات API
                    </li>
                    <li>
                        تیکت ها
                    </li>
                    <li>
                        شرایط و حقوق کاربران
                    </li>
                    <li>
                        حریم خصوصی
                    </li>
                </ul>
                <ul>
                    <h1>
                        پشتیبانی
                    </h1>

                    <li>
                        مستندات API
                    </li>
                    <li>
                        تیکت ها
                    </li>
                    <li>
                        شرایط و حقوق کاربران
                    </li>
                    <li>
                        حریم خصوصی
                    </li>
                </ul>
                <ul>
                    <h1>
                        پشتیبانی
                    </h1>

                    <li>
                        مستندات API
                    </li>
                    <li>
                        تیکت ها
                    </li>
                    <li>
                        شرایط و حقوق کاربران
                    </li>
                    <li>
                        حریم خصوصی
                    </li>
                </ul>
            </div>
            <div className="rocket">
                <Image
                    src="/images/main-page/40.png"
                    alt=''
                    fill />
            </div>
        </footer>
    )
}
