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
    apartments: {
        id: number | string
        img: string
        verified: boolean
        ready: boolean
        title: string
        sleepingPlaces: number
        shower: number
        dimensions: number
        address: string
        slug: string
        price: number
    }[]

}
