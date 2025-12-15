import { useState } from "react";

export default function ColorPreview() {
    const [color, setColor] = useState('#0000ff')
    const [colorInput, setColorInput] = useState('')

    function changeColor(e) {
        setColor(e.target.value)
    }

    function changeColorText(e) {
        e.preventDefault();
        setColor(colorInput);
    }

    function saveInput(e) {
        setColorInput(e.target.value);
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Color Picker</h1>
            <div className="rounded-lg shadow-lg p-8 w-full md:w-1/2 flex flex-col space-y-4">
                <div className="py-24 rounded-lg" style={{ backgroundColor: color }}>
                </div>
                <div className="text-center">
                    <label className="font-bold" htmlFor="colorSelect">Select a Color: </label>
                    <input className="w-full" id="colorSelect" value={color} onChange={(e) => changeColor(e)} type="color" />
                </div>
                <div className="text-center">
                    <p>OR</p>
                </div>
                <form className="text-center" onSubmit={(e) => changeColorText(e)}>
                    <label className="my-2" htmlFor="colorInput">Type a color value (e.g. #ff0000) </label>
                    <input id="colorInput" onChange={(e) => saveInput(e)} className="w-2/3 md:w-full p-2 outline-0 border border-black" name="colorInput" type="text" />
                    <button className="my-4 py-4 px-8 text-white bg-gray-500 hover:scale-105 hover:bg-gray-700 ease-in-out transition-all duration-300 rounded-lg mx-4" type="submit">Choose</button>
                </form>
            </div>
        </div>
    );
}