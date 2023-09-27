import React from 'react';
import About from '../components/About/About';
import heroimage from "../assets/images/heroimage.jpg";
import heroimage2 from "../assets/images/heroimage2.jpg";
import heroimage3 from "../assets/images/heroimage3.jpg";
import image4 from "../assets/images/image4.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import icon4 from "../assets/images/feature.png";
import icon5 from "../assets/images/Ellipse3.png";
import faqimage from "../assets/images/faq-img.png";
import { FaVideo } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServicesList from '../components/Services/ServicesList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/faq/FaqList';



const Home = () => {
  return ( 
  <>

  {/*------- hero section---------*/} 

  <section className='hero__section pt-[50px] 2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        {/*-----------hero content------*/}
    <div>
      <div className='lg:w-[570px]'>
      <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'> We help you live a healthy and longerlife.</h1>
      <p className='text_para'>
      our goal is to make it easier for patients to schedule their medical appointments and to improve their experience as a patient, making it more convenient for them to choose a suitable time to see their doctor. </p>
      <button className='BTN'>Request an Appointment</button>
      </div>
      {/* -----------------hero counter ------------*/}
      <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
        <div>
          <h2 className='text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
            30+
          </h2>
          <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
          </span>
          <p className='text__para'>Years of Experience</p>
        </div>

        <div>
          <h2 className='text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
            15+
          </h2>
          <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>
          </span>
          <p className='text__para'>Clinic Location</p>
        </div>

        <div>
          <h2 className='text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
            100%
          </h2>
          <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
          </span>
          <p className='text__para'>Patients Satisfaction</p>
        </div>
        </div>
        </div>
        {/*------------hero content------------*/}


        <div className='flex gap-[48px] justify-end '>
          <div className='gap-[48px]'>
            <img  src={heroimage} alt="" className='w-full mb-[30px] rounded-[30px]'/>
            <img src={heroimage2} alt="" className='w-full mb-[30px] rounded-[30px]' />
          </div>
          <div className='mt-[38px] gap-[38px]'>
            <img src={heroimage3} alt="" className='w-full mb-[30px] rounded-[30px]' />
            <img src={image4} alt="" className='w-full mb-[30px] rounded-[30px]' />
          </div>
        </div>
      </div>
    </div>
    
  </section>
  {/*------- hero section end---------*/}

  <section>
    <div className='container'>
      <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Providing the best medical services
        </h2>
        <p className='text__para text-center'>world-class care for everyone. Our health systems offers unmatched,expert health care.
        </p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'>
            <img src={icon01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Experience Unmatched Medical Brilliance: Discover Our Exceptional Doctors - Where Expertise Meets Compassion for Unparalleled Care.
              </p>

              <Link to='/doctors'className='w-[44px] h-[44px] rounded-full border border-sold border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
        </div>


          <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'>
            <img src={icon02} alt="" />
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Experience Unmatched Medical Brilliance: Discover Our Exceptional Doctors - Where Expertise Meets Compassion for Unparalleled Care.
              </p>

              <Link to='/doctors'className='w-[44px] h-[44px] rounded-full border border-sold border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
        </div>

    

        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'>
            <img src={icon03} alt="" />
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Experience Unmatched Medical Brilliance: Discover Our Exceptional Doctors - Where Expertise Meets Compassion for Unparalleled Care.
              </p>

              <Link to='/doctors'className='w-[44px] h-[44px] rounded-full border border-sold border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
        </div>

      </div>


      
    </div>
  </section>

  <About>

  </About>
  {/*_______________service section____________*/}
  <section >
    <div className='container'>
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our medical services</h2>
        <p className='text__pare text-center'>
        world-class care for everyone. Our health systems offers unmatched,expert health care.
        </p>
      </div>

      <ServicesList/>
    </div>
  </section>
  {/*_______________service section end ____________*/}

  {/*_______________feature section ____________*/}
  <section>
    <div className='container'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        {/*_______________feature content ____________*/}
        <div className='xl:w-[670px]'>
          <h2 className='heading'>
            Get virtual treatment <br /> anytime.
          </h2>
          <ul className='pl-4'>
            <li className='text__para'>1. Schedule the appointment directly.</li>
            <li className='text__para'> 2. Search for your physician here and contact their office. </li>
            <li className='text__para'>
              3. View our physicians who wre accepting new patients, use the online scheduling tool to select an appointment time.

            </li>

          </ul>
          <Link to ="/"><button className='btn1'>Learn more</button>
          </Link>
        </div>
        
  {/*_______________feature img ____________*/}
  <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
    <img src={icon4} className='w-3/4 rounded-[12px] mt-19' alt="" />
    <div className='w-[150px] lg:w-[248px] bg-white  absolute bottom-[4px] left-12 md:bottom-[8px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[10px] rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[6px] lg:gap-3'>
          <p className='text-[18px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
            Tue,24

          </p>
          <p className='text-[18] leading-[5px] lg:text-[14px] lg:leading-2 text-textColor font-[400]'>
          10:00AM

          </p>


        </div>
        <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
        <FaVideo size={48} color="white " />
        </span>

      </div >

      <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
        consultation
      </div>
      
      <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
        <img src={icon5} alt="" />
        <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
          stephanie johnson
        </h4>
      </div>

    </div>

  </div>
        
      </div>
    </div>
  </section>

  {/*_______________feature section end ____________*/}
    {/*_______________our great doctors ____________*/}
    <section>
      <div className='container'>
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our great doctors</h2>
        <p className='text__pare text-center'>
        world-class care for everyone. Our health systems offers unmatched,expert health care.
        </p>
      </div>

      <DoctorList/>
      </div>
    </section>
    {/*_______________our great doctors ____________*/}
    
    {/*_______________ faq section ____________*/}
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[150px] lg:gap-0'>
          <div className='w-1/2 hidden md:block'><img src={faqimage} alt="" /></div>
        

        <div className='w-full md:w-1/2'>
          <h2 className='heading'>Most Frequently Asked questions by our beloved patients</h2>
        
          <FaqList />
          
          </div>
        </div>
      </div>
    </section>
    {/*_______________ faq section end ____________*/}

      {/*_______________ testimonial ____________*/}
      <section>
        <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>What our patient say</h2>
        <p className='text__pare text-center'>
        world-class care for everyone. Our health systems offers unmatched,expert health care.
        </p>
      </div>
    

        </div>

      </section>
        {/*_______________ testimonial end ____________*/}
  </>
  );
};


export default Home
