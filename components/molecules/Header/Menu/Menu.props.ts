import React from "react";

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement>{
    menu: {
        id: number
        url: string
        text: string
    }[]
}
