import React from "react";
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>{
    header: {
        menu: {
            id: number
            url: string
            text: string
        }[]
        src: string
    }

}
