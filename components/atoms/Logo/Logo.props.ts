import React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement>{
    src: string
    priority?: boolean
}
