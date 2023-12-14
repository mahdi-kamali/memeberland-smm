"use client"



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import Image from "next/image";
import { useEffect, useState } from "react";



import { CircularProgressbar, buildStyles } from "react-circular-progressbar";







export default function ActiveServices() {



    const platforms = [
        {
            name: "تلگرام",
            icon: "/images/user/dashboard/12.png",
            services: [
                {
                    name: "سرویس فالوور",
                    percentage: 50,
                    status: "در حال انجام"
                },
                {
                    name: "سرویس لایک",
                    percentage: 75,
                    status: "انجام شده"
                },
                {
                    name: "سرویس پیام",
                    percentage: 30,
                    status: "در حال انجام"
                }
            ]
        },
        {
            name: "اینستاگرام",
            icon: "/images/user/dashboard/8.png",
            services: [
                {
                    name: "سرویس پست",
                    percentage: 80,
                    status: "انجام شده"
                },
                {
                    name: "سرویس دایرکت",
                    percentage: 60,
                    status: "در حال انجام"
                }
            ]
        },
        {
            name: "توییتر",
            icon: "/images/user/dashboard/13.png",
            services: [
                {
                    name: "سرویس ریتوییت",
                    percentage: 40,
                    status: "در حال انجام"
                },
                {
                    name: "سرویس توییت",
                    percentage: 90,
                    status: "انجام شده"
                }
            ]
        }
    ];

    const [selectedPaltform, setSelectedPlatform] = useState(platforms[0])


    useEffect(() => {

    }, [])


    return (
        <section className="active-services">

            <h2>سرویس های فعال</h2>
            <div className="platforms">
                {
                    platforms.map((item, index) => {
                        return <button
                            key={index}
                            onClick={() => {
                                setSelectedPlatform(item)
                            }}
                            className={`item item-${selectedPaltform.name === item.name}`}
                        >
                            <div className="title">
                                {item.name}
                            </div>
                            <div className="image">
                                <Image
                                    src={item.icon}
                                    width={50}
                                    height={50}
                                    alt="" />
                            </div>

                        </button>
                    })
                }
            </div>
            <div className="services">

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide key={0}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={1}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={5}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={6}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={7}>
                        <div className="item">
                            <div className="item-header">
                                <CircularProgressbar
                                    className="progresser"
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0,
                                        strokeLinecap: 'round',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `white`,
                                        textColor: 'white',
                                        trailColor: 'rgba(0,0,0,0.1)'
                                    })}
                                />
                            </div>
                            <div className="item-body">
                                <h3>
                                    نام سرویس
                                </h3>
                                <span>در حال انجام</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>



            </div>
        </section>
    )
}
