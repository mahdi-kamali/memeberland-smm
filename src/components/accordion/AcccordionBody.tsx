
"use client"
interface props {
    children: any,
}



export default function AcccordionBody(props: props) {




    return (
        <div className="accordion-body">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
