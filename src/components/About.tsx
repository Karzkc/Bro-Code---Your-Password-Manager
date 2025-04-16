import pfp from "../assets/pfp.jpg"
const About = () => {

  return (
    <>
      <div className="select-none shadow-2xl bg-transparent backdrop-blur-2xl container h-[75vh] mb-15 mx-auto flex flex-col items-center justify-center text-center  rounded-2xl  bg-gradient-to-br from-slate-100 to-slate-200 p-6">
        <div className="pfp mb-6 border-4 border-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/karzkc">
            <img
              className="rounded-full object-cover"
              src={pfp}
              alt="pfp"
              height={100}
              width={100}
            />
          </a>
        </div>

        <div className="desc text-2xl text-gray-800">
          <h1 className="text-4xl font-bold mb-3">Hey, I'm Kartik 👋</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            An enthusiastic React developer always eager to learn.<br />
            More to come...<br />
            <span className="inline-block mt-2">
              👉 Do follow me on
              <a
                className="text-blue-600 hover:underline ml-1 font-medium"
                href="https://github.com/karzkc"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </p>
        </div>
      </div>

    </>
  )
}

export default About
