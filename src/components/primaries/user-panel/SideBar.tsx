"use client"

import Iconify from "@/components/icon/Iconify"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function SideBar() {

    const [visible, setVisible] = useState(false)
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        if (pathName.includes("/user/dashboard")) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    },
        [pathName])



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

                </ul>
            </aside>
        )
}
