import dynamic from "next/dynamic";
const Header = dynamic(import('../../components/organisms/Header'))
const Footer = dynamic(import('../../components/organisms/Footer'))
const DefaultLayout = (Component: any):(props: any) => JSX.Element => {
    // @ts-ignore
    const wrapperComponent =  ({header,footer,...props}) => (
        <>
            {Object.keys(header).length ? <Header header={header} />: null}
            <Component {...props} />
            {Object.keys(footer).length ? <Footer footer={footer} />: null}
        </>
    );
    return wrapperComponent
}
export default DefaultLayout
