"use client"

import Iconify from "@/components/icon/Iconify"
import Select from 'react-select'



const options = [
    { value: 'سرویس های لایک', label: 'سرویس های لایک' },
    { value: 'سرویس های فالووینگ', label: 'سرویس های فالووینگ' },
    { value: 'سرویس های کامنت', label: 'سرویس های کامنت' }
]

export default function SearchBox() {
    return (
        <section className="search-box">
            <div className="search-input">
                <Iconify icon="ion:search" />
                <input type="text" placeholder="جستجو" />
            </div>


            <div className="filter">
                <Select options={options} placeholder="فیلتر کردن" />

            </div>

        </section>
    )
}
