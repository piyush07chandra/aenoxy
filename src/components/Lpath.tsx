
const Lpath = () => {
  return (
    <>
    <div className="mt-16 mb-8">
        <h1 className="text-4xl text-center font-semibold">Learning paths based on your answers</h1>
        <p className="text-center mt-2">choose one to get started. You can switch anytime.</p>
        <div className="lg:flex mx-auto justify-center mt-4">
            <div className="flex border-2 border-gray-300 p-8">
                <h1><span className="font-semibold">Foundational Math</span> Build<br/>
                     your foundational skills in<br/>
                      algebra,geometry, and <br/>
                      probability</h1>
                <img className="h-36 w-36" src="/h.png"/>
            </div>
            <div className="flex border-2 border-gray-300 p-8">
                <h1><span className="font-semibold">Mathematical Thinking</span><br/>
                    Build your foundational<br/>
                    skills in algebra, grometry,<br/>
                    and probability.
                </h1>
                <img className="h-36 w-36" src="/h.png"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Lpath