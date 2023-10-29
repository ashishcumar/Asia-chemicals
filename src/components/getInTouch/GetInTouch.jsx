import "./GetInTouch.css";

function GetInTouch() {
  return (
    <div className="getInTouch-ctn">
      <p> We are just a click away </p>
      <button
        className="learn-more"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSeR77GCxZ1-hi6ChgZYRTjKGLk2gzyDcns3qIPOZfphdo6eSg/viewform",
            "_blank"
          )
        }
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Get in Touch</span>
      </button>
    </div>
  );
}

export default GetInTouch;
