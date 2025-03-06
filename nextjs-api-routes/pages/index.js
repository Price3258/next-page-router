import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault(); // block reloading

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch("localhost://3000/api/feedback");
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onClick={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackRef} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
