 'use client';

 import Link from 'next/link';

 const ContactSection = () => {

  const socials = [
    { icon: 'github-icon.svg', path: 'https://github.com/asadullah48' },
    { icon: 'linkedin-icon.svg', path: 'https://www.linkedin.com/in/asadullah-shafique-a00679325/' },
   ];

   return (
    
<section
      id="contact"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
    >
      <div className="wrapper grid  lg:grid-cols-2 grid-cols-1">
        <div className=" bg-transparent rounded-lg overflow-hidden hidden  sm:mr-10 p-10 sm:flex items-end justify-start relative hover:bg-transparent border-[#4b2794] hover:border-4 z-[5]">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 "
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4228.266849250273!2d67.01643927537077!3d24.857416277931318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzI2LjciTiA2N8KwMDEnMDguNSJF!5e1!3m2!1sen!2s!4v1723989186181!5m2!1sen!2s"
            style={{ filter: " contrast(1.2) opacity(0.5)" }}
          />
          <div className="bg-[#00021B] relative hidden sm:flex flex-wrap py-6 rounded shadow-md border-[#4b2794] border-4">
            <div className="lg:w-1/2 px-6 ">
              <h2 className="title-font font-semibold text-gray-200 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-200">
                NorthNazimabad, Karachi.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-200 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-gray-200 leading-relaxed">
                asadullahshafique
              </a>
              <h2 className="title-font font-semibold text-gray-200 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-200">+92-310-2939848</p>
            </div>
          </div>
        </div>

        <div className=" bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 z-[5]">
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500 py-5">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-200">
            Feel free to contact
          </p>
          <form action="https://formspree.io/f/xyzgdylr" method="POST">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent rounded border-2 border-[#4b2794] focus:border-cyan-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent rounded border-2 border-[#4b2794] focus:border-cyan-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subject"
                className="leading-7 text-sm text-gray-200"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-transparent rounded border-2 border-[#4b2794] focus:border-cyan-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-transparent rounded border-2 border-[#4b2794] focus:border-cyan-500 focus:ring-2 focus:ring-purple-500 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                required
              />
            </div>
            <button className="text-white bg-transparent border-4 border-[#4b2794] py-2 px-6 focus:outline-none hover:bg-[#4b2794]  rounded-md text-lg">
              Send Email
            </button>
          </form>
          <p className="text-gray-200 mt-3">
            If you have any question, please feel free to contact here.
          </p>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            preload="false"
            className="w-full h-auto"
            playsInline
            loop
            muted
            autoPlay
            src="/videos/contact-bg.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;




     <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-10'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
       <div className='z-10'>
         <h1 className='text-xl font-bold text-white my-2'>Lets Connect</h1>
        <br></br>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        I am looking to strive for an executive position in a company that promises career growth & development.  I'm a mature team worker & adaptable to all challenging situations. I can work well both in a team environment and using my initiative. I am an enthusiastic, self-motivated & hard-working.
        </p>
       <br></br>
        <div className='socials flex flex-row gap-2'>
        <br></br>
           {socials.map((social, index) => (
             <Link key={index} href={social.path} target='_blank'>
             <img src={`icons/${social.icon}`}
                alt={social.path.split('/')[2]}
                 className='w-6 h-6 hover:brightness-200'
                 style={{ filter: 'brightness(0) invert(1)' }}
               />
             </Link>
           ))}
        </div>
       </div>
       <div>         <form className='flex flex-col' >
           <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
               Your Email
             </label>
            <input
               name='email'
              type='email'
              id='email'
              required
              placeholder='Your email'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
             />
           </div>
           <div className='mb-6'>
             <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
             id='subject'
              required
             placeholder='Just saying hi'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
           </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
             <textarea
             name='message'
              id='message'
             className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
             placeholder="Let's talk about..."
            />
          </div>
          <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
            Send Message
           </button>
         </form>
       </div>
     </section>
   );
 };

 export default ContactSection;
