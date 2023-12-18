"use client"

import React, { Children, ReactElement, ReactNode, useState } from "react"

interface AccordionProps {
    className?: string;
    defaultActive: boolean;
    children: ReactNode;
}


const Accordion: React.FC<AccordionProps> = ({
    className,
    defaultActive,
    children,
}) => {
    const [state, setState] = useState<boolean>(defaultActive);


    return (
        <div className={`${className} accordion accordion-${state}`}>
            {React.Children.map(children, (child: any, index) => {
                return React.cloneElement(child, {
                    state,
                    setState,
                    key: index,
                });
            })}
        </div>
    );
};

export default Accordion;