import EyeClose from '../assets/EyeClose';
import EyeOpen from '../assets/EyeOpen';
import Lock from '../assets/Lock';
import Submit from "../assets/Submit";
import { Tooltip } from 'react-tooltip';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const savedPasswords = localStorage.getItem("password");
        if (savedPasswords) {
          setPasswordList(JSON.parse(savedPasswords));
        }
      }, []);

    // useEffect(() => {
    //     let password = localStorage.getItem("passwords");
    //     if (password) {
    //         setPasswordList(JSON.parse(password))
    //     }


    // }, [])
 
    const [pass_show, setPass_show] = useState(false);
    const [form, setForm] = useState({ url: "", username: "", password: "" })
    const [passwordList, setPasswordList] = useState<{ id:any; url: string; username: string; password: string }[]>([])
    const [btnPressed, setBtnPressed] = useState(false);
    let isEmpty: boolean = !(form.url && form.username && form.password)

    const togglePassword = () => {
        setPass_show(!pass_show)
    }

    const submitPassword = () => {
        if (!isEmpty) {
          const newPassword = {
            url: form.url,
            username: form.username,
            password: form.password,
            id: uuidv4(),
          };
      
          setPasswordList((prev) => {
            const updatedList = [...prev, newPassword]; 
            localStorage.setItem("password", JSON.stringify(updatedList)); 
            return updatedList; 
          });
          
          navigate("/Passwords")
        }
        setBtnPressed(true);
      };
    
    const handleForm = (e:any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>

            <div className="container select-none p-10 shadow-2xl bg-transparent backdrop-blur-2xl border-black rounded-2xl h-128 text-black my-5  m-auto flex flex-col items-center justify-center">
                <div className=" flex justify-center items-center heading  md:text-3xl text-2xl">
                    <span>Bro Code - Your Password Manager</span>
                    {<Lock />}
                </div>


                <div className="discription my-3  text-gray-400 md:text-2xl text-xl">
                    A simple password manager that helps you to save your passwords in a secure way.
                </div>
                <div className="inputs flex flex-col items-center justify-center gap-2">
                    <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Enter the Website URL"
                        className="form-input mt-10 md:w-180 sm:w-100 w-60"
                        onChange={handleForm}
                        value={form.url}

                    /> <br />
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter the Username or Email"
                        className="form-input mt-5 md:w-180 sm:w-100 w-60"
                        onChange={handleForm}
                        value={form.username}
                        required
                    /> <br />
                    <div className="relative rounded-[8px] text-center text-black placeholder:text-white w-full bg-transparent h-8 mt-5">
                        <input
                            type={pass_show ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter the Password"
                            className="form-input md:w-full sm:w-100 w-60 bg-transparent py-2 px-4"
                            onChange={handleForm}
                            value={form.password}
                            required
                        />

                        <span data-tooltip-id="Show" className="absolute  right-4 top-[22px] -translate-y-1/2 z-10 flex items-center justify-center">
                            {pass_show ?
                                <button onClick={togglePassword}><EyeClose /></button>

                                :
                                <button onClick={togglePassword}> <EyeOpen /></button>

                            }
                        </span>
                        <Tooltip arrowColor="#08a88a" id="Show" place="bottom" content="Show or Hide Password" className="tooltip" />

                    </div> <br />
                    {btnPressed && isEmpty && (
                        <span className="text-red-500 block mt-2">Please fill out all fields!</span>
                    )}
                    <button
                        data-tooltip-id="Submit"
                        onClick={submitPassword}
                        disabled={btnPressed && isEmpty}
                        className={`submit mt-5 inline-flex items-center h-10 px-5  transition-colors duration-200 bg-slate-200 rounded-md shadow-md focus:outline-none hover:bg-slate-300 ${isEmpty ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-black"}`}
                    >
                        <Submit />
                        <span className="font-semibold ml-5">Add Password</span>
                    </button>
                    <Tooltip arrowColor="#08a88a" id="Submit" place="right" content="Submit Details" className="tooltip" />



                </div> <br />

            </div>

            {passwordList.length > 0 && <div className="show-password flex items-center justify-center h-14 w-64 m-auto mt-0 mb-15 rounded-md shadow-md">
                <NavLink 
                    data-tooltip-id="HomePass"
                    to="/Passwords"

                    className="flex justify-center items-center h-full w-full text-black transition-colors duration-200 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 cursor-pointer hover:bg-slate-300"
                >
                    <span className="font-semibold">Your Passwords</span>
                </NavLink>
                <Tooltip arrowColor="#08a88a" id="HomePass" place="right" content="Your all Passwords" className="tooltip" />

            </div>}
            {passwordList.length === 0 && <div className="show-password flex items-center justify-center h-14 border-black w-96 m-auto mt-0 mb-15">
                <span className="text-gray-500 text-lg"> No Passwords Available , Add Passwords!</span>
            </div>}

        </>
    )
}

export default Home
