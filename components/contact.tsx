import React from 'react'
const Contact = () => {
    return (<div className="background-box"
        style={
            {
                backgroundColor: "#F4F1F1",
                paddingTop: "50px",
                width: "100%",
                height: "auto"
            }
    }>
        <div>
            <div className="flex">
                <div className="flex-1">
                    <div className="flex-none">
                        <img src="logo.jpg" alt="Image"
                            style={
                                {
                                    width: "300px",
                                    height: "82.58px",
                                    paddingLeft: "50px",
                                    float: "left"
                                }
                            }/>
                    </div>
                    <div className="clear-both"/>
                    <div style={
                        {paddingLeft: "50px"}
                    }>
                        <h1 style={
                            {
                                fontFamily: "Poppins",
                                fontSize: "40px",
                                fontWeight: 600,
                                lineHeight: "60px",
                                letterSpacing: "-0.3199999928474426px",
                                textAlign: "left",
                                color: "#5A5A5A"
                            }
                        }>
                            Get in contact,
                            <br/>
                            Stay in touch!
                        </h1>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div style={
                            {
                                fontFamily: "Poppins",
                                fontSize: "24px",
                                fontWeight: 400,
                                lineHeight: "42px",
                                letterSpacing: "-0.32px",
                                textAlign: "left",
                                color: "#5A5A5A"
                            }
                        }
                        className="flex-1">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/features">Our Features</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div style={
                            {
                                fontFamily: "Poppins",
                                fontSize: "32px",
                                fontWeight: 600,
                                lineHeight: "48px",
                                letterSpacing: "-0.29px",
                                textAlign: "left",
                                color: "#7286D3",
                                paddingTop: "20"
                            }
                        }>
                            Contact Us
                        </div>
                        <div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#7286D3" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                </svg>
                                <a href="mailto:sanshelp@gmail.com">sanshelp@gmail.com</a>
                            </div>
                            <br/>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#7286D3" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                </svg>
                                <a href="tel:+9198765421">+91 98765421</a>
                            </div>
                        </div>
                        {/* <div>
            <a href="">sanshelp@gmail.com</a>
            <br />
            <a href="">+91 98765421</a>
          </div> */} </div>
                </div>
            </div>
        </div>
        <div className="pt-5 flex">
            <div className="flex-1">
                <h1 style={
                    {
                        fontFamily: "Poppins",
                        paddingLeft: "50px",
                        fontSize: "32px",
                        fontWeight: 600,
                        lineHeight: "48px",
                        letterSpacing: "-0.29px",
                        textAlign: "left",
                        color: "#7286D3",
                        paddingTop: "20px"
                    }
                }>
                    Follow us on
                </h1>
                <div className='flex pt-4'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='pl-16 ' height="1.5em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='pl-4 ' height="1.5em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='pl-4 ' height="1.5em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='pl-4 ' height="1.5em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </div>
                </div>
                <div style={
                    {
                        display: "flex",
                        paddingLeft: "50px",
                        paddingTop: "10px",
                        alignItems: "center"
                    }
                }>
                    <div style={
                        {
                            display: "flex",
                            marginRight: "10px"
                        }
                    }></div>
                    <div style={
                        {
                            display: "flex",
                            marginRight: "10px"
                        }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <path d="M1376 128q119 0 203.5 84.5T1664 416v960q0 119-84.5 203.5T1376 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T948 666v171H748v232h200v595H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960z"></path>
                        </svg>
                    </div>
                    <div style={
                        {
                            display: "flex",
                            marginRight: "10px"
                        }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> {/* Replace this with your Instagram icon SVG */} </svg>
                    </div>
                    <div style={
                        {display: "flex"}
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> {/* Replace this with your LinkedIn icon SVG */} </svg>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h1 style={
                    {
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontWeight: 600,
                        lineHeight: "48px",
                        letterSpacing: "-0.29px",
                        textAlign: "left",
                        color: "#7286D3",
                        paddingTop: "20"
                    }
                }>
                    Have Questions? Contact Us
                </h1>
                <div className="flex">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600">
                                Your E-Mail
                            </label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600">
                                Any Message
                            </label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <button className="flex mx-auto float-left text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send mail</button>
                </div>
            </div>
        </div>
    </div>);
};
export default Contact;