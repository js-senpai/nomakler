import React from "react";

export interface ApartmentsItemProps extends React.HTMLAttributes<HTMLDivElement>{
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
}
