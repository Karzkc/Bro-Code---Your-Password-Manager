
const Contact = () => {
  return (
    <>
      <div className="select-none shadow-2xl bg-transparent backdrop-blur-2xl container h-[68vh] mx-auto flex flex-col items-center justify-center text-center rounded-2xl mb-20 bg-gradient-to-br from-slate-100 to-slate-200 p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">📬 Contact Me</h1>

        <div className="flex flex-col gap-4 text-lg text-gray-700">

          <a href="mailto:kartikkhiriya3@gmail.com" className="hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" alt="email" className="h-8 w-8 relative right-1" />
          
          </a>

          <a href="https://www.instagram.com/kartikk_0803/" target="_blank" className="hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="h-6 w-6" />
            
          </a>

          <a href="https://x.com/karzkc0803" target="_blank" className="hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg" alt="Twitter" className="h-6 w-6" />
            
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="h-6 w-6" />
            
          </a>

        </div>
      </div>

    </>
  )
}

export default Contact
