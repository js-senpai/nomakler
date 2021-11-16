import {ImageLoaderProps} from "next/image";

const customLoader = ({ src, width, quality }:ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};
export default customLoader
