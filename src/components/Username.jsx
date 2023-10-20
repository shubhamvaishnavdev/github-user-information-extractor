import React, { useState } from 'react'

const Username = ({ setUserName, userCard, setuserCard, loading }) => {

    const [inputValue, setInputValue] = useState(''); // for accessing user input



    // Update inputValue when the input text changes
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    //handle form submit
    function handleSubmit(e) {
        e.preventDefault(); //avoid page to refresh itself
        if (inputValue.trim() === '') {
            alert("Enter Username")
        } else {
            setUserName(inputValue); // Set username of user
            setInputValue('') // reset input value
        }

    }



    return (
        <div className={`w-full max-w-md mx-auto ${userCard ? 'hidden' : 'block'}`}>
            <form
                className="flex flex-col md:flex-row items-center justify-center space-x-2 gap-4 md:gap-0"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="w-[80%] md:w-full px-4 py-2 rounded-lg border"
                    placeholder="Enter your GitHub username"
                    value={inputValue} // set input value via state
                    onChange={handleInputChange} // get values as input change
                />
                <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default Username