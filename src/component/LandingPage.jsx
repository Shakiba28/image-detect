
export default function LandingPage() {

    return (
        <>
            <div className="">
                <div className="flex py-4 my-12">
                    <div className=" text-center self-center mt-10 w-1/3">
                        <p className="text-blue-950 text-3xl">
                            You Don't Know What?
                        </p>
                        <p className="text-blue-950 text-xl">
                            Enter The Photo And I Will Tell You!
                        </p>
                    </div>
                    <img src="./../../public/asset-selection-animate.svg" className="w-2/3" alt="" />

                </div>
                <div className="flex justify-center mb-48">
                    <button className="duration-700 p-4 bg-blue-950 text-white border rounded-lg"><a className="" href="#image-detect">Get Start ↓</a> </button>
                </div>
            </div>
        </>
    )
}