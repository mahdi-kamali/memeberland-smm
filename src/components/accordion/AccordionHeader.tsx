"use client"


interface props {
    children?: any | undefined,
    state?: any,
    setState?: any
}






export default function AccordionHeader(props: props) {



    const onToggleClick = () => {
        console.log("clicked")
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
