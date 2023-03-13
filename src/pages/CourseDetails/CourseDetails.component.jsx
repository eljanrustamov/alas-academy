import React, { useState, useEffect, useRef } from "react";
import { CourseDetailsStyled } from "./CourseDetails.styles";
import { Link, useParams } from "react-router-dom";
import CtaArea from "../../components/CtaArea/CtaArea.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
// 
import CourseDetailsMainIMG from "../../assets/img/course-details-m.jpg";
import CourseWidgetIMG01 from "../../assets/img/course-widget-1.jpeg";
import InstructorIMG01 from "../../assets/img/course-instructor-1.jpg";
import InstructorIMG02 from "../../assets/img/course-instructor-2.jpg";
import InstructorIMG03 from "../../assets/img/course-instructor-3.jpg";
import Certificate1 from "../../assets/img/certificate-1.png";
import Certificate2 from "../../assets/img/certificate-2.png";
import Certificate3 from "../../assets/img/certificate-3.png";
// 
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
// react icons
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdAccessTime } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { GrCertificate } from "react-icons/gr";
// react-tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";



// 
const CourseDetails = () => {
  const { courseName } = useParams();
  console.log(courseName);

  const [vantaEffect, setVantaEffect] = useState(0);
  const headingRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: headingRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe1532f,
          shininess: 73.0,
          waveHeight: 5.0,
          waveSpeed: 0.75,
          zoom: 1.73,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <CourseDetailsStyled>
      <div className="heading-wrapper" ref={headingRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-11">
              <h1 className="title">
                Suni İntellekt dərslərimiz ilə sahənin mütəxəssisi ol!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="course-details-content">
              <div className="image-wrapper">
                <img src={CourseDetailsMainIMG} alt="course-details" />
              </div>
              <div className="tabs-wrapper">
                <Tabs>
                  <TabList>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      Süni İntellekt
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      Tədris Proqramı
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      Üstünlüklər
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      Sertifikatlar
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      Təlimçilər
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="description-tab-wrapper">
                      <h3 className="title">Süni intellekt nədir?</h3>
                      <p>
                        Süni İntellekt sahəsi sürətlə inkişaf edən sahələrdən
                        biridir. Müasir dövrümüzün texnoloji inkişafını nəzərdən
                        keçirdikdə, süni intellektin inkişafı nəticəsində ərsəyə
                        gəlmiş yenilikləri görmək olar. Yüksək gəlir, tələbat və
                        artmaqda olan iş fürsətləri süni intellektə olan marağın
                        başlıca səbəblərindəndir. Süni intellektə yiyələnməklə,
                        yüksək statuslu şirkətlərdə işləmək imkanı əldə
                        edirsiniz. Süni intellekti öyrənməklə təkcə bilik yox,
                        problem həll etmə bacarığı, ətrafınızdakı dünyaya fərqli
                        bir baxış qazanırsınız. Təxminlərə görə süni intellekt
                        cari və növbəti onilliyin aparıcı sahələrin siyahısında
                        yerləşir.
                      </p>
                      <br />
                      <br />
                      <h3 className="title">Niyə süni intellekt?</h3>
                      <p>
                        Süni İntellekt sahəsi sürətlə inkişaf edən sahələrdən
                        biridir. Müasir dövrümüzün texnoloji inkişafını nəzərdən
                        keçirdikdə, süni intellektin inkişafı nəticəsində ərsəyə
                        gəlmiş yenilikləri görmək olar. Yüksək gəlir, tələbat və
                        artmaqda olan iş fürsətləri süni intellektə olan marağın
                        başlıca səbəblərindəndir. Süni intellektə yiyələnməklə,
                        yüksək statuslu şirkətlərdə işləmək imkanı əldə
                        edirsiniz. Süni intellekti öyrənməklə təkcə bilik yox,
                        problem həll etmə bacarığı, ətrafınızdakı dünyaya fərqli
                        bir baxış qazanırsınız. Təxminlərə görə süni intellekt
                        cari və növbəti onilliyin aparıcı sahələrin siyahısında
                        yerləşir.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="curriculum-tab-wrapper">
                      <h3 className="heading-title">Tədris Proqramı</h3>
                      <p>
                        Tədris proqramımız 8 ay olmaqla 5 modul çərçivəsində
                        həyata keçirilir. Proqramın əsas məqsədi beynəlxalq
                        sertifikatlara hazırlaşmaqla yanaşı, işə lazımi olan
                        bacarıqlara yiyələnərək əmək bazarına çıxmaqdır.
                      </p>
                      <ul>
                        Proqrama daxildir:
                        <li>
                          <GiCheckMark size={15} /> Python Fundamental
                        </li>
                        <li>
                          <GiCheckMark size={15} />
                          SQL
                        </li>
                        <li>
                          <GiCheckMark size={15} />
                          Xətti cəbr və statistika
                        </li>
                        <li>
                          <GiCheckMark size={15} />
                          Machine Learning{" "}
                        </li>
                      </ul>
                      <p>
                        Proqram çərçivəsində TensorFlow, AWS Cloud Practitioner
                        və AWS ML Specialty sertifikatları üzrə bilik
                        qazanırsınız. (Sertifikatlar hissəsinə keçid edərək,
                        daha ətraflı məlumat əldə edə bilərsiniz.)
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="advantages-tab-wrapper">
                      <h3 className="heading-title">
                        Əldə Edəcəyiniz Üstünlüklər
                      </h3>
                      <p className="subtitle">
                        Tədris proqramına qoşularaq aşağıdakı üstünlükləri əldə
                        edirsiniz
                      </p>

                      <ul className="advantages-list">
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            İş masası:
                          </h6>
                          <p>
                            - Mərkəzimizdə yerləşdirilmiş çalışma masalarından
                            7/24 istifadə imkanı;
                          </p>
                        </li>
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            Mentor:
                          </h6>
                          <p>
                            - Dərs keyfiyyətini artırma məqsədi ilə, dərslərdə
                            müəllimlərlə yanaşı mentorlar sizə dəstək göstərir;
                          </p>
                          <p>
                            - Dərsdən əlavə, mərkəz tərəfindən qeyd olunmuş
                            saatlarda mentor dəstəyi;
                          </p>
                        </li>
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            Təcrübə imkanı:
                          </h6>
                          <p>
                            - Tədris proqramı müddətində Alas Academy tərəfindən
                            həyata keçən və yaxud dəstəklənmiş startaplarda
                            təcrübə qazanmaq imkanı;
                          </p>
                          <p>
                            - Tədris proqramını uğurla başa vuran tələbələr Alas
                            Academy ilə tərəfdaşlıq edən mərkəzlərdə təcrübə
                            imkanı qazanır;
                          </p>
                        </li>
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            İcma dəstəyi:
                          </h6>
                          <p>
                            - Alas Academydə yaranmış texnoloji icmanın üzvü
                            olmaqla, özünüzü daha da çox inkişaf etdirməyə
                            şərait yaradırsınız;
                          </p>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="certificates-tab-wrapper">
                      <div className="certificate-box">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="icon-wrapper">
                              <img src={Certificate3} alt="certificate" />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="content">
                              <h4 className="title">TensorFlow</h4>
                              <p>
                                Machine Learning və Deep Learning sahəsində olan
                                biliklərinizi təsdiqləyən beynəlxalq
                                sertifikatdır. Qeyd etmək lazımdır ki, Alas
                                Academy Google ilə əməkdaşlıq çərçivisində
                                sertifikatlaşdırma prosesini həyata keçirən
                                yeganə mərkəzdir
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="certificate-box">
                        <div className="row w-100">
                          <div className="col-md-2">
                            <div className="icon-wrapper">
                              <img src={Certificate1} alt="certificate" />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="content">
                              <h4 className="title">AWS Cloud Practitioner</h4>
                              <p>
                                Bulud texnologiyası üzrə başlanğıc əhəmiyyət
                                daşıyan sertifikatlardandır.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="certificate-box">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="icon-wrapper">
                              <img src={Certificate2} alt="certificate" />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="content">
                              <h4 className="title">AWS ML Specialty</h4>
                              <p>
                                Machine Learning üzrə, ən yüksək dəyərə malik
                                sertifikatlardandır. Qeyd etmək lazımdır ki,
                                Alas Academy Amazonla əməkdaşlıq çərçivədə
                                Amazonun qafqazda yeganə Tədris mərkəzi və User
                                Groupudur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="instructors">
                      <div className="instructor">
                        <div className="thumbnail-wrapper">
                          <img src={InstructorIMG01} alt="instructor" />
                          <ul className="instructor-social">
                            <li>
                              <a href="/">
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="content-wrapper">
                          <h6 className="title">Toğrul Tahırov</h6>
                          <span className="subtitle">Founder & Ceo</span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>

                      <div className="instructor">
                        <div className="thumbnail-wrapper">
                          <img src={InstructorIMG02} alt="instructor" />
                          <ul className="instructor-social">
                            <li>
                              <a href="https://www.linkedin.com/in/amina-kazimova-2462321b7/">
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="content-wrapper">
                          <h6 className="title">Əminə Kazımova</h6>
                          <span className="subtitle">Data Analitika</span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>

                      <div className="instructor">
                        <div className="thumbnail-wrapper">
                          <img src={InstructorIMG03} alt="instructor" />
                          <ul className="instructor-social">
                            <li>
                              <a href="https://www.linkedin.com/in/namin-ramazanov/">
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="content-wrapper">
                          <h6 className="title">Namin Ramazanov</h6>
                          <span className="subtitle">Founder & Ceo</span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="course-details-sidebar">
              <div className="widget-box course-features">
                <h5>Course Features</h5>
                <ul className="features-list">
                  <li className="feature">
                    <span>
                      <VscFileSubmodule size={22} /> Modullar:
                    </span>
                    <span>5</span>
                  </li>

                  <li className="feature">
                    <span>
                      <MdAccessTime size={22} /> Müddət:
                    </span>
                    <span>8 ay</span>
                  </li>

                  <li className="feature">
                    <span>
                      <TfiWorld size={22} /> Dil:
                    </span>
                    <span>Azərbaycanca</span>
                  </li>

                  <li className="feature">
                    <span>
                      <GrCertificate size={22} /> Sertifikatlar:
                    </span>
                    <span>3</span>
                  </li>
                </ul>

                <CustomButton href="https://forms.gle/hogo3NDrTfRGGbb96">
                  Kursa Başla
                </CustomButton>
              </div>

              <div className="widget-box course-certification">
                <h5 className="title">Sertifikatlar</h5>
                <div className="certificate-item">
                  <div className="image-wrapper">
                    <img src={Certificate3} alt="certificate" />
                  </div>
                  <p className="text">TensorFlow</p>
                </div>

                <div className="certificate-item">
                  <div className="image-wrapper">
                    <img src={Certificate2} alt="certificate" />
                  </div>
                  <p className="text">AWS ML Specialty</p>
                </div>

                <div className="certificate-item">
                  <div className="image-wrapper">
                    <img src={Certificate1} alt="certificate" />
                  </div>
                  <p className="text">AWS Cloud Practitioner</p>
                </div>
              </div>

              <div className="widget-box other-courses">
                <h5 className="title">Digər Kurslarımız</h5>

                <ul className="courses-list">
                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Data Science</h6>
                      <Link to={'/tedris-proqramlarimiz/data-science'}>Ətraflı...</Link>
                    </div>
                  </li>

                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Data Analitika</h6>
                      <Link to={'/tedris-proqramlarimiz/data-analitika'}>Ətraflı...</Link>
                    </div>
                  </li>

                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Kiber Təhlükəsizlik</h6>
                      <Link to={'/tedris-proqramlarimiz/kiber-tehlukesizlik'}>Ətraflı...</Link>
                    </div>
                  </li>
                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Back-End Proqramlaşdırma</h6>
                      <Link to={'/tedris-proqramlarimiz/backend-proqramlasdirma'}>Ətraflı...</Link>
                    </div>
                  </li>
                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Front-End Proqramlaşdırma</h6>
                      <Link to={'/tedris-proqramlarimiz/frontend-proqramlasdirma'}>Ətraflı...</Link>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaArea/>
    </CourseDetailsStyled>
  );
};

export default CourseDetails;
