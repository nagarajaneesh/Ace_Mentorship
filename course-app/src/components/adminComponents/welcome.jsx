import "../../App.css";
import BasicAccordion from "../muiComponents/accordion";
export default function Welcome() {
  return (
    <>
      <div className="welcomeParent">
        <h1 className="heading">
          Unlocking Potential, Igniting Excellence <br /> Welcome to Our Ace
          Mentorship Project
        </h1>
      </div>
      <h3 className="para">
        Our courses are meticulously designed to embody excellence in every
        aspect. From the carefully crafted curriculum to the exceptional
        faculty, we are committed to providing a transformative learning
        experience for all participants. Our courses are rooted in the latest
        research and industry best practices, ensuring that the knowledge and
        skills gained are both relevant and applicable. Each course is
        thoughtfully structured, offering a blend of theoretical concepts and
        practical hands-on exercises to foster a comprehensive understanding of
        the subject matter. Our dedicated instructors are not only experts in
        their respective fields but also passionate about mentoring and guiding
        learners towards their full potential. We foster an inclusive and
        supportive learning environment that encourages collaboration,
        creativity, and critical thinking. Through our courses, we strive to
        empower individuals to reach new heights of achievement, equipping them
        with the tools and insights needed to excel in their chosen endeavors.
      </h3>
      <br/>
      <br/>
      <BasicAccordion />
    </>
  );
}
