// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// import { useState } from "react";
// import axios from "axios";
// function App() {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [report, setReport] = useState(null);

//   const handleAnalyze = async () => {
//     if (!url) return alert("Please enter a URL");

//     try {
//       setLoading(true);

//       const response = await axios.post("http://localhost:8000/analyze", {
//         url: url,
//       });

//       setReport(response.data.report);
//     } catch (error) {
//       console.error(error);
//       alert("Error analyzing website");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       {/* HEADER */}
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         🚀 Visual QA Platform
//       </h1>

//       {/* INPUT SECTION */}
//       <div className="flex gap-4 justify-center mb-8">
//         <input
//           type="text"
//           placeholder="Enter website URL..."
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           className="w-1/2 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
//         />

//         <button
//           onClick={handleAnalyze}
//           className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           {loading ? "Analyzing..." : "Analyze"}
//         </button>
//       </div>

//       {/* RESULTS */}
//       {report && (
//         <div className="max-w-5xl mx-auto">
//           {/* SCORES */}
//           <div className="grid grid-cols-2 gap-6 mb-8">
//             <div className="bg-gray-800 p-6 rounded-xl text-center">
//               <h2 className="text-xl mb-2">UI Score</h2>
//               <p className="text-4xl font-bold text-green-400">
//                 {report.ui_score}
//               </p>
//             </div>

//             <div className="bg-gray-800 p-6 rounded-xl text-center">
//               <h2 className="text-xl mb-2">Accessibility Score</h2>
//               <p className="text-4xl font-bold text-yellow-400">
//                 {report.accessibility_score}
//               </p>
//             </div>
//           </div>

//           {/* ISSUES */}
//           <div>
//             <h2 className="text-2xl mb-4">Issues Found</h2>

//             <div className="space-y-4">
//               {report.issues.map((issue, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800 p-4 rounded-lg border border-gray-700"
//                 >
//                   <h3 className="text-lg font-semibold text-red-400">
//                     {issue.issue_title}
//                   </h3>

//                   <p className="text-sm text-gray-300 mt-2">
//                     {issue.description}
//                   </p>

//                   <span className="inline-block mt-3 text-xs bg-gray-700 px-3 py-1 rounded">
//                     {issue.category}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import { useState, useRef } from "react";
import axios from "axios";
import generatePDF from "react-to-pdf";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [screenshot, setScreenshot] = useState(null);

  const reportRef = useRef();

  const handleAnalyze = async () => {
    if (!url) return alert("Please enter a URL");

    try {
      setLoading(true);

      const response = await axios.post("https://visual-qa-platform.onrender.com/analyze", {
        url: url,
      });

      setReport(response.data.report);
      setScreenshot(response.data.screenshot);
    } catch (error) {
      console.error(error);
      alert("Error analyzing website");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* HEADER */}
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          🚀 Visual QA Platform
        </h1> */}
      <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold tracking-wide">
    🚀 Visual QA Platform
  </h1>

        {/* {report && (
          <button
            onClick={() =>
              generatePDF(reportRef, { filename: "visual-report.pdf" })
            }
            className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Download Report
          </button>
        )}
      </div> */}
{report && (
    <button
      onClick={() =>
        generatePDF(reportRef, { filename: "visual-report.pdf" })
      }
      className="mt-4 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
    >
      Download Report
    </button>
  )}
</div>
      {/* INPUT */}
      <div className="flex gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-1/2 p-3 rounded-lg bg-gray-800 border border-gray-700"
        />

        <button
          onClick={handleAnalyze}
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* REPORT */}
      {report && (
        <div ref={reportRef} className="max-w-6xl mx-auto">
          {/* SCORES */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h2 className="text-xl mb-2">UI Score</h2>
              <p className="text-4xl font-bold text-green-400">
                {report.ui_score}
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h2 className="text-xl mb-2">Accessibility Score</h2>
              <p className="text-4xl font-bold text-yellow-400">
                {report.accessibility_score}
              </p>
            </div>
          </div>

          {/* ISSUES */}
          <h2 className="text-2xl mb-4">Issues Found</h2>
          <div className="space-y-4 mb-10">
            {report.issues.map((issue, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-red-400">
                  {issue.issue_title}
                </h3>

                <p className="text-sm text-gray-300 mt-2">
                  {issue.description}
                </p>

                <span className="inline-block mt-3 text-xs bg-gray-700 px-3 py-1 rounded">
                  {issue.category}
                </span>
              </div>
            ))}
          </div>

          {/* SCREENSHOT + BOUNDING BOXES */}
          {screenshot && (
            <div>
              <h2 className="text-2xl mb-4">Screenshot Analysis</h2>

              <div className="relative border border-gray-700 rounded-lg overflow-hidden">
                <img
                  src={`data:image/png;base64,${screenshot}`}
                  alt="Screenshot"
                  className="w-full"
                />

                {report.issues.map((issue, index) => {
                  const box = issue.bounding_box;

                  return (
                    <div
                      key={index}
                      className="absolute border-2 border-red-500"
                      style={{
                        top: `${box.top}%`,
                        left: `${box.left}%`,
                        width: `${box.width}%`,
                        height: `${box.height}%`,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;