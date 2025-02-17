"use client";

import React, { useState } from "react";
import { ColorPicker } from "antd";

export default function Home() {
    const [bgColor, setBgColor] = useState("#3b82f6");
    const [secondaryColor, setSecondaryColor] = useState("#9333ea");

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-white p-6"
            style={{
                background: `linear-gradient(135deg, ${bgColor}, ${secondaryColor})`,
            }}
        >
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Всем привет, я Машуко</h1>
            <p className="text-lg mb-6 text-center max-w-md animate-fade-in delay-200">
                Это Масик из будущего
            </p>
            <div className="text-6xl mb-4 animate-spin">👾</div>

            <div
                className="fixed bottom-4 left-4 bg-white p-6 rounded-lg shadow-md w-64 h-64 flex flex-col items-center justify-center"
            >
                <p className="text-black mb-2">Выбери цвет 1</p>
                <ColorPicker
                    value={bgColor}
                    onChange={(color) => setBgColor(color.toHexString())}
                />
                <p className="text-black mt-4 mb-2">Выбери цвет 2</p>
                <ColorPicker
                    value={secondaryColor}
                    onChange={(color) => setSecondaryColor(color.toHexString())}
                />
            </div>
        </div>
    );
}
