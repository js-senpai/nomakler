import React from "react";

export interface HomeProps extends React.HTMLAttributes<HTMLDivElement>{
    homeBanner: {
        img: string
        title: string
        description: string
    }
    advantages: {
        id: number | string
        img: string
        title: string
        description: string
    }[]
}
