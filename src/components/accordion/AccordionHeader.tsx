"use client"








export default function AccordionHeader(props: any) {





    const onToggleClick = () => {
        props.setState(!props.state)
    }






    return (
        <div
            className="accordion-header"
            onClick={() => onToggleClick()}>
            {props.children}
        </div>
    )
}
