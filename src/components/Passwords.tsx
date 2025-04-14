import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Copy from '../assets/Copy';
import toast, { Toaster } from 'react-hot-toast';
import Edit from '../assets/Edit';
import Delete from '../assets/Delete';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';

const Passwords = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [passwords, setPasswords] = useState<any[]>([]);

  useEffect(() => {
    const savedPasswords = JSON.parse(localStorage.getItem("password") || "[]");
    setPasswords(savedPasswords);
  }, [location.key]);

  const notify = (popup: any,) => toast(<h6>{popup}</h6>, {
    duration: 2000,
    position: 'top-center',
    style: { "height": "40px", "width": "max-contnet" },
    className: '!bg-transparent !decoration-0 !shadow !font-medium',
    icon: "✅",
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
    removeDelay: 1000,
  });
  console.log(passwords);
  
  const handleCopytext = (text: any, field: any) => {
    navigator.clipboard.writeText(text);
    notify(`Copied ${field} to ClipBoard!`)
  }

  const handleEdit = (id: any) => {
    console.log('Id Edited:- ',id);

  }
  const handleDelete = (id: any) => {
    console.log('Id deleted:- ',id);
    console.log(passwords);
    passwords.forEach((e,i) => {
      if (e.id===id) {
        passwords.splice(i, 1);
      }
    });
    console.log(passwords);
    
    // const filterList:any[] = passwords.filter((item)=>{
    //   item.id!==id
    // })
    
    setPasswords(passwords)
    localStorage.setItem("password",JSON.stringify(passwords))
    navigate("/Passwords")
  
    
  }
  const handleDeleteAll = () => {
    if (passwords.length > 0) {
      localStorage.clear()
      navigate("/passwords")
    }


  }





  return (
    <>
      <div className="passwords select-none mt-10 container m-auto h-screen">
        <div className="relative overflow-x-auto rounded-md shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400 table-fixed">
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead className="text-lg text-black uppercase bg-slate-300">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">Website</th>
                <th scope="col" className="px-6 py-3">Username</th>
                <th scope="col" className="px-6 py-3">Password</th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-center gap-10">
                    <span>Actions</span>
                    <span onClick={() => handleDeleteAll()} data-tooltip-id="Dltall"
                      className="show-password flex items-center justify-center h-10 w-28 rounded-md shadow-md">
                      <button
                        className="flex justify-center items-center w-max h-max text-black transition-colors duration-200 bg-transparent border border-black rounded-md focus:outline-none cursor-pointer hover:bg-slate-300 hover:scale-105 text-[13px]"
                      >
                        <span className="font-semibold">Delete All Passwords!</span>
                      </button>
                      <Tooltip arrowColor="#08a88a" id="Dltall" place="top" content="Delete All Fields!" className="copy" />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {passwords.length > 0 ? (
                passwords.map((item, index: number) => (
                  <tr
                    key={index}
                    className="text-center bg-slate-400 border-b text-lg border-slate-600 hover:bg-slate-500"
                  >

                    <td className="px-6 py-2 text-black align-top">
                      <div className="flex items-center justify-center gap-2 break-all whitespace-normal">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:scale-102 transition-transform duration-200 break-all"
                        >
                          {item.url}
                        </a>
                        <span onClick={() => handleCopytext(item.url, "URL")} className="mt-1"><Copy /></span>
                        <Toaster />
                      </div>
                    </td>


                    <td className="px-6 py-2 text-black align-top">
                      <div className="flex items-center justify-center gap-2 break-all whitespace-normal">
                        <span className="break-all">{item.username}</span>
                        <span onClick={() => handleCopytext(item.username, "Username")} className="mt-1"><Copy /></span>
                        <Toaster />
                      </div>
                    </td>


                    <td className="px-6 py-2 text-black align-top">
                      <div className="flex items-center justify-center gap-2 break-all whitespace-normal">
                        <span className="break-all">{item.password}</span>
                        <span onClick={() => handleCopytext(item.password, "Password")} className="mt-1"><Copy /></span>
                        <Toaster />
                      </div>
                    </td>


                    <td className="px-6 py-2 text-black align-top">
                      <div className="flex items-center justify-center gap-2">
                        <span onClick={() => handleEdit(item.id)} className="cursor-pointer"><Edit /></span>
                        <span onClick={() => handleDelete(item.id)} className="cursor-pointer"><Delete /></span>
                        <Toaster />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-slate-300 border-b border-slate-600">
                  <td colSpan={4} className="px-6 py-4 text-black text-2xl text-center">
                    No Passwords Yet!!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Passwords
