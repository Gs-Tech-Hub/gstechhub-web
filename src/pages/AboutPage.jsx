import React from 'react';
import Spacing from '../components/Spacing';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import AboutStyle4 from '../components/About/AboutStyle4';
import FunFact from '../components/FunFact';
import AboutStyle3 from '../components/About/AboutStyle3';
import IconBoxStyle6 from '../components/IconBox/IconBoxStyle6';
import SectionHeadingStyle5 from '../components/SectionHeading/SectionHeadingStyle5';
import SectionHeading from '../components/SectionHeading';
import TeamSlider from '../components/Slider/TeamSlider';
import Marquee from '../components/Marquee';
import Brands from '../components/Brands';
import { pageTitle } from '../helpers/PageTitle';
const funfactData = [
  { title: 'Happy Customers', number: '22' },
  { title: 'Work’s Completed', number: '120' },
  { title: 'Skilled Team Members', number: '12' },
  { title: 'Most Valuable Awards', number: '1' },
];
const teamData = [
  {
    memberImg: '/images/studio-agency/team_1.jpeg',
    memberName: 'James Berline',
    memberDesignation: 'React Developer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_2.jpeg',
    memberName: 'Bella Zubena',
    memberDesignation: 'Graphic Designer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_3.jpeg',
    memberName: 'Kemnei Alekzend',
    memberDesignation: 'Digital Marketer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_4.jpeg',
    memberName: 'Juliya Jesmine',
    memberDesignation: 'UX Researcher',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_1.jpeg',
    memberName: 'James Berline',
    memberDesignation: 'React Developer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_2.jpeg',
    memberName: 'Bella Zubena',
    memberDesignation: 'Graphic Designer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_3.jpeg',
    memberName: 'Kemnei Alekzend',
    memberDesignation: 'Digital Marketer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_4.jpeg',
    memberName: 'Juliya Jesmine',
    memberDesignation: 'UX Researcher',
    href: '/team/team-details',
  },
];
const brandList = [
  {
    logoSrc: '/images/marketing-agency/brand_1.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_2.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_3.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_4.svg',
    logoAlt: 'Brand',
  },
];
const brandListDark = [
  {
    logoSrc: '/images/marketing-agency/brand_1_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_2_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_3_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_4_dark.svg',
    logoAlt: 'Brand',
  },
];

export default function AboutPage({ darkMode }) {
  pageTitle('About');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Adding value to your business, <br>making it worthy"
        subTitle="About Us"
        variant="text-center"
        shape="shape_1"
      />
      <Spacing lg="75" md="60" />
      <AboutStyle4
        thumbnailSrc="/images/digital-agency/about_1.png"
        miniTitle="Company Info"
        title="We Build Smarter Systems for Nigerian Businesses"
        subTitle="GS Tech Hub specializes in helping businesses like yours scale faster, streamline operations through automation, and attract more customers with cutting-edge technology solutions. Our team is dedicated to understanding your unique challenges and providing tailored strategies that drive growth, enhance customer engagement and much more. GS Tech Hub is your trusted partner for success in the ever-evolving digital landscape."
        btnText="See Our Services"
        btnUrl="/service"
      />
      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>
      <Spacing lg="125" md="70" />
      <AboutStyle3
        variant="cs_type_1"
        thumbnailSrc="/images/digital-agency/about_2.png"
        miniTitle="What We Do"
        title="Best value service provider agency"
        subTitle="Gs Tech Hub transforms how Nigerian businesses operate. From building websites that sell to automating daily tasks, we give you the tools to work smarter, not harder."
        progressBarList={[
          { title: 'Digital Marketing', percentage: '75' },
          { title: 'Brand Strategy', percentage: '85' },
          { title: 'Competitor Analysis', percentage: '95' },
        ]}
        salesTitle="Sales Increase"
        groth="25"
      />
      <Spacing lg="150" md="80" />
      <section className="cs_primary_bg">
        <Spacing lg="140" md="70" />
        <div className="container">
          <SectionHeadingStyle5 title="How we work" />
          <Spacing lg="85" md="45" />
          <div className="cs_working_process_wrap cs_center">
            <div className="cs_working_process">
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_1.png"
                  iconSrc="/images/icons/search.svg"
                  title="We Listen"
                  subTitle="Your challanges are unique, so we start by understanding your goals."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_2.png"
                  iconSrc="/images/icons/idea.svg"
                  title="We Plan"
                  subTitle="Our experts create a customized roadmap tailored to your business."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_3.png"
                  iconSrc="/images/icons/gear.svg"
                  title="We Deliver"
                  subTitle="From setup to training, we handle everything, ensuring you see results fast."
                />
              </div>
            </div>
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>
      {/* <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Meet our experts team behind <br />Gs Tech Hub"
            subTitle="Our Team"
          />
          <Spacing lg="85" md="45" />
        </div>
        <TeamSlider data={teamData} />
      </section> */}
      <Spacing lg="135" md="70" />
      <Spacing lg="84" md="50" />
      <div className="container">
        {/* <Brands data={darkMode ? brandListDark : brandList} /> */}
      </div>
      <Spacing lg="135" md="80" />
    </>
  );
}
