import backgroundImage from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
          <div  className="bg-no-repeat bg-cover lg:w-full rounded-3xl lg:h-[760px]" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='text-center mt-10 space-y-8 text-white lg:p-[200px] md:p-[100px] leading-5'>
                <h2 className='lg:text-4xl font-bold pt-8'>Online Cooking Classes
                Recipe Calories here <br /> to make  cooking simple for you!</h2>
                <p className='pt-2 text-xl '>Join Recipe Calories for an immersive and interactive online cooking experience via Zoom, right from the comfort of your <br /> own home.Cook with  step through easy-to-follow Recipe Calories recipes.</p>
                <div className='lg:space-x-10 pt-5 pb-4 space-x-4 '>
                    <button className="btn  bg-green-700 rounded-3xl text-black border-none lg:w-40">Explore Now</button>
                    <button className="btn btn-outline  btn-success border-white  rounded-3xl lg:w-40"><span className='text-white'>Our Feedback</span></button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;