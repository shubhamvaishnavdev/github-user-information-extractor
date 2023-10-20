import React from 'react'

//UserInfoBox is box-type design shown on right side of the card
const UserInfoBox = ({ label, value }) => (
    <span className='h-auto w-full flex flex-col items-center border-2 border-slate-900'>
        <p className='font-bold'>{value}</p>
        <p>{label}</p>
    </span>
);
const Card = ({ userInfo, userCard, setuserCard }) => {

    //dateFormat convert date string into YYYY-MM-DD Format
    function dateFormat(originalDateString) {
        const date = new Date(originalDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;

    }

    return (
        <div className={`w-[90%] md:h-[40%] md:w-[50%] flex flex-col  ${userCard ? 'block' : 'hidden'}`}>

            {/* main card container holds two child container */}
            <div className='flex flex-col justify-center items-center md:flex-row rounded-xl p-4 bg-slate-300'>

                {/* left container */}
                <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-center gap-2'>
                    <img
                        src={userInfo.avatar_url}
                        alt={userInfo.name}
                        className='rounded-full h-28 w-28 border-2 border-slate-500'
                    />
                    <p><b>name: </b>{userInfo.name ? userInfo.name : "Not provided"}</p>
                    <p><b>username: </b>{userInfo.login}</p>
                </div>

                {/* right container */}
                <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-center gap-2'>
                    <UserInfoBox label='No. of public repos' value={userInfo.public_repos} />
                    <UserInfoBox label='No. of public gists' value={userInfo.public_gists} />
                    <UserInfoBox label='Created at' value={dateFormat(userInfo.created_at)} />
                </div>

            </div>
            {/* button allow user to reenter username for getting information of other repositories */}
            <button
                onClick={() => setuserCard(false)}
                className="my-4 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg "
            >
                Enter again
            </button>

        </div>
    )
}

export default Card