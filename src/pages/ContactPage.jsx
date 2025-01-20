import React from 'react';
import Spacing from '../components/Spacing';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import { pageTitle } from '../helpers/PageTitle';
import HubspotContactForm from '../components/Forms/hubSpotContactForm';

export default function ContactPage() {
  pageTitle('Contact');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Get in touch for more <br/>information and support"
        subTitle="Contact"
        shape="shape_6"
      />
      <Spacing lg="75" md="60" />
      <section>
        <div className="container">
          <div className="row align-items-center cs_gap_y_45">
            <div className="col-lg-6">
              <h2 className="cs_fs_50">
                Come & visit <br />
                our place!
              </h2>
              <div className="cs_height_55 cs_height_lg_30" />
              <ul className="cs_mp0 cs_contact_info">
                <li>
                  <h3 className="cs_fs_29 cs_semibold">Email:</h3>
                  <p className="mb-0">info@oasis-digital.net</p>
                </li>
                <li>
                  <h3 className="cs_fs_29 cs_semibold">Phone:</h3>
                  <p className="mb-0">+234 810 527 2050</p>
                </li>
                <li>
                  <h3 className="cs_fs_29 cs_semibold">WhatsApp:</h3>
                  <p className="mb-0">+44 7425 199941</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="">
                <div className="cs_gray_bg_3 cs_contact_form_bg" />
                <HubspotContactForm 
                region="na1"
                portalId= "46092353"
                formId="ddc7edae-1d86-434b-949b-066bb53301f2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_0 cs_height_lg_80" />
      </section>
      <div className="cs_map">
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </div>
    </>
  );
}


