import Iconify from '@/components/icon/Iconify'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <ul>
        <Link href={"/"} >
          <span>
            صفحه اصلی
          </span>
          <Iconify icon="ion:home" />
        </Link>
        <Link href={"/auth/login"} >
          <span>
            حساب و پنل کاربری
          </span>
          <Iconify icon="solar:user-bold" />
        </Link>
        <Link href={"/services"} >
          <span>
            سرویس ها
          </span>
          <Iconify icon="pepicons-pencil:internet-circle-filled" />
        </Link>
        <Link href={"/blogs"} >
          <span>
            مقالات
          </span>
          <Iconify icon="fa-solid:blog" />
        </Link>
        <Link href={"/"} >
          <span>
            پرسش ها و پاسخ ها
          </span>
          <Iconify icon="wpf:faq" />
        </Link>
        <Link href={"/contact-us"} >
          <span>
            تماس با ما
          </span>
          <Iconify icon="fluent:person-support-20-filled" />
        </Link>
        <Link href={"/"} >
          <span>
            درباره ما
          </span>
          <Iconify icon="mdi:about" />
        </Link>
      </ul>
    </header>
  )
}
