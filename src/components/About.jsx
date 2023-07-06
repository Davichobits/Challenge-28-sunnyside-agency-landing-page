import eggImgMobile from "../assets/images/mobile/image-transform.jpg";
import eggImgDesktop from "../assets/images/desktop/image-transform.jpg";
import glassImgMobile from "../assets/images/mobile/image-stand-out.jpg";
import glassImgDesktop from "../assets/images/desktop/image-stand-out.jpg";

export const About = () => {
  return (
    <section>
      <div className="tablet:grid tablet:grid-cols-2">
        {/* ------- elemento 1 ---------- */}
        <picture className="order-2">
          <source media="(max-width:640px)" srcSet={eggImgMobile} />
          <source media="(min-width:641px)" srcSet={eggImgDesktop} />
          <img src={eggImgMobile} alt="transform image" />
        </picture>

        {/* ------- elemento 2 ---------- */}
        <div className="text-center px-6 order-1 flex flex-col place-content-around py-6 h-[437px]
                        tablet:h-auto tablet:px-6
                        lg:px-[65px]
                        xl:pl-[165px] xl:pr-[105px] xl:py-[140px] xl:text-left">
          <h2 className="font-Fraunces text-[2rem] font-black
                        tablet:text-[1.25rem] 
                        lg:text-[2.5rem]
                        xl:leading-tight">
            Transform your brand
          </h2>
          <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem]
                        tablet:text-[0.8rem] tablet:leading-[1.5rem]
                        lg:text-[18px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="relative">
            <button className="font-Fraunces uppercase">Learn more</button>
            <div className="bg-Yellow bg-opacity-25 w-[137px] h-[10px] absolute bottom-0 -z-10 rounded-full left-0 right-0 mx-auto 
            xl:mx-0 xl:left-[-10px]"></div>
          </div>
        </div>

        {/* ------- elemento 3 ---------- */}
        <picture className="order-3">
          <source media="(max-width:640px)" srcSet={glassImgMobile} />
          <source media="(min-width:641px)" srcSet={glassImgDesktop} />
          <img src={eggImgMobile} alt="transform image" />
        </picture>

        {/* ------- elemento 4 ---------- */}
        <div className="text-center px-6 order-4 flex flex-col place-content-around py-6 h-[437px]
                        tablet:h-auto tablet:px-6
                        lg:px-[65px]
                        xl:pl-[165px] xl:pr-[105px] xl:py-[140px] xl:text-left">
          <h2 className="font-Fraunces text-[2rem] font-black
                        tablet:text-[1.25rem]
                        lg:text-[2.5rem]
                        xl:leading-tight">
            Stand out to the right audience
          </h2>
          <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem]
                      tablet:text-[0.8rem] tablet:leading-[1.5rem]
                      lg:text-[18px]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="relative">
            <button className="font-Fraunces uppercase">Learn more</button>
            <div className="bg-Soft-red bg-opacity-25 w-[137px] h-[10px] absolute bottom-0 -z-10 rounded-full left-0 right-0 mx-auto
            xl:mx-0 xl:left-[-10px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
