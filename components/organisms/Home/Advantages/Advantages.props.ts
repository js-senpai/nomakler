import React from "react";

export interface AdvantagesProps extends React.HTMLAttributes<HTMLDivElement> {
    advantages: {
        id: number | string
        img: string
        title: string
        description: string
    }[]

}
