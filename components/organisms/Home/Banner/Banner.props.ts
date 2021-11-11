import React from "react";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>{
    homeBanner: {
        img: string
        title: string
        description: string
    }

}
