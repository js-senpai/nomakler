import React from "react";


export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>{
    img: string
    title: string
    description: string
}
