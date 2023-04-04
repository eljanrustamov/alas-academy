import React, { useState, useEffect, useRef } from "react";
import { CourseDetailsStyled } from "./CourseDetails.styles";
import { Link, useParams, useLocation } from "react-router-dom";
import CtaArea from "../../components/CtaArea/CtaArea.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
//
import CourseDetailsMainIMG from "../../assets/img/course-details-m.jpg";
import CourseWidgetBack from "../../assets/img/widget-back.png";
import CourseWidgetAI from "../../assets/img/widget-ai.png";
import CourseWidgetFront from "../../assets/img/widget-front.png";
import CourseWidgetCC from "../../assets/img/widget-cc.png";
import InstructorIMG01 from "../../assets/img/course-instructor-1.jpg";
import InstructorIMG02 from "../../assets/img/course-instructor-2.jpg";
import InstructorIMG03 from "../../assets/img/course-instructor-3.jpg";
import InstructorFront from "../../assets/img/instructor-front.jpeg";
import InstructorBackend from "../../assets/img/instructor-backend.jfif";
import InstructorCC from "../../assets/img/instructor-cc.jpg";
import Certificate1 from "../../assets/img/certificate-1.png";
import Certificate2 from "../../assets/img/certificate-2.png";
import Certificate3 from "../../assets/img/certificate-3.png";
import CertificateGoogle from "../../assets/img/certificate-google-dev.png";
import CertificateOscp from "../../assets/img/certificate-oscp.png";

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
//  sal animation
import sal from "sal.js";
import "../../assets/scss/default/_sal.scss";
//
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.component";

