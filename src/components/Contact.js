
const Contact = () =>{
    return(
        <div>
            <h1 className="font-bold text-2xl p-2 m-2">Contact</h1>
             <form>
                <input className="border border-black p-2 m-2" type="text" placeholder="First Name"></input>
                <input className="border border-black p-2 m-2" type="text" placeholder="Last Name"></input>
                <button className="border border-black p-2 m-2 rounded-lg">Submit</button>
             </form>
        </div>
    )
}

export default Contact;