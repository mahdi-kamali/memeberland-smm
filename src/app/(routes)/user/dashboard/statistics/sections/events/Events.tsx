"use client"

import Iconify from '@/components/icon/Iconify';
import { VerticalTimeline, VerticalTimelineElement } from
    'react-vertical-timeline-component';



export default function Events() {




    const data = {
        status: "success",
        updateAt: "1702567944",
        header: "اومی",
        body: "tqetqt"
    }


    function icon() {
        switch (data.status) {
            case "On Progress": { return "fluent-mdl2:processing"; }
            case "success": { return "ep:success-filled" }
            case "error": { return "material-symbols:error" }
        }
    }


    function className() {
        switch (data.status) {
            case "On Progress": { return "warning"; }
            case "success": { return "success" }
            case "error": { return "danger" }
        }
    }

    function getDate() {
        let date = new Date(data.updateAt);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //janvier = 0
        let yyyy = date.getFullYear();

        return `${yyyy}-${mm}-${dd}`;
    }

    function getTime() {
        let date = new Date(data.updateAt);
        var minutes = date.getMinutes();
        var hours = date.getHours();

        return hours + ':' + minutes;
    }








    return (
        <section className="events">
            <h2>آخرین فعالیت ها</h2>
            <div className="body">
                <VerticalTimeline >

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={""}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={""}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={""}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    )
}
