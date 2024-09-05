
import { FaPlay } from "react-icons/fa"

const Hero = () => {
  return (
    <>
        <section className="min-h-[500px] flex justify-center items-center">
            {/*Radial Gradient Section*/}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10" 
                style={{
                    background: 
                        "radial-gradient(circle, rgba(0,0,0,0.3) 50%, rgba(11,11,13,0.5) 70%, rgba(11,11,13,0.8) 90%)"
                }}
            >

            </div>

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
