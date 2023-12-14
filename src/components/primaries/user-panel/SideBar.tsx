"use client"

import Iconify from "@/components/icon/Iconify"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function SideBar() {

    const [visible, setVisible] = useState(false)
    const router = useRouter()
    const pathName = usePathname()



    const menuList = [
        {
            title: "فعالیت ها",
            link: "statistics",
            icon: "wpf:statistics"
        },
        {
            title: "افزودن اعتبار",
            link: "add-found",
            icon: "solar:dollar-bold"
        },
        {
            title: "سفارش جدید",
            link: "new-order",
            icon: "fluent:tab-new-24-filled"
        },
        {
            title: "سفارش دسته‌ای",
            link: "mass-order",
            icon: "material-symbols:order-play"
        },
        {
            title: "تاریخچه سفارشات",
            link: "orders-history",
            icon: "ph:bag-fill"
        },
        {
            title: "تیکت‌ها",
            link: "tickets",
            icon: "ion:ticket-sharp"
        },
        {
            title: "پنل فرعی",
            link: "child-panel",
            icon: "material-symbols:left-panel-open-sharp"
        },
        {
            title: "به‌روزرسانی‌ها",
            link: "updates",
            icon: "dashicons:update-alt"
        },
        {
            title: "API",
            link: "api",
            icon: "ant-design:api-filled"
        },
        {
            title: "اعتبار رایگان",
            link: "free-credit",
            icon: "mdi:credit-card"
        },
        {
            title: "آموزش‌ها",
            link: "tutorials",
            icon: "fluent:learning-app-24-filled"
        },
        {
            title: "همکاران",
            link: "affiliates",
            icon: "dashicons:update-alt"
        },
        {
            title: "تنظیمات",
            link: "setting",
            icon: "ant-design:setting-filled"
        },
        {
            title: "خانه",
            link: "home",
            icon: "material-symbols:home",
            type: "click"
        }
    ];




    const [selectedMenu, setSelectedMenu] = useState(menuList[0])




    useEffect(() => {
        if (pathName.includes("/user/dashboard")) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    },
        [pathName])

    useEffect(() => {
        if (!visible) return
        router.push(selectedMenu.link)
    }, [selectedMenu])



    if (visible)
        return (
            <aside className="user-panel-sidebar">

                <div className="user">

                    <div className="right">
                        <Image
                            src="/images/user/dashboard/3.png"
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>

                    <div className="left">
                        <h2>
                            <Iconify icon="tabler:user-filled" />
                            <span>
                                مریم جلالی
                            </span>
                        </h2>
                        <small>
                            <Iconify icon="mingcute:vip-2-fill" />
                            <span>
                                کاربر عادی
                            </span>
                        </small>
                    </div>

                </div>

                <ul>
                    {
                        menuList.map((item, index) => {
                            return <li
                                className={`item-${selectedMenu.title === item.title}`}
                                key={index}
                                onClick={() => {
                                    setSelectedMenu(item)
                                }}
                            >
                                <Iconify icon={item.icon} />
                                <span>
                                    {item.title}
                                </span>
                            </li>
                        })
                    }
                </ul>
            </aside>
        )
}
