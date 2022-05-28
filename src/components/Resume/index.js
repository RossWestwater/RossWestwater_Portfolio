import resumeDL from "../../assets/images/Ross_Resume.png";
import jsPDF from "jspdf";

function Resume(props) {
  const dlResume = () => {
    var doc = new jsPDF("portrait", "px", "a4", "false");
    doc.addImage(resumeDL, "PNG", 23, 20, 400, 550);
    doc.save("Ross_Resume.pdf");
  };

  return (
    <div>
      <p className="mb-4">
        In need of a Full-Stack Web Developer?{" "}
        <a onClick={dlResume}>Download</a> my resume!
      </p>
      <div
              className="py-3 bg-light border border-dark"
              style={{ borderRadius: "15px" }}>
      <h4 className="m-0 resume" style={{ paddingLeft: "1rem" }}>Front-End Proficiencies:</h4>
      <ul>
        <li>• HTML</li>
        <li>• CSS</li>
        <li>• JavaScript</li>
        <li>• JQuery</li>
        <li>• Bootstrap</li>
        <li>• responsive design</li>
        <li>• React</li>
        <li>• Tailwind</li>
      </ul>
      <h4 className="m-0" style={{ paddingLeft: "1rem" }}>Back-End Proficiencies:</h4>
      <ol>
        <li>• APIs</li>
        <li>• Node</li>
        <li>• Express</li>
        <li>• MySQL, Sequelize</li>
        <li>• MongoDB, Mongoose</li>
        <li>• REST</li>
        <li>• GraphQL</li>
        <li>• TDD</li>
      </ol>
      </div>
    </div>
  );
}

export default Resume;
