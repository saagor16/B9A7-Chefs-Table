import backgroundImage from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
          <div  className="bg-no-repeat bg-cover w-full rounded-3xl lg:h-[600px] " style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='text-center mt-10 space-y-8 text-white lg:p-[200px] md:p-[100px] leading-5'>
                <h2 className='text-3xl font-bold pt-5'>Discover an exceptional cooking class tailored for you!</h2>
                <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='space-x-8 pb-5'>
                    <button className="btn  bg-green-700 rounded-3xl text-black border-none">Secondary</button>
                    <button className="btn btn-outline  btn-success  rounded-3xl ">Secondary</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;