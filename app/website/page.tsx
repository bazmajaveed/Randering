import Header from "@/components/header"
import Footer from "@/components/footer";
import Link from "next/link"

export default function About(){
    return(
        <div>
        
        {/* <div className="contact">
       
            <form action="">
                <h1>Login</h1>
            <label className="name">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name"/>
            
            <label className="name">Education</label>
            <input type="text" id="education" placeholder="Enter Your Education"/>

            <label className="name">Email</label>
            <input type="text" id="email" placeholder="Enter Your E-mail"/>

            <label className="name">Phone</label>
            <input type="text" id="phone" placeholder="Enter Your Phone"/> */}

             {/* Submit Button */}
             {/* <button type="submit" className="submit-btn">Submit</button>
            </form>
            </div> */}
           

           <div className="website">

            <h1 className="h2">Including website help your queries so select any one and click the link </h1>


            <Link href={"https://brainly.in/login?entry=2&return=%2F"}  target="_blank" className="btn button-link" >
            <h2 className="h3">Brainly AI</h2>
            </Link>

            <Link href={"https://www.doubtnut.com/"}  target="_blank" className="btn button-link" >
            <h2 className="h3">Doubtnut</h2>
            </Link>

            <Link href={"https://www.gauthmath.com/?is_new_user=1"}  target="_blank" className="  btn button-link " >
            <h2 className="h3">Gauth AI</h2>
            </Link>


            <Link href={"https://en.wikipedia.org/wiki/Quora"}  target="_blank" className="btn button-link" >
            <h2 className="h3">Quora</h2>
            </Link>

            <Link href={"https://www.toppr.com/ask/"}  target="_blank" className="btn button-link" >
            <h2 className="h3">Toppr</h2>
            </Link>


           </div>
        </div>
    )
}


