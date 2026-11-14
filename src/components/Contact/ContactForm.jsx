/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import FormProject from "./FormProject";
import ScrollReveal from "../../hooks/ScrollReveal/ScrollReveal"

import { FiExternalLink } from "react-icons/fi";

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";

import "./ContactFomr.css";

const ContactFomr = ({ language = "PT" }) => {
  const isPT = language === "PT";

  const ContactMidias = [
    {
      id: 1,
      icon: FaWhatsapp,
      title: "WHATSAPP",
      href: "https://wa.me/82988172684",
      description: "(82) 98817-2684",
    },
    {
      id: 2,
      icon: FaLinkedinIn,
      title: "LINKEDIN",
      href: "https://www.linkedin.com/in/maycon-douglas-b97786306/",
      description: "/in/maycon-douglas",
    },
    {
      id: 3,
      icon: FaGithub,
      title: "GITHUB",
      href: "https://github.com/Maycondo",
      description: "@Maycondo",
    },
    {
      id: 4,
      icon: FaInstagram,
      title: "INSTAGRAM",
      href: "https://www.instagram.com/maycon_d2003/",
      description: "@maycon_d2003",
    },
    {
      id: 5,
      icon: FaLocationArrow,
      title: isPT ? "LOCALIZAÇÃO" : "LOCATION",
      href: "https://www.google.com/maps/place/Tv.+Jo%C3%A3o+Paranhos,+310-372+-+Lot.+Vila+Rica,+Rio+Largo+-+AL,+57100-000/@-9.4810787,-35.8378529,19z/data=!3m1!4b1!4m15!1m8!3m7!1s0x70135d59c588b69:0x7dbb4b887595602c!2sRio+Largo,+AL,+57100-000!3b1!8m2!3d-9.4779045!4d-35.8355099!16s%2Fg%2F11bxfww_sv!3m5!1s0x701343d53b98da1:0xe91cbdda6754d70a!8m2!3d-9.48108!4d-35.8372092!16s%2Fg%2F11g61m6g9j?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D",
      description: isPT
        ? "Maceió AL · Atendimento remoto"
        : "Maceió AL · Remote service",
      location: true,
    },
  ];

  return (
    <section className="content-man-contact" id="contatos">
    <ScrollReveal>
      <div className="content-main">
        <div className="content-texs-contact">
          <span className="Label-contact-texs">
            04 — {isPT ? "CONTATOS" : "CONTACTS"}
          </span>
          <div className="contact-title">
            <h1>{isPT ? <>Vamos conversar.</> : <>Let's talk.</>}</h1>
          </div>
          <a className="contact-email" href="mailto:maycondoulasniculau@gmail.com">
            maycondoulasniculau@gmail.com<FiExternalLink />
          </a>
        </div>

        <div className="icons-contact-form">
          <div className="Icones-social">
            <div className="social-list">
              {ContactMidias.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a href={contact.href} key={contact.id} target="_blank" rel="noopener noreferrer" className={`social-card ${contact.location ? "location-card" : ""}`} >
                    <span className="social-icon">
                      <Icon />
                    </span>
                    <span className="social-information">
                      <span className="social-label">{contact.title}</span>
                      <span className="social-description">
                        {contact.description}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
            <p className="contact-availability">
              <span className="availability-dot"></span>
              {isPT ? "Respondo em até 24 horas úteis." : "I respond within 24 business hours."}
            </p>
          </div>
          <FormProject isPT={isPT} />
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

ContactFomr.propTypes = {
  language: PropTypes.string,
};

export default ContactFomr;
