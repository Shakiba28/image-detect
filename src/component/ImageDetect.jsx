
import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function ImageDetect() {
    const [imageUrl, setImageUrl] = useState('');
    const [prediction, setPrediction] = useState('');
    const [model, setModel] = useState(null);

    useEffect(() => {
        async function loadModel() {
            // const model = await tf.loadLayersModel('../model.json');
            const model = await tf.loadGraphModel('https://tfhub.dev/tensorflow/coco-ssd/1/default/1');

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

