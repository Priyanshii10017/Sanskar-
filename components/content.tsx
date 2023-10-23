import React from 'react';

const Content = () => {
  return (
    <div>
    <section className="text-gray-600 body-font ml-20 mr-20 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img  style={{ width: '288.59px', height: '621.35px', top: '10.37px', left: '12.26px' }} 
          className="object-cover object-center rounded" alt="hero" src="/iPhone 15 Pro Portrait Mockup.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover and Date
            <br className="hidden lg:inline-block"/>
          </h1>
          <p className="mb-8 text-4xl">Imagine a magical doorway to finding friends who share your passions, where you can chat, create groups, and attend social gatherings just like old times, all at your fingertips!.</p>
        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font ml-20 mr-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Emotional Support
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 text-4xl">Introducing WhatsApp Greeting Your easy way to send heartfelt messages to your dear friends on WhatsApp, with ready-made templates that make sharing warm wishes as simple as a warm smile. Connect with your friends and brighten their day effortlessly!</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/iPhone1.svg"/>
    </div>
  </div>
</section>



    <section className="text-gray-600 body-font ml-20 mr-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/iPhone2.svg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Healthcare
            <br className="hidden lg:inline-block"/>
          </h1>s
          <p className="mb-8 text-4xl">Introducing SOS Emergency Your trusted companion in emergencies. With a simple tap, it instantly alerts your chosen contacts (children, friends) with your location, health information, and sounds an alarm, ensuring help is on the way when you need it most.</p>
        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:w-full w-5/6 mx-auto">
      <img className="object-cover object-center rounded text-center" alt="hero" src="/Service.jpg" />
    </div>
  </div>
</section>

    </div>
  
  );
};


export default Content;



