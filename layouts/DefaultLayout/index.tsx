import dynamic from "next/dynamic";
const Header = dynamic(import('../../components/organisms/Header'))
const DefaultLayout = (Component: any):(props: any) => JSX.Element => {
    const wrapperComponent =  (props: any) => (
        <>
            <Header {...props} />
            <Component {...props} />
        </>
    );
    return wrapperComponent
}
export default DefaultLayout
