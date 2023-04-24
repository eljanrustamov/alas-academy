import { CoursesStyled } from "./Courses.styles";
import { GiBrain } from "react-icons/gi";
import { GoDatabase } from "react-icons/go";
import { BsClipboardData } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { BiCodeAlt, BiCodeBlock } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const category_items = [
  {
    delay: "50",
    color: "color-primary-style",
    icon: <GiBrain size={40} />,
    title: "Süni İntellekt",
    pathName: "suni-intellekt",
  },
  {
    delay: "100",
    color: "color-secondary-style",
    icon: <GoDatabase size={40} />,
    title: "Data Science",
    pathName: "data-science",
  },
  {
    delay: "150",
    color: "color-extra01-style",
    icon: <BsClipboardData size={40} />,
    title: "Data Analitika",
    pathName: "data-analitika",
  },
  {
    delay: "100",
    color: "color-extra02-style",
    icon: <MdSecurity size={40} />,
    title: "Kiber Təhlükəsizlik",
    pathName: "kiber-tehlukesizlik",
  },

  {
    delay: "100",
    color: "color-extra03-style",
    icon: <BiCodeAlt size={40} />,
    title: "Back-End Proqramlaşdırma",
    pathName: "backend-proqramlasdirma",
  },
  {
    delay: "150",
    color: "color-extra04-style",
    icon: <BiCodeBlock size={40} />,
    title: "Front-End Proqramlaşdırma",
    pathName: "frontend-proqramlasdirma",
  },
];

const Courses = () => {
  const navigate = useNavigate();

  /* 
  const [courseData, setCourseData] = React.useState([]);
  const getCoursesData = async () => {
    try {
      let response = await fetch(
        "https://alasacademy.azurewebsites.net/api/Course/GetCourses"
      );
      const data = await response.json();

      if (data) {
        // setCourseData(data.items);
      }
    } catch (error) {
      throw new Error("Bir şeylər səhv oldu.");
    }
  };
  React.useEffect(() => {
    getCoursesData()
      .then((data) => {
        sal();
      })
      .catch((error) => console.log(error.message));
  }, []);
  */

  return (
    <CoursesStyled id="courses">
      <div className="container">
        <div
          className="section-title"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <h2 className="title">Tədris Proqramlarımız</h2>
          <span className="shape-line"></span>
          {
            // <p className="subtitle">{subtitle}</p>
          }
        </div>

        <div className="row g-5">
          <div
            className="col-lg-4 col-md-6"
            data-sal-delay={`${category_items[0].delay}`}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div
              onClick={() => {
                navigate(`/tedris-proqramlarimiz/suni-intellekt`);
              }}
              className={`course-item ${category_items[0].color}`}
            >
              <div className="icon">{category_items[0].icon}</div>
              <div className="content">
                <p>Süni İntellekt</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-sal-delay={`${category_items[1].delay}`}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div
              className={`course-item ${category_items[1].color}`}
              style={{ cursor: "default" }}
            >
              <div className="icon">{category_items[1].icon}</div>
              <div className="content">
                <p>Data Science (Tezliklə)</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-sal-delay={`${category_items[2].delay}`}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div
              className={`course-item ${category_items[2].color}`}
              style={{ cursor: "default" }}
            >
              <div className="icon">{category_items[2].icon}</div>
              <div className="content">
                <p>Data Analitika (Tezliklə)</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-sal-delay={`${category_items[3].delay}`}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div
              onClick={() => {
                navigate(`/tedris-proqramlarimiz/kiber-tehlukesizlik`);
              }}
              className={`course-item ${category_items[3].color}`}
            >
              <div className="icon">{category_items[3].icon}</div>
              <div className="content">
                <p>Kiber Təhlükəsizlik</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-sal-delay={`${category_items[4].delay}`}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div
              onClick={() => {
                navigate(`/tedris-proqramlarimiz/frontend-proqramlashdirma`);
              }}
              className={`course-item ${category_items[4].color}`}
            >
              <div className="icon">{category_items[4].icon}</div>
              <div className="content">
                <p>Front-End Proqramlaşdırma</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-sal-delay={`${category_items[5].delay}`}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div
              onClick={() => {
                navigate(`/tedris-proqramlarimiz/backend-proqramlashdirma`);
              }}
              className={`course-item ${category_items[5].color}`}
            >
              <div className="icon">{category_items[5].icon}</div>
              <div className="content">
                <p>Back-End Proqramlaşdırma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoursesStyled>
  );
};

export default Courses;
