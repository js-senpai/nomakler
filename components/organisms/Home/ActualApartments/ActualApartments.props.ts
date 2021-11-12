import React from "react";

export interface ActualApartmentsProps extends React.HTMLAttributes<HTMLDivElement>{
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
