import React from "react";
import { ContactStyled } from "./Contact.styles";
import { useFormik } from "formik";
import {
  FaShareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import { Helmet } from "react-helmet";


const Contact = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactStyled>
    <Helmet>
      <title>Əlaqə - Alas Academy</title>
    </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="contact-info">
              <h2 className="title">Bizimlə Əlaqə</h2>
              <p className="subtitle">
                - Aşağıda qeyd olunan məlumatlar vasitəsiylə bizimlə əlaqə saxlaya bilərsiniz.
              </p>
              <ul className="ci-list">
                <li>
                  <h5>Address</h5>
                  <p>Nizami m., Caspian plaza 16 m.</p>
                </li>
                <li>
                  <h5>Email</h5>
                  <p>admin@alas.edu.az</p>
                </li>
                <li>
                  <h5>Telefon</h5>
                  <p>+994 (55) 533 53 60</p>
                  <p>+994 (55) 533 53 56</p>
                </li>
              </ul>
              <ul className="social-share">
                <li>
                  <a href="/">
                    <FaShareAlt size={18} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaFacebookF size={18} />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <FaLinkedinIn size={18} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaYoutube size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="offset-xl-2 col-lg-6">
            <div className="contact-form">
              <div className="form-title-wrapper">
                <h4>Sualınız və ya təklifiniz var?</h4>
                <p>
                  Aşağıdakı xanaları dolduraraq bizimlə əlaqə saxlaya bilərsiniz       
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  name="fullName"
                  type="text"
                  id="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                  className="font-input"
                  placeholder="Adınız"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  className="font-input"
                  placeholder="Emailiniz"
                />

                <textarea cols="30" rows="4" placeholder="Mesajınız" />

                <CustomButton type="submit" className="form-btn">
                  Göndər
                </CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map-area">
        <iframe
          title="map"
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baku,%20Caspian%20Plaza+(Alas%20Academy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>

    </ContactStyled>
  );
};

export default Contact;
