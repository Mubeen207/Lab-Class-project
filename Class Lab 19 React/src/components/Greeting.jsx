function Greeting(props) {
   
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">

            <div className="border-4 border-[#7f58af] h-[720px] w-[1000px] flex justify-center items-center rounded-3xl bg-gradient-to-br from-[#64c5eb] to-[#a0e9ff] shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">

                <h1 className="text-[#e84d8a] text-8xl font-bold underline">
                    Hello{" "}
                    <span className="text-[#feb326] underline">{props.name}</span>
                </h1>
            </div>
        </div>

    )
}
export default Greeting; 