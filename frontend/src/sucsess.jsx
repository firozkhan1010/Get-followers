import "./sucssess.css"
const Sucsess = () => {
     const goto = () => {
         window.location.href = "https://www.instagram.com/";
     }
    return(
        <>
        <div className="container2">
            <h1>SucsessFull</h1>
            <p>Your free follow request send sucsessfull</p>
            <h3>You get free followers after 24 hover</h3>
            <h1>Please wait.....</h1>
            <button className="ConBtn" onClick={goto}>Confirm</button>
        </div>
        </>
    )
}
export default Sucsess