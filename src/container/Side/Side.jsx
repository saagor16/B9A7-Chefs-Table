/* eslint-disable react/prop-types */


const Side = () => {
    return (
        <div>
            <div className='space-y-10 mt-10  '>

              <div className="grid rounded-2xl bg-gray-400 ">
                <h2 className='text-center text-xl font-bold space-y-5 mb-5 mt-5'>Want to cook: 00</h2> <hr />
                <div className="table opacity-65 ">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </div>
                <div className="table opacity-65 ">
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </div>
              </div>

              <div>
                <div className="grid rounded-2xl bg-gray-400">
                  <h2 className='text-center text-xl font-bold space-y-5 mb-5 mt-5'>Want to cook: 00</h2> <hr />
                  <div className="table opacity-65">
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </div>
                  <div className="table opacity-65">
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Side;