/* eslint-disable react/prop-types */


const Function = ({cardData,handleClick}) => {
    

    return (
        <div>
            <div className="card lg:w-[420px] md:w-[420px] bg-base-100 shadow-xl h-full">
                 <figure><img className=" rounded-3xl p-5" src={cardData.image} alt="food" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-xl font-bold">{cardData.name}</h2>
                    <p>{cardData.description}</p>
                    <hr />
                    <div className="space-y-3 pl-5">
                        <h2 className="font-bold text-xl">Ingredients:<span>{cardData.ingredients.length}</span></h2>
                        <div className="">
                        <ul className="space-y-2   list-disc">
                            <li>{cardData.ingredients[0]}</li>
                            <li>{cardData.ingredients[1]}</li>
                            <li>{cardData.ingredients[2]}</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="flex space-x-16">
                        <div className="flex gap-2
                         items-center">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                            <p>{cardData.time}</p>
                        </div>
                        <div className="flex gap-2
                         items-center">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"/></svg>
                            <p>{cardData.calories}</p>
                        </div>
                    </div>
                    <div className="card-actions mt-4">
                    <button onClick={()=>handleClick(cardData)} className="btn btn-primary rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Function;