import React from 'react'

function About() {

    const goals = [
        {
          title: 'Medical Accessories',
          description: 'Sed ut perspiciatis unde omnis wste natsit volup explic',
          iconPath: './images/f-01.png', 
        },
        {
          title: 'Covid - 19 Treatment Center',
          description: 'Sed ut perspiciatis unde omnis wste natsit volup explic',
          iconPath: './images/f-02.png',
        },
        {
          title: '24/7 Hours Emergency Care',
          description: 'Sed ut perspiciatis unde omnis wste natsit volup explic',
          iconPath: './images/f-03.png',
        },
        {
          title: 'Online Free Consultations',
          description: 'Sed ut perspiciatis unde omnis wste natsit volup explic',
          iconPath: './images/f-04.png',
        },
      ];

      const doctors = [
        {
          title: 'DR. Michael Coleman',
          iconPath: './images/dr1.jpg', 
        },
        {
            title: 'Alexander Knowles',
            iconPath: './images/dr2.jpg', 
        },
        {
        title: 'DR. Finley Johnson',
         iconPath: './images/dr3.jpg', 
        }
      ];

  return (
    <div>

    {/* div 01 */}
       <div className="flex flex-col md:flex-row items-center justify-center bg-white mt-[10rem]">
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="./images/about.png" 
          alt="Doctor" 
          className="w-full max-w-md object-cover"
        />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 w-[90%]">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">What Our Client’s Say</h2>
        <p className="text-gray-500 mt-2">
          Sed ut perspiciatis unde omnis iste natus error.
        </p>
        <div className="mt-4 w-[100%] sm:w-[80%]">
          <div className="flex items-center mt-2">
            <span className="text-blue-600 text-xl mr-2">✔</span>
            <span className="text-gray-700 font-semibold">Our Mission & Vision</span>
          </div>
          <p className="text-gray-500 ml-6">
            Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum.
          </p>
        </div>
        <div className="mt-4 w-[100%] sm:w-[80%]">
          <div className="flex items-center mt-2">
            <span className="text-blue-600 text-xl mr-2">✔</span>
            <span className="text-gray-700 font-semibold">Treatment For Covid -19</span>
          </div>
          <p className="text-gray-500 ml-6">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and complete account.
          </p>
        </div>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          MEET WITH DOCTORS +
        </button>
      </div>
    </div>


    {/* div 02 */}

    <div className="py-16 px-4 md:px-8 w-[80%] mx-auto mt-[8rem]">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Main Goals</h2>
        <p className="text-gray-500 mt-2">
          Sed ut perspiciatis unde omnis iste natus error
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {goals.map((goal, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <img src={goal.iconPath} alt={goal.title} className="h-16 w-16" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{goal.title}</h2>
            <p className="text-gray-500 mt-2">{goal.description}</p>
          
          </div>
        ))}
      </div>
    </div>


    {/* div03 */}
    <div className="py-16 px-4 md:px-8 w-[80%] mx-auto mt-[8rem]">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Doctors</h2>
        <p className="text-gray-500 mt-2">
          Sed ut perspiciatis unde omnis iste natus error
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-4">
              <img src={doctor.iconPath} alt="" className="w-[350px] h-[250px]" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 pb-[1rem]">{doctor.title}</h2>
          
          </div>
        ))}
      </div>
    </div>
  
    </div>
  )
}

export default About
