import React from "react";

export interface SocialsProps extends React.HTMLAttributes<HTMLUListElement>{
    socials: {
        id: number | string
        url: string
        icon: string
    }[]
}
