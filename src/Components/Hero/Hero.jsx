
import { FaPlay } from "react-icons/fa"

const Hero = () => {
  return (
    <>
        <section className="min-h-[500px] flex justify-center items-center">
            {/*Radial Gradient Section*/}
            <div></div>

            {/*Hero Text Section*/}
            <div className="container relative z-20 text-center space-y-8">
                <h1 className="text-3xl md:text-5xl font-bold font-merriweather">The Great Outdoors</h1>
                <p>Wonder often, wonder Always.</p>
                <div className="inline-flex justify-center items-center border-2 h-14 w-14 rounded-full !mt-12 md:!mt-16">
                    <FaPlay />
                </div>
            </div>
        </section>   
    </>
  )
}

export default Hero
