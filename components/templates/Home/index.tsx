import dynamic from "next/dynamic";
import {HomeProps} from "./Home.props";

const Banner = dynamic(() =>
    import('../../organisms/Home/Banner')
)
const Advantages = dynamic(() =>
    import('../../organisms/Home/Advantages')
)
const Home = ({homeBanner: {img = '/images/organisms/Home/Banner/banner.jpg',title = '',description = ''},advantages = [],...props}:HomeProps):JSX.Element => {
    return (
      <>
        <Banner {...props} img={img} title={title} description={description} />
        <Advantages {...props} advantages={advantages} />
      </>
    )
}
export default Home
