import dynamic from "next/dynamic";
import {HomeProps} from "./Home.props";

const Banner = dynamic(() =>
    import('../../organisms/Home/Banner')
)
const Advantages = dynamic(() =>
    import('../../organisms/Home/Advantages')
)
const ActualApartments = dynamic(() =>
    import('../../organisms/Home/ActualApartments')
)
const Home = ({
                  homeBanner,
                  advantages = [],
                  apartments = [],
                  ...props}:HomeProps):JSX.Element => {
    return (
      <>
        <Banner {...props} img={homeBanner.img} title={homeBanner.title} description={homeBanner.description} />
        <Advantages {...props} advantages={advantages} />
        <ActualApartments apartments={apartments} />
      </>
    )
}
export default Home
