import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const addressDataList = ["+234 815 561 9895", "+44 7425 199941", "info@gstechhub.com.ng"];
const serviceMenuList = [
   {
      title: "WP Development",
      href: "/service/service-details",
   },
   {
      title: "UX Research",
      href: "/service/service-details",
   },
   {
      title: "Branding Design",
      href: "/service/service-details",
   },
   {
      title: "Front-End Development",
      href: "/service/service-details",
   },
   {
      title: "Graphics Design",
      href: "/service/service-details",
   },
   {
      title: "Ad Promotion",
      href: "/service/service-details",
   },
];
const LinksMenuList = [
   {
      title: "Home",
      href: "/",
   },
   {
      title: "About",
      href: "/about",
   },
   {
      title: "Services",
      href: "/service",
   },
   {
      title: "Portfolio",
      href: "portfolio",
   },
   {
      title: "Contact",
      href: "/contact",
   },
];
const policyMenuList = [
   {
      title: "Terms of Use",
      href: "/",
   },
   {
      title: "Privacy Policy",
      href: "/",
   },
];
const socialBtnList = [
   {
      icon: "fa6-brands:linkedin-in",
      href: "/",
   },
   {
      icon: "fa6-brands:twitter",
      href: "/",
   },
   {
      icon: "fa6-brands:youtube",
      href: "/",
   },
   {
      icon: "fa6-brands:facebook-f",
      href: "/",
   },
];

export default function Footer() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: "",
      },
   });

   console.log("lfg 🚀");

   const handleSubscribe = async (data) => {
      try {
         const res = await fetch(
            "https://script.google.com/macros/s/AKfycbxyVfePxgQEt2ipfraxM1mKboG5-75SQBLPdKgrZfiSHS1nQ2YDNOlkEO0lBkDK22mmqQ/exec",
            {
               method: "POST",
               mode: "no-cors",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(data),
            },
         );

         if (!res.ok) {
            const errorText = await res.text();
            console.error("Error sending data:", errorText);
         } else {
            const result = await res.json();
            console.log("Data sent successfully:", result);
         }
      } catch (error) {
         console.error("Error sending data:", error);
      }
   };

   return (
      <footer className="cs_fooer cs_bg_filed" style={{ backgroundImage: "url(/images/footer_bg.jpeg)" }}>
         <div className="cs_fooer_main">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="cs_footer_item">
                        <div className="cs_text_widget">
                           <img src="/images/logo_white.svg" alt="Logo" />
                        </div>
                        <ul className="cs_menu_widget cs_mp0">
                           {addressDataList.map((item, index) => (
                              <li key={index}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="cs_footer_item">
                        <h2 className="cs_widget_title">Services</h2>
                        <ul className="cs_menu_widget cs_mp0">
                           {serviceMenuList.map((item, index) => (
                              <li key={index}>
                                 <Link to={item.href}>{item.title}</Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="cs_footer_item">
                        <h2 className="cs_widget_title">Links</h2>
                        <ul className="cs_menu_widget cs_mp0">
                           {LinksMenuList.map((item, index) => (
                              <li key={index}>
                                 <Link to={item.href}>{item.title}</Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="cs_footer_item">
                        <h2 className="cs_widget_title">Subscribe Newsletter </h2>
                        <div className="cs_newsletter cs_style_1">
                           <div className="cs_newsletter_text">
                              We make sure to only send emails that are noteworthy and pertinent to the recipient.
                           </div>
                           <form action="" onSubmit={handleSubmit(handleSubscribe)} className="cs_newsletter_form">
                              <input
                                 type="email"
                                 className="cs_newsletter_input"
                                 placeholder="Email address"
                                 {...register("email", { required: "Provide a valid email" })}
                              />
                              <button className="cs_btn cs_style_1">
                                 Submit
                                 <span>
                                    <i>
                                       <Icon icon="fa6-solid:arrow-right" />
                                    </i>
                                    <i>
                                       <Icon icon="fa6-solid:arrow-right" />
                                    </i>
                                 </span>
                              </button>
                              {errors.email && <p>{errors.email.message}</p>}
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="cs_bottom_footer">
               <div className="cs_bottom_footer_left">
                  <div className="cs_social_btns cs_style_1">
                     {socialBtnList.map((item, index) => (
                        <Link to={item.href} className="cs_center" key={index}>
                           <Icon icon={item.icon} />
                        </Link>
                     ))}
                  </div>
               </div>
               <div className="cs_copyright">Copyright © 2023 GsTechHub Digital Agency.</div>
               <div className="cs_bottom_footer_right">
                  <ul className="cs_footer_links cs_mp0">
                     {policyMenuList.map((item, index) => (
                        <li key={index}>
                           <Link to={item.href}>{item.title}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
