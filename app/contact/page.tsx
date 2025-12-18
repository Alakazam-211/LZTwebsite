'use client';

import Script from 'next/script';
import GeistCard from '@/components/GeistCard';

export default function Contact() {

  // Active employees
  const activeEmployees = [
    {
      name: 'Rosson Long',
      role: 'Co-founder, CEO, & AI-Lead',
      bio: 'A data modeling wizard with a knack for envisioning business models in software. 7 years of Supply Chain experience. Entrepreneur, IT Jedi, AI-Software Dev Chief, Star Wars and Mass Effect diehard.',
      image: '/assets/Rosson_Profile.jpg',
    },
    {
      name: 'Jared Coleman',
      role: 'Lead Developer, Automations Manager',
      bio: 'Software developer and problem solver. Passionate about all forms of communication, fluent in 3 spoken languages and many more coding ones. Love to explore the language of the heart and mind through music and games.',
      image: 'https://static.wixstatic.com/media/e86beb_a86231860cb14f1782af13079876abd5~mv2.jpeg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0137.jpeg',
    },
    {
      name: 'Jeremie Reese',
      role: 'Lead Developer, Head of Morale & Hydration',
      bio: 'Writes, integrates, and validates automations. As the head of Morale and Hydration, he is a charming quipster and a bastion against thirst. Never visits the office.',
      image: 'https://static.wixstatic.com/media/e86beb_28e34f3bce41406bbbf455efdef05508~mv2.jpg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/61946459add8cc4be267a2fb_20210727_113346.jpg',
    },
    {
      name: 'Baden Ballard',
      role: 'COO - Lead NoCode Designer & CASA Regional Manager',
      bio: 'Entrepreneur with an MBA and a knack for web development. Co-founder of Atticusshop.com. Born to whitewater kayak and raised to rock climb.',
      image: 'https://static.wixstatic.com/media/e86beb_7a26a41f6003467b819552e30590e038~mv2.jpg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/619465e93f28a649da713860_tempImageTSymDA.jpg',
    },
  ];

  // Graduated employees
  const graduatedEmployees = [
    {
      name: 'Sterling Long',
      role: 'Co-Founder, Co-CEO, Chump, Lead Developer',
      period: 'From 2018 to 2022',
      bio: 'Programmer extraordinaire. I love learning new things. Currently developing beautiful blockchain solutions, also known as B.S. This is similar to an educational BS, which is only slightly better than the card game.',
      image: 'https://static.wixstatic.com/media/e86beb_f8ead55e0c61450b8312e1ba29ebc506~mv2.png/v1/fill/w_275,h_275,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/61945017f4ef396b3a4b10fb_Sterling%20Work%20Selfie.png',
    },
    {
      name: 'Eric Steadman',
      role: 'Head of Cryptography',
      period: 'From 2018 to 2021',
      bio: 'Mathematician and full-stack dev. I raze obstacles that others gawk at. I also like complicated games like D&D and MTG, as well as random stuff like dancing and cooking.',
      image: 'https://static.wixstatic.com/media/e86beb_8dc683f3ea3b46349a1f75e55fee6493~mv2.jpg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/619463638502a4d89feaaeb3_P1010435_JPG.jpg',
    },
    {
      name: 'Reese Harper',
      role: 'Developer',
      period: '2020',
      bio: "I love anything and everything IT. I've been working in the industry professionally for almost 5 years now and have loved every minute of it. Fluent in Mandarin, and am an avid lover of Music, medieval weaponry and video games.",
      image: 'https://static.wixstatic.com/media/e86beb_26e748ff380a429aa67e9a900244890d~mv2.jpg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20220926_125642_edited.jpg',
    },
    {
      name: 'Jordan Williamson',
      role: 'Developer, Lead UI & UX',
      period: 'From 2020 to 2022',
      bio: 'Quickbase certified and ready to kick ass. Web dev and making things look pretty is the name of the game. My pastimes are basketball, enjoying a snack/beverage, or playing a stress-inducing game.',
      image: 'https://static.wixstatic.com/media/e86beb_7df2e7703398430c924f107b0cfb0e41~mv2.jpg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/619459de8d13490901699d8a_tempImagegZQxGj.jpg',
    },
    {
      name: 'Jose Juarez',
      role: 'Software Sales & Deployment',
      period: 'From 2022 to 2023',
      bio: "An expert in learning with a focus in technology and communication. I'm an Electronic Engineer who fell in love with art, so he added a Master's in Marketing to his bag. Life purpose: To Help.",
      image: 'https://static.wixstatic.com/media/e86beb_30216674eb094912b69fac454491fe20~mv2.jpg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jose%20Juarez-IT_edited.jpg',
    },
    {
      name: 'Lancelot Reese',
      role: 'CFO, Lead Developer',
      bio: 'An easy-going jokester that enjoys day trading, gaming, and finance. He also enjoys some crazy stuff like parkour and fire breathing and is one of our developers and writers.',
      image: 'https://static.wixstatic.com/media/af5a7c_2877342eaeac41d3ad6cfdfced957ddd~mv2.jpeg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Profile_Pic_Lancelot.jpeg',
    },
    {
      name: 'Jessica Long',
      role: 'Software Deployment',
      bio: 'I believe that people should take advantage of technology and education so they can spend more time knitting, going to brunch, hiking, traveling, creating, and yes filmmaking.',
      image: 'https://static.wixstatic.com/media/e86beb_0d92d96e74f5488f8c91b41495465e64~mv2.jpeg/v1/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3E0A003C-6D5C-4246-8A53-BB95D405A65E.jpeg',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl grid-container relative">
        {/* Header */}
        <div className="col-span-full text-center mb-12">
          <h1 className="text-heading-48 mb-4">Contact Us</h1>
          <p className="text-copy-18">
            Get in touch with our team. We&apos;re here to help with your hosting needs.
          </p>
        </div>

        {/* Newspaper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* About LZTEK - Large article spanning 2 columns */}
          <GeistCard className="p-6 md:col-span-2">
            <h2 className="text-heading-32 mb-4">About LZTEK</h2>
            <div className="space-y-3 text-copy-14">
              <p>
                Hi! I&apos;m Rosson Long. Back in 2017, I noticed that managing big supply chains in China 
                with little to no real-time data led to large costly mistakes.
              </p>
              <p>
                I traveled to China and within 4 months using NoCode software, I built a solution 
                that fixed the problems and gave each company the information transparency they needed 
                to make effective decisions, saving them hundreds of thousands each year.
              </p>
              <p>
                I recognize that finding the right business tool often gets in the way of what is important: 
                Your business and the actionable information you need to run it. Skip the software hunt and 
                create a bespoke solution that matches your needs. Build based on your business processes, 
                identify your actionable information, and get a tailored solution.
              </p>
              <p>
                Today, LZTEK specializes in hosting and deployment services, helping businesses 
                deploy their applications to leading platforms and app stores. We bring the same 
                dedication to quality and efficiency to every project.
              </p>
            </div>
          </GeistCard>

          {/* Contact Form - Right column */}
          <GeistCard className="p-0">
            <div className="p-6 pb-0">
              <h2 className="text-heading-24 mb-4">Send us a Message</h2>
            </div>
            <div 
              style={{width:'100%',height:'500px'}} 
              data-fillout-id="v8C266sFx1us" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize 
              data-fillout-domain="forms.discover-nocode.com"
            ></div>
            <div className="p-6 pt-0"></div>
            <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
          </GeistCard>

          {/* Mission and Culture - Full width, 50-50 split */}
          <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission - Left 50% */}
            <GeistCard className="p-6">
              <h2 className="text-heading-24 mb-4">Our Mission</h2>
              <div className="space-y-3 text-copy-14">
                <p>
                  Landing Zone Technology, LZTEK, strives to be a launching pad for both clients and employees 
                  where people and companies, like aircraft, can not only land but also take flight towards their 
                  goals. We focus on building advanced software solutions based on <strong>real world</strong> operating 
                  conditions and collaborate closely with you to build the solution you need.
                </p>
                <p>
                  As an agile, flexible development team, LZTEK focuses on fast, easy to deploy, and affordable 
                  software solutions. We utilize low-code platforms and programming to meet the needs of our clients 
                  quickly. Our team eliminates repetitive work, creates intuitive tools, and evolves workflows so 
                  that you can focus on what matters: your bottom line.
                </p>
              </div>
            </GeistCard>

            {/* Culture - Right 50% */}
            <GeistCard className="p-6">
              <h2 className="text-heading-24 mb-4">Our Culture</h2>
              <div className="space-y-3 text-copy-14">
                <p>
                  Fellowshipping one another and allowing each other the freedom to tackle new challenges are the 
                  key principles we employ here at LZTEK to help us grow individually and as a team. We regularly 
                  leave our comfort zones as developers to learn new industries outside of our own to better meet 
                  the needs of those relying on us.
                </p>
                <p>
                  We strive to foster a culture of team responsibility. We don&apos;t point fingers, we lift each other 
                  up and fail forward as we learn. At LZTEK we are all members of a whole. Individually none of us 
                  could accomplish what we are able to do together as a team.
                </p>
                <p className="italic text-copy-12">
                  &quot;If you want to go fast, go alone. If you want to go far, go together.&quot;
                </p>
              </div>
            </GeistCard>
          </div>

          {/* Values - Full width spanning 3 columns */}
          <GeistCard className="p-6 col-span-full">
            <h2 className="text-heading-32 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-heading-16 mb-2">1. Trust</h3>
                <p className="text-copy-14">
                  We trust and respect each other at a level that allows for critical discourse without defensiveness.
                </p>
              </div>
              <div>
                <h3 className="text-heading-16 mb-2">2. Empowerment</h3>
                <p className="text-copy-14">
                  We empower each team member to innovate and work autonomously within their sphere of influence.
                </p>
              </div>
              <div>
                <h3 className="text-heading-16 mb-2">3. Humility</h3>
                <p className="text-copy-14">
                  We understand that we can always improve and learn from other team members and competitors.
                </p>
              </div>
              <div>
                <h3 className="text-heading-16 mb-2">4. Education</h3>
                <p className="text-copy-14">
                  We proactively rise to meet the demands of our work by dedicating time to learn each industry 
                  that we work in.
                </p>
              </div>
            </div>
          </GeistCard>

          {/* Team - Full width spanning 3 columns */}
          <GeistCard className="p-6 col-span-full">
            <h2 className="text-heading-32 mb-6">Our Team</h2>
            
            {/* Active Employees */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeEmployees.map((employee, index) => (
                  <GeistCard key={index} className="p-4">
                    <div className="flex gap-4 mb-3">
                      <div className="w-24 h-24 flex-shrink-0 border border-gray-300">
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-heading-16 mb-1 font-semibold">{employee.name}</h4>
                        <p className="text-label-12 text-gray-600">{employee.role}</p>
                      </div>
                    </div>
                    <p className="text-copy-13">{employee.bio}</p>
                  </GeistCard>
                ))}
              </div>
            </div>

            {/* Graduated Employees */}
            <div>
              <h3 className="text-heading-24 mb-4">Graduates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {graduatedEmployees.map((employee, index) => (
                  <GeistCard key={index} className="p-4">
                    <div className="flex gap-4 mb-3">
                      <div className="w-24 h-24 flex-shrink-0 border border-gray-300">
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-heading-16 mb-1 font-semibold">{employee.name}</h4>
                        <p className="text-label-12 text-gray-600 mb-1">{employee.role}</p>
                        {employee.period && (
                          <p className="text-label-12 text-gray-500">{employee.period}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-copy-13">{employee.bio}</p>
                  </GeistCard>
                ))}
              </div>
            </div>
          </GeistCard>
        </div>
      </div>
    </div>
  );
}