const OtherCourses = ({ courseName }) => {
  return (
    <React.Fragment>
      {courseName !== "suni-intellekt" ? (
        <li className="course">
          <img src={CourseWidgetAI} alt="course" />
          <div className="course-info">
            <h6>Süni İntellekt</h6>
            <a href={"/tedris-proqramlarimiz/suni-intellekt"}>Ətraflı...</a>
          </div>
        </li>
      ) : (
        ""
      )}
      {courseName !== "kiber-tehlukesizlik" ? (
        <li className="course">
          <img src={CourseWidgetCC} alt="course" />
          <div className="course-info">
            <h6>Kiber Təhlükəsizlik</h6>
            <a href={"/tedris-proqramlarimiz/kiber-tehlukesizlik"}>
              Ətraflı...
            </a>
          </div>
        </li>
      ) : (
        ""
      )}

      {courseName !== "backend-proqramlashdirma" ? (
        <li className="course">
          <img src={CourseWidgetBack} alt="course" />
          <div className="course-info">
            <h6>Back-End Proqramlaşdırma</h6>
            <a href={"/tedris-proqramlarimiz/backend-proqramlashdirma"}>
              Ətraflı...
            </a>
          </div>
        </li>
      ) : (
        ""
      )}

      {courseName !== "frontend-proqramlashdirma" ? (
        <li className="course">
          <img src={CourseWidgetFront} alt="course" />
          <div className="course-info">
            <h6>Front-End Proqramlaşdırma</h6>
            <a href={"/tedris-proqramlarimiz/frontend-proqramlashdirma"}>
              Ətraflı...
            </a>
          </div>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

const CourseCertificates = ({ courseName }) => {
  return (
    <React.Fragment>
      {courseName === "suni-intellekt" && (
        <React.Fragment>
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
        </React.Fragment>
      )}
      {courseName === "kiber-tehlukesizlik" && (
        <React.Fragment>
          <div className="certificate-item">
            <div className="image-wrapper">
              <img src={CertificateOscp} alt="certificate" />
            </div>
            <p className="text">OSCP</p>
          </div>
        </React.Fragment>
      )}
      {courseName === "frontend-proqramlashdirma" && (
        <div className="certificate-item">
          <div className="image-wrapper">
            <img src={CertificateGoogle} alt="certificate" />
          </div>
          <p className="text">Google Developer Certificate</p>
        </div>
      )}
      {courseName === "backend-proqramlashdirma" && (
        <React.Fragment>
          <div className="certificate-item">
            <div className="image-wrapper">
              <img src={CertificateGoogle} alt="certificate" />
            </div>
            <p className="text">Google Developer Certificate</p>
          </div>

          <div className="certificate-item">
            <div className="image-wrapper">
              <img src={Certificate1} alt="certificate" />
            </div>
            <p className="text">Cloud Practitioner</p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

//
const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const { state } = useLocation();
  const { courseName } = useParams();
  const [loading, setLoading] = useState(true);
  // const [currentCourseId, setCurrentCourseId] = useState(0);
  let currentCourseId = 0;

  const getCurrentCourseId = async (course) => {
    try {
      const res = await fetch(
        `https://alasacademy.azurewebsites.net/api/Course/GetCourses`
      );
      const data = await res.json();

      if (data) {
        currentCourseId = data.items.find(
          (course) => course.pathName === courseName
        ).id;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCourseData = async () => {
    const id = currentCourseId ? currentCourseId : state?.id;
    console.log(id + " data cekiliyor");
    try {
      const res = await fetch(
        `https://alasacademy.azurewebsites.net/api/Course/GetCourseById?id=${id}`
      );
      const data = await res.json();

      if (data) {
        setCourse(data);
        sal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state?.id) {
      getCourseData()
        .then(() => {
          sal();
          setLoading(false);
        })
        .catch(() => {});
    } else {
      console.log("id yok");
      getCurrentCourseId()
        .then(() => {
          getCourseData().then(() => {
            sal();
            setLoading(false);
          });
        })
        .catch(() => {});
    }
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <CourseDetailsStyled>
      <Helmet>
        <title>{course.name} - Alas Academy</title>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="course-details-content">
              <div
                className="image-wrapper"
                data-sal="fade"
                data-sal-duration="500"
              >
                <img src={course.image} alt="course-details" />
              </div>
              <div
                className="tabs-wrapper"
                data-sal="fade"
                data-sal-duration="800"
              >
                <Tabs>
                  <TabList>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      {course.name}
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
                  {course.pathName === "suni-intellekt" ? (
                    <React.Fragment>
                      <TabPanel>
                        <div className="description-tab-wrapper">
                          <h3 className="title">Süni İntellekt nədir?</h3>
                          <p>
                            Süni İntellekt sahəsi sürətlə inkişaf edən
                            sahələrdən biridir. Müasir dövrümüzün texnoloji
                            inkişafını nəzərdən keçirdikdə, süni intellektin
                            inkişafı nəticəsində ərsəyə gəlmiş yenilikləri
                            görmək olar. Yüksək gəlir, tələbat və artmaqda olan
                            iş fürsətləri süni intellektə olan marağın başlıca
                            səbəblərindəndir. Süni intellektə yiyələnməklə,
                            yüksək statuslu şirkətlərdə işləmək imkanı əldə
                            edirsiniz. Süni intellekti öyrənməklə təkcə bilik
                            yox, problem həll etmə bacarığı, ətrafınızdakı
                            dünyaya fərqli bir baxış qazanırsınız. Təxminlərə
                            görə süni intellekt cari və növbəti onilliyin
                            aparıcı sahələrin siyahısında yerləşir.
                          </p>
                          <br />
                          <br />
                          <h3 className="title">Niyə Süni İntellekt?</h3>
                          <p>
                            Süni İntellekt sahəsi sürətlə inkişaf edən
                            sahələrdən biridir. Müasir dövrümüzün texnoloji
                            inkişafını nəzərdən keçirdikdə, süni intellektin
                            inkişafı nəticəsində ərsəyə gəlmiş yenilikləri
                            görmək olar. Yüksək gəlir, tələbat və artmaqda olan
                            iş fürsətləri süni intellektə olan marağın başlıca
                            səbəblərindəndir. Süni intellektə yiyələnməklə,
                            yüksək statuslu şirkətlərdə işləmək imkanı əldə
                            edirsiniz. Süni intellekti öyrənməklə təkcə bilik
                            yox, problem həll etmə bacarığı, ətrafınızdakı
                            dünyaya fərqli bir baxış qazanırsınız. Təxminlərə
                            görə süni intellekt cari və növbəti onilliyin
                            aparıcı sahələrin siyahısında yerləşir.
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
                            Proqram çərçivəsində TensorFlow, AWS Cloud
                            Practitioner və AWS ML Specialty sertifikatları üzrə
                            bilik qazanırsınız. (Sertifikatlar hissəsinə keçid
                            edərək, daha ətraflı məlumat əldə edə bilərsiniz.)
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="advantages-tab-wrapper">
                          <h3 className="heading-title">
                            Əldə Edəcəyiniz Üstünlüklər
                          </h3>
                          <p className="subtitle">
                            Tədris proqramına qoşularaq aşağıdakı üstünlükləri
                            əldə edirsiniz
                          </p>

                          <ul className="advantages-list">
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                İş masası:
                              </h6>
                              <p>
                                - Mərkəzimizdə yerləşdirilmiş çalışma
                                masalarından 7/24 istifadə imkanı;
                              </p>
                            </li>
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                Mentor:
                              </h6>
                              <p>
                                - Dərs keyfiyyətini artırma məqsədi ilə,
                                dərslərdə müəllimlərlə yanaşı mentorlar sizə
                                dəstək göstərir;
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
                                - Tədris proqramı müddətində Alas Academy
                                tərəfindən həyata keçən və yaxud dəstəklənmiş
                                startaplarda təcrübə qazanmaq imkanı;
                              </p>
                              <p>
                                - Tədris proqramını uğurla başa vuran tələbələr
                                Alas Academy ilə tərəfdaşlıq edən mərkəzlərdə
                                təcrübə imkanı qazanır;
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
                                    Machine Learning və Deep Learning sahəsində
                                    olan biliklərinizi təsdiqləyən beynəlxalq
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
                                  <h4 className="title">
                                    AWS Cloud Practitioner
                                  </h4>
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
                                    Machine Learning üzrə, ən yüksək dəyərə
                                    malik sertifikatlardandır. Qeyd etmək
                                    lazımdır ki, Alas Academy Amazonla
                                    əməkdaşlıq çərçivədə Amazonun qafqazda
                                    yeganə Tədris mərkəzi və User Groupudur.
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
                              <img src={InstructorIMG03} alt="instructor" />
                              <ul className="instructor-social">
                                <li>
                                  <a href="https://wwww.linkedin.com/in/namin-ramazanov/">
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="content-wrapper">
                              <h6 className="title">Namin Ramazanov</h6>
                              <span className="subtitle">
                                Credit Data Risk Analyst at Kapital Bank
                              </span>
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
                              <span className="subtitle">
                                Data Analyst at Yelo Bank
                              </span>
                            </div>
                          </div>

                          <div className="instructor">
                            <div className="thumbnail-wrapper">
                              <img src={InstructorIMG01} alt="instructor" />
                              <ul className="instructor-social">
                                <li>
                                  <a href="https://www.linkedin.com/in/toghrul-tahirov/">
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="content-wrapper">
                              <h6 className="title">Toğrul Tahirov</h6>
                              <span className="subtitle">CDO at DigData</span>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </React.Fragment>
                  ) : course.pathName === "kiber-tehlukesizlik" ? (
                    <React.Fragment>
                      <TabPanel>
                        <div className="description-tab-wrapper">
                          <h3 className="title">Niyə Kibertəhlükəsizlik?</h3>
                          <p>
                            Kibertəhlükəsizlik kompüter sistemlərini, şəbəkələri
                            və məlumatları icazəsiz giriş, oğurluq və ya
                            zədələnmədən qorumaq üçün vacibdir. Texnologiyadan
                            artan asılılığımızla kiberhücum riskləri də artır.
                            Məxfiliyi qorumaq üçün bu sahədə özünüzə investisya
                            etməyiniz gələcəyiniz üçün çox vacibdir. Texnologiya
                            inkişaf etdikcə kibertəhlükəsizliyin əhəmiyyəti
                            yalnız artmağa davam edir və gün keçdikcə bu sahədə
                            olan iş imkanları da bu trendi izləyir.
                          </p>
                          <br />
                          <br />
                          <h3 className="title">Kibertəhlükəsizlik nədir?</h3>
                          <p>
                            Kibertəhlükəsizlik kompüter sistemlərinin,
                            şəbəkələrinin və məlumatların kibertəhlükələrdən
                            qorunmasını əhatə edir. Buraya təhlükəsizlik
                            tədbirlərinin işlənib hazırlanması və həyata
                            keçirilməsi, risklərin qiymətləndirilməsi və şübhəli
                            fəaliyyətin monitorinqi daxildir. Kiberhücumların
                            artan tezliyi ilə sahənin mütəxəssislərinə yüksək
                            tələbat var. Maliyyədən sahəsindən səhiyyəyə qədər,
                            hökumət və şəxsi şirkətlərdə kibertəhlükəsizlik üçün
                            əla iş fürsətləri var. Yüksək maaşa, uzunömürlü
                            karyeraya və daim təlabəta sahib olan
                            kibertəhlükəszilik yüksəlişiniz üçün ən yaxşı
                            imkanlar təklif edir.
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="curriculum-tab-wrapper">
                          <h3 className="heading-title">Tədris Proqramı</h3>
                          <p>
                            Tədris proqramı 8 ay müddətində həyata keçir və
                            aşağıdakı proqramlar əhatə olunacaqdır
                          </p>
                          <ul>
                            Proqrama daxildir:
                            <li>
                              <GiCheckMark size={15} /> Networking Fundamentals

                            </li>
                            <li>
                              <GiCheckMark size={15} /> Python Fundamentals
                              Linux Fundamentals:

                            </li>
                            <li>
                              <GiCheckMark size={15} /> Linux Fundamentals
                            </li>
                            <li>
                              <GiCheckMark size={15} /> OSCP
                            </li>
                          </ul>
                          <p>
                            Proqram çərçivəsində OSCP üzrə
                            bilik qazanırsınız. (Sertifikatlar hissəsinə keçid
                            edərək, daha ətraflı məlumat əldə edə bilərsiniz.)
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="advantages-tab-wrapper">
                          <h3 className="heading-title">
                            Əldə Edəcəyiniz Üstünlüklər
                          </h3>
                          <p className="subtitle">
                            Tədris proqramına qoşularaq aşağıdakı üstünlükləri
                            əldə edirsiniz
                          </p>

                          <ul className="advantages-list">
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                İş masası:
                              </h6>
                              <p>
                                - Mərkəzimizdə yerləşdirilmiş çalışma
                                masalarından 7/24 istifadə imkanı;
                              </p>
                            </li>
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                Mentor:
                              </h6>
                              <p>
                                - Dərs keyfiyyətini artırma məqsədi ilə,
                                dərslərdə müəllimlərlə yanaşı mentorlar sizə
                                dəstək göstərir;
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
                                - Tədris proqramı müddətində Alas Academy
                                tərəfindən həyata keçən və yaxud dəstəklənmiş
                                startaplarda təcrübə qazanmaq imkanı;
                              </p>
                              <p>
                                - Tədris proqramını uğurla başa vuran tələbələr
                                Alas Academy ilə tərəfdaşlıq edən mərkəzlərdə
                                təcrübə imkanı qazanır;
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
                                  <img
                                    src={CertificateOscp}
                                    alt="certificate"
                                  />
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="content">
                                  <h4 className="title">OSCP</h4>
                                  <p>
                                    Kiber təhlükəsizlik üzrə dünyaca ən tanımış
                                    sertifikatlardandır. OSCP Əsasən white-hat
                                    hacking və penetration testing üzərində
                                    fokuslanır və Offensive security sahəsində
                                    böyük önəm daşıyır.
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
                              <img src={InstructorCC} alt="instructor" />
                              <ul className="instructor-social">
                                <li>
                                  <a href="https://www.linkedin.com/in/mahammadjan/">
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="content-wrapper">
                              <h6 className="title">
                                Məhəmmədcan Məhəmmədcanov
                              </h6>
                              <span className="subtitle">
                                Penetration Tester
                              </span>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </React.Fragment>
                  ) : course.pathName === "frontend-proqramlashdirma" ? (
                    <React.Fragment>
                      <TabPanel>
                        <div className="description-tab-wrapper">
                          <h3 className="title">Niyə PROQRAMLAŞDIRMA?</h3>
                          <p>
                            Proqramlaşdırma müasir dövrümüzün aparıcı
                            bacarıqlarından biridir. Yüksək gəlir, tələbat və
                            geniş is fürsətləri proqramlaşdırmaya göstərilən
                            marağın başlıca səbəblərindəndir. Proqamlaşdırma
                            bacarığına yiyələnməklə, gələcək karyeranıza yatırım
                            edirsiniz. Belə ki, xaricdə iş imkanlarından
                            bəhrələnmək və yüksək statuslu sirkətlərdə işləmək
                            imkanı, Proqamlaşdırmanı öyrənməklə reallaşır.
                            Proqamlaşdırma sadəcə bir peşə yox, sizə problem
                            həll etmə bacarığını bəxş edir.
                          </p>
                          <br />
                          <br />
                          <h3 className="title">
                            Front-end proqramlaşdırma nədir?
                          </h3>
                          <p>
                            Front-end Development, proqramlaşdırmanın qabaqcıl
                            sahələrindəndir. Front-end proqramçı olmaqla, siz,
                            müasir və interaktiv vebsaytlar və tətbiqlər
                            yaratmaq dünyasına daxil olursuniz. Front-end
                            proqramçı, sayt və ya tətbiqin müştəri tərəfinin
                            ərsəyə gəlməsində iştirak edir. Bu peşəyə yiyələnmək
                            üçün JavaScript, CSS və HTML-i yüksək səviyyədə
                            bilmək zəruridir."
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="curriculum-tab-wrapper">
                          <h3 className="heading-title">Tədris Proqramı</h3>
                          <p>
                            Tədris proqramımız 6 ay olmaqla 4 modul çərçivəsində
                            həyata keçirilir. Proqramın əsas məqsədi beynəlxalq
                            sertifikatlara hazırlaşmaqla yanaşı, işə lazımi olan
                            bacarıqlara yiyələnərək əmək bazarına çıxmaqdır.
                          </p>
                          <ul>
                            Proqrama daxildir:
                            <li>
                              <GiCheckMark size={15} /> HTML, CSS
                            </li>
                            <li>
                              <GiCheckMark size={15} />
                              JavaScript
                            </li>
                            <li>
                              <GiCheckMark size={15} />
                              React
                            </li>
                            <li>
                              <GiCheckMark size={15} />
                              GitHub
                            </li>
                          </ul>
                          <p>
                            Proqram çərçivəsində Google Developer Certificate və
                            AWS Cloud Practitioner sertifikatları üzrə bilik
                            qazanırsınız. (Sertifikatlar hissəsinə keçid edərək,
                            daha ətraflı məlumat əldə edə bilərsiniz.)"
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="advantages-tab-wrapper">
                          <h3 className="heading-title">
                            Əldə Edəcəyiniz Üstünlüklər
                          </h3>
                          <p className="subtitle">
                            Tədris proqramına qoşularaq aşağıdakı üstünlükləri
                            əldə edirsiniz
                          </p>

                          <ul className="advantages-list">
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                İş masası:
                              </h6>
                              <p>
                                - Mərkəzimizdə yerləşdirilmiş çalışma
                                masalarından 7/24 istifadə imkanı;
                              </p>
                            </li>
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                Mentor:
                              </h6>
                              <p>
                                - Dərs keyfiyyətini artırma məqsədi ilə,
                                dərslərdə müəllimlərlə yanaşı mentorlar sizə
                                dəstək göstərir;
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
                                - Tədris proqramı müddətində Alas Academy
                                tərəfindən həyata keçən və yaxud dəstəklənmiş
                                startaplarda təcrübə qazanmaq imkanı;
                              </p>
                              <p>
                                - Tədris proqramını uğurla başa vuran tələbələr
                                Alas Academy ilə tərəfdaşlıq edən mərkəzlərdə
                                təcrübə imkanı qazanır;
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
                                  <img
                                    src={CertificateGoogle}
                                    alt="certificate"
                                  />
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="content">
                                  <h4 className="title">
                                    Google Developer Certificate
                                  </h4>
                                  <p>
                                    Bu sertifikat sizin JavaScript
                                    proqramlaşdırma dili üzrə biliyinizi təsdiq
                                    edən beynəlxalq sertifikatdır.
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
                                  <h4 className="title">Cloud Practitioner</h4>
                                  <p>
                                    Bulud texnologiyası üzrə başlanğıc əhəmiyyət
                                    daşıyan sertifikatlardandır.
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
                              <img src={InstructorFront} alt="instructor" />
                              <ul className="instructor-social">
                                <li>
                                  <a href="https://www.linkedin.com/in/farid-badalov/">
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="content-wrapper">
                              <h6 className="title">Fərid Bədəlov</h6>
                              <span className="subtitle">
                                Front-end Engineer at Jobdone
                              </span>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </React.Fragment>
                  ) : course.pathName === "backend-proqramlashdirma" ? (
                    <React.Fragment>
                      <TabPanel>
                        <div className="description-tab-wrapper">
                          <h3 className="title">Niyə PROQRAMLAŞDIRMA?</h3>
                          <p>
                            Proqramlaşdırma müasir dövrümüzün aparıcı
                            bacarıqlarından biridir. Yüksək gəlir, tələbat və
                            geniş is fürsətləri proqramlaşdırmaya göstərilən
                            marağın başlıca səbəblərindəndir. Proqamlaşdırma
                            bacarığına yiyələnməklə, gələcək karyeranıza yatırım
                            edirsiniz. Belə ki, xaricdə iş imkanlarından
                            bəhrələnmək və yüksək statuslu sirkətlərdə işləmək
                            imkanı, Proqamlaşdırmanı öyrənməklə reallaşır.
                            Proqamlaşdırma sadəcə bir peşə yox, sizə problem
                            həll etmə bacarığını bəxş edir.
                          </p>
                          <br />
                          <br />
                          <h3 className="title">
                            Java Back-end Proqramlaşdırma
                          </h3>
                          <p>
                            Java proqramlaşdırma dili, Back-end develoment üzrə
                            dünyaca məşhur və tələbatda olan dildir. Veb
                            development, korporativ proqramlar, Database
                            development, mikroservislər, şəbəkə proqramları,
                            masaüstü proqramlar və mobil proqramlar Java ilə
                            yarada biləcəklərinizin bir hissəsidir. Javanın
                            verdiyi mütəqillik, geniş icma və resursları, yüksək
                            performansı ilə yanaşı onu bir çox layihələr üçün
                            yaxşı seçim edir.
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="curriculum-tab-wrapper">
                          <h3 className="heading-title">Tədris Proqramı</h3>
                          <p>
                            Tədris proqramımız 8 ay olmaqla 4 modul çərçivəsində
                            həyata keçirilir. Proqramın əsas məqsədi beynəlxalq
                            sertifikatlara hazırlaşmaqla yanaşı, işə lazımi olan
                            bacarıqlara yiyələnərək əmək bazarına çıxmaqdır.
                          </p>
                          <ul>
                            Proqrama daxildir:
                            <li>
                              <GiCheckMark size={15} /> Java Proqramlaşdırma
                              dili
                            </li>
                            <li>
                              <GiCheckMark size={15} />
                              SQL
                            </li>
                            <li>
                              <GiCheckMark size={15} />
                              Spring Framework
                            </li>
                            <li>
                              <GiCheckMark size={15} />
                              AWS Cloud
                            </li>
                          </ul>
                          <p>
                            Proqram çərçivəsində Google Developer Certificate və
                            AWS Cloud Practitioner sertifikatları üzrə bilik
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
                            Tədris proqramına qoşularaq aşağıdakı üstünlükləri
                            əldə edirsiniz
                          </p>

                          <ul className="advantages-list">
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                İş masası:
                              </h6>
                              <p>
                                - Mərkəzimizdə yerləşdirilmiş çalışma
                                masalarından 7/24 istifadə imkanı;
                              </p>
                            </li>
                            <li className="advantage-item">
                              <h6>
                                <GiCheckMark size={20} />
                                Mentor:
                              </h6>
                              <p>
                                - Dərs keyfiyyətini artırma məqsədi ilə,
                                dərslərdə müəllimlərlə yanaşı mentorlar sizə
                                dəstək göstərir;
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
                                - Tədris proqramı müddətində Alas Academy
                                tərəfindən həyata keçən və yaxud dəstəklənmiş
                                startaplarda təcrübə qazanmaq imkanı;
                              </p>
                              <p>
                                - Tədris proqramını uğurla başa vuran tələbələr
                                Alas Academy ilə tərəfdaşlıq edən mərkəzlərdə
                                təcrübə imkanı qazanır;
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
                                  <img
                                    src={CertificateGoogle}
                                    alt="certificate"
                                  />
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="content">
                                  <h4 className="title">
                                    Google Developer Certificate
                                  </h4>
                                  <p>
                                    Bu sertifikat sizin JavaScript
                                    proqramlaşdırma dili üzrə biliyinizi təsdiq
                                    edən beynəlxalq sertifikatdır.
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
                                  <h4 className="title">Cloud Practitioner</h4>
                                  <p>
                                    Bulud texnologiyası üzrə başlanğıc əhəmiyyət
                                    daşıyan sertifikatlardandır.
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
                              <img src={InstructorBackend} alt="instructor" />
                              <ul className="instructor-social">
                                <li>
                                  <a href="https://www.linkedin.com/in/fakhri-afrasiyab/">
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="content-wrapper">
                              <h6 className="title">Fəxri Əfrasiyab</h6>
                              <span className="subtitle">
                                Backend Developer at VARTEQ Inc.
                              </span>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </React.Fragment>
                  ) : null}
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="course-details-sidebar">
              <div
                className="widget-box course-features"
                data-sal="slide-left"
                data-sal-delay="200"
                data-sal-duration="800"
              >
                <h5>Kurs haqqında</h5>
                <ul className="features-list">
                  <li className="feature">
                    <span>
                      <VscFileSubmodule size={22} /> Modullar:
                    </span>
                    <span>{course.feature.modules}</span>
                  </li>

                  <li className="feature">
                    <span>
                      <MdAccessTime size={22} /> Müddət:
                    </span>
                    <span>{course.feature.duration}</span>
                  </li>

                  <li className="feature">
                    <span>
                      <TfiWorld size={22} /> Dil:
                    </span>
                    <span>{course.feature.language}</span>
                  </li>

                  <li className="feature">
                    <span>
                      <GrCertificate size={22} /> Sertifikatlar:
                    </span>
                    <span>{course.feature.certificateNumber}</span>
                  </li>
                </ul>

                <CustomButton href="https://forms.gle/hogo3NDrTfRGGbb96">
                  Kursa Başla
                </CustomButton>
              </div>

              <div
                className="widget-box course-certification"
                data-sal="slide-left"
                data-sal-delay="200"
                data-sal-duration="800"
              >
                <h5 className="title">Sertifikatlar</h5>

                <CourseCertificates courseName={courseName} />
              </div>

              <div
                className="widget-box other-courses"
                data-sal="slide-left"
                data-sal-delay="200"
                data-sal-duration="800"
              >
                <h5 className="title">Digər Kurslarımız</h5>

                <ul className="courses-list">
                  {<OtherCourses courseName={courseName} />}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaArea />
    </CourseDetailsStyled>
  );
};

export default CourseDetails;
