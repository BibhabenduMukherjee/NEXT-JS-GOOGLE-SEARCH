import React from "react";
import { useRouter } from "next/router";
function con() {
  const router = useRouter();
  const goback = (e) => {
    e.preventDefault();

    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/2 bg-cover md:block hidden">
        <img
          src="https://images.unsplash.com/photo-1634840150834-f6d4544f5b9b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      {/* <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
        <img src="log_in.webp" alt="hey" />
      </div> */}

      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Show your interest Send some feedback
          </h1>
          <h3 className="p-1 text-gray-700">
            Feel free to sending feedback to me!
          </h3>
        </div>
        <form action="#" className="p-0" required>
          <div className="mt-5">
            <label for="email" className="sc-bqyKva ePvcBv">
              Your Name
            </label>
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Type your name!"
              required
            />
          </div>
          <div className="mt-5">
            <label for="email" className="sc-bqyKva ePvcBv">
              Email
            </label>
            <input
              type="email"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Type you email😍"
            />
          </div>
          <div className="mt-5">
            <label for="feedback" className="sc-bqyKva ePvcBv">
              Your Feedback !
            </label>
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Feedback"
            />
          </div>

          <div className="mt-6 block p-5 text-sm md:font-sans md:text-xs text-gray-800">
            <input type="checkbox" className="inline-block border-0  " />
            <span display="inline" className="">
              By sending details you are agreeing to our
              <a className="" href="/s/terms" target="_blank" data-test="Link">
                <span className="underline ">Terms and Conditions</span>{" "}
              </a>{" "}
              and
              <a
                className=""
                href="/s/privacy"
                target="_blank"
                data-test="Link"
              >
                <span className="underline">Privacy Policy</span>{" "}
              </a>
            </span>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Submit"
              className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
              onClick={goback}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default con;
