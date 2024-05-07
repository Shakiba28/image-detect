// import React, { useState, useEffect, useRef } from "react";
// import * as mobilenet from "@tensorflow-models/mobilenet";

// function App() {
//     const [isModelLoading, setIsModelLoading] = useState(false);
//     const [model, setModel] = useState(null);
//     const [imageUrl, setImageUrl] = useState(null);
//     const [results, setResults] = useState([]);

//     const imageRef = useRef();
//     const textInputRef = useRef();
//     const fileInputRef = useRef();

//     const uploadImage = (e) => {
//         const { files } = e.target;
//         if (files.length > 0) {
//             const url = URL.createObjectURL(files[0]);
//             setImageUrl(url);
//         } else {
//             setImageUrl(null);
//         }
//     };

//     const uploadTrigger = () => {
//         fileInputRef.current.click();
//     };

//     const handleInputChange = (e) => {
//         setImageUrl(e.target.value);
//         setResults([]);
//     };

//     const loadModel = async () => {
//         setIsModelLoading(true);
//         try {
//             const model = await mobilenet.load();
//             setModel(model);
//             setIsModelLoading(false);
//         } catch (error) {
//             console.log(error);
//             setIsModelLoading(false);
//         }
//     };

//     useEffect(() => {
//         loadModel();
//     }, []);

//     if (isModelLoading) {
//         return <h2 style={{ textAlign: "center" }}>Initializing</h2>;
//     }

//     const detectImage = async () => {
//         textInputRef.current.value = "";
//         const results = await model.classify(imageRef.current);
//         setResults(results);
//     };

//     return (
//         <div>
//             <h1 className="header">Image Detection</h1>
//             <div className="inputField">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     capture="camera"
//                     className="uploadInput"
//                     onChange={uploadImage}
//                     ref={fileInputRef}
//                 />
//                 <button className="uploadImage" onClick={uploadTrigger}>
//                     Upload Image
//                 </button>
//                 <span className="or">OR</span>
//                 <input
//                     type="text"
//                     placeholder="Enter Image URL"
//                     ref={textInputRef}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div className="imageWrapper">
//                 <div className="imageContent">
//                     <div className="imageArea">
//                         {imageUrl && (
//                             <img
//                                 src={imageUrl}
//                                 alt="Image Preview"
//                                 crossOrigin="anonymous"
//                                 ref={imageRef}
//                             />
//                         )}
//                     </div>
//                     {results.length > 0 && (
//                         <div className="imageResult">
//                             {results.map((result, index) => {
//                                 return (
//                                     <div className="result" key={result.className}>
//                                         <span className="name">{result.className}</span>
//                                         <span className="accuracy">
//                                             Accuracy Level: {(result.probability * 100).toFixed(2)}%{" "}
//                                             {index === 0 && (
//                                                 <span className="bestGuess">Best Guess</span>
//                                             )}
//                                         </span>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//                 {imageUrl && (
//                     <button className="button" onClick={detectImage}>
//                         Detect Image
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default App;




















import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs-converter';


export default function ImageDetect() {
    const [imageUrl, setImageUrl] = useState('');
    const [prediction, setPrediction] = useState('');
    const [model, setModel] = useState(null);

    useEffect(() => {
        async function loadModel() {
            // const model = await tf.loadLayersModel('../model.json');
            const MODEL_URL = '../model/model.json';
            const model = await loadGraphModel(MODEL_URL);

            setModel(model);
        }
        loadModel();
    }, []);

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            setImageUrl(reader.result);
            const imageElement = document.createElement('img');
            imageElement.src = reader.result;
            const image = tf.browser.fromPixels(imageElement);
            // اعمال پیش‌پردازش یا تغییر اندازه تصویر اگر لازم است
            const prediction = await model.predict(image); // فرض شده که model مدل مورد نیاز برای تشخیص عکس باشد
            setPrediction(prediction);
        };
    };

    const handleUrlSubmit = async () => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
            const imageElement = document.createElement('img');
            imageElement.src = reader.result;
            const image = tf.browser.fromPixels(imageElement);
            // اعمال پیش‌پردازش یا تغییر اندازه تصویر اگر لازم است
            const prediction = await model.predict(image); // فرض شده که model مدل مورد نیاز برای تشخیص عکس باشد
            setPrediction(prediction);
        };
    };

    return (
        <>
            <div id="image-detect" className="my-20">
                <div className="text-center">
                    <div className="my-20 flex">
                        <input type="file" accept="image/*" onChange={handleUpload} />
                        <span className="mx-8">Or</span>
                        <input className="p-4 w-2/3 border border-gray-900 text-gray-900 rounded-lg" type="text" placeholder="URL" onChange={(e) => setImageUrl(e.target.value)} />
                    </div>

                    <div className="flex justify-center">
                        <div className="border border-gray-900 text-gray-900 rounded-md p-8 mx-4 w-2/3">
                            <img src={imageUrl} alt="Uploaded" />
                        </div>
                        <div className="border border-gray-900 text-gray-900 rounded-md p-8 mx-4 w-1/3">
                            <p>{prediction}</p>
                        </div>
                    </div>
                    <button onClick={handleUrlSubmit} className="p-4 border border-gray-900 text-gray-900 rounded-lg">Detect Image</button>

                </div>
            </div>
        </>
    );
}

