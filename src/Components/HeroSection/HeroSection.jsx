import { Avatar, Rating } from "flowbite-react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="bg-hero  flex items-center py-14">
      <div className="container flex lg:flex-row flex-col justify-between items-center">
        {/* hero section text */}
        <div className="  flex-1 ">
          <h1 className="text-[50px] md:text-[60px]  lg:text-[83px] 2xl:text-[90px] leading-none md:leading-[60px] lg:leading-[86px] font-Grotesk font-semibold text-secondary">
            Hire consultant{" "}
            <span className="text-primary">for boost your business</span>
          </h1>
          <p className="description mt-5 mb-6 2xl:mb-10">
            Consultancy firm established by professionals with the intention to
            identify and unlock potential avenues for innovative ideas
          </p>
          <button className="btn-primary flex items-center justify-center space-x-3">
            Discover More <GoArrowUpRight />
          </button>

          <div className="mt-[50px] flex items-center space-x-5">
            <Avatar.Group>
              <Avatar img="/Ellipse1.png" rounded stacked />
              <Avatar img="/Ellipse2.png" rounded stacked />
              <Avatar img="/Ellipse3.png" rounded stacked />
              <Avatar img="/Ellipse1.png" rounded stacked />
            </Avatar.Group>
            <div>
              <Rating>
                <span className="text-[26px] font-semibold text-secondary  ">
                  4.9
                </span>
                <span className="text-primary ml-2 mr-2 font-bold">|</span>
                <Rating.Star className="text-secondary" />
                <Rating.Star className="text-secondary" />
                <Rating.Star className="text-secondary" />
                <Rating.Star className="text-secondary" />
                <Rating.Star className="text-secondary" />
              </Rating>
              <h3 className="text-[18px] font-semibold">325k Total Review</h3>
            </div>
          </div>
        </div>
        {/* hero section image */}
        <div className="flex-1 justify-center flex">
          <div className="relative">
            <img
              src="/Card.png"
              className="hidden lg:block absolute lg:top-[55px]  lg:-right-[50px] h-[160px] w-[274px]"
              alt=""
            />

            <div className="m-10 z-10">
              <div className="  bg-[url('/Rectangle.png')] lg:w-[500px] bg-cover bg-no-repeat ">
                <div className="border-4 border-secondary lg:w-[501px] ">
                  <img
                    src="/_Portrait Image.png"
                    className="w-[450px] z-50"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <img
              src="/groth.png"
              alt=""
              className="hidden lg:block absolute lg:-bottom-6 lg:-left-20 lg:h-[210px] lg:w-[3
                00px] 2xl:h-[250px] 2xl:w-[3
                50px]"
            />
            <img
              src="/Dotted_Element1.png"
              className="hidden lg:block absolute lg:bottom-3 lg:right-2  w-[100px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
