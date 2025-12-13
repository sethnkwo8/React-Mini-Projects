import { useState } from "react";

export default function ColorPreview() {
    const [color, setColor] = useState('#0000ff')

    function changeColor(e) {
        setColor(e.target.value)
    }

    function changeColorText(e) {
        e.preventDefault();
        console.log(e)
    }



    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="rounded-lg shadow-lg p-8 w-1/2 flex flex-col space-y-4">
                <div className="py-24 rounded-lg" style={{ backgroundColor: color }}>
                </div>
                <div className="text-center">
                    <label className="font-bold" htmlFor="colorSelect">Select a Color: </label>
                    <input className="w-1/6" id="colorSelect" value={color} onChange={(e) => changeColor(e)} type="color" />
                </div>
                <div className="text-center">
                    <p>OR</p>
                </div>
                <form className="text-center" onSubmit={(e) => changeColorText(e)}>
                    <label htmlFor="colorInput">Type in RGB code: </label>
                    <input id="colorInput" className="p-2 outline-0 border border-black" type="text" />
                    <button type="submit">Choose</button>
                </form>
            </div>
        </div>
    );
}