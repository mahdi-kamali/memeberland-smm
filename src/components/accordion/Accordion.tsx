"use client"

import { useEffect, useState } from "react"


interface props {
    children: any,
    className: String,
    defaultActive: Boolean
}


export default function Accordion(
    props: props
) {

    const [state, setState] = useState(props.defaultActive)



    const changed = props.children?.map((item: any) => {
        item.props.state = state;
        item.props.setState = setState;
        return item
    })



    return (
        <div className={`accordion accordion-${state} ${props.className}`}>
            {changed}
        </div>
    )
}
