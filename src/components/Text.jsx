export const Text = ({order, title, text, color}) => {
  return (
    <div className={`${order} text-center px-6 flex flex-col place-content-around py-6 h-[437px]
                    tablet:h-auto tablet:px-6
                    lg:px-[65px]
                    xl:pl-[165px] xl:pr-[105px] xl:py-[140px] xl:text-left`}>
      <h2 className="font-Fraunces text-[2rem] font-black
                    tablet:text-[1.25rem] 
                    lg:text-[2.5rem]
                    xl:leading-tight">
        {title}
      </h2>
      <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem]
                    tablet:text-[0.8rem] tablet:leading-[1.5rem]
                    lg:text-[18px]">
        {text}
      </p>
      <div className="relative">
        <button className="font-Fraunces uppercase">Learn more</button>
        <div className={`${color} bg-opacity-25 w-[137px] h-[10px] absolute bottom-0 -z-10 rounded-full left-0 right-0 mx-auto 
        xl:mx-0 xl:left-[-10px]`}></div>
      </div>
    </div>
  )
}
