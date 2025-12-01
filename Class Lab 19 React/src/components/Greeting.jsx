function Greeting(props) {
    return (
        <div className='h-screen w-full flex justify-center items-center'>

            <div className='border h-[150px] w-[200px] flex justify-center items-center rounded-full'>

                <h1 className='text-red-500 text-2xl underline'>Hello <span className='text-green-500 underline'> {props.name} </span></h1>

            </div>
        </div>
    )
}
export default Greeting;