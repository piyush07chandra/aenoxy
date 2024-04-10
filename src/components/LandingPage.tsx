import { useState, useEffect } from 'react';
import './ProgressionBar.css'

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);
  return (
    <>
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
    {/* first */}
    <div className="text-center ">
            <h1 className="text-4xl mt-4 font-semibold">which describes you best?</h1>
            <p className="text-lg my-4">This will us personalize your experience</p>
        </div>

    <div className="flex items-center justify-center">          
<div className=" ">
        <div className="flex border-gray-300 border-2 w-96 m-2"><img className="h-14" src='/one.png'/><h1 className="mt-5 ml-2">Student or soon to be enrolled</h1></div>
        <div className="flex border-gray-300 border-2 w-96 m-2"><img className="h-14 ml-5" src='/two.png'/><h1 className="mt-5 ml-6">Professional pursing a career</h1></div>
        <div className="flex border-gray-300 border-2 w-96 m-2"><img className="h-14 ml-2" src='/three.png'/><h1 className="mt-5 ml-4">Parent of a school-age child</h1></div>
        <div className="flex border-gray-300 border-2 w-96 m-2"><img className="h-14" src='/four.png'/><h1 className="mt-5 ml-2">Lifelong learner</h1></div>
        <div className="flex border-gray-300 border-2 w-96 m-2"><img className="h-14 ml-4" src='/five.PNG'/><h1 className="mt-5 ml-4">Teacher</h1></div>
        <div className="flex border-gray-300 border-2 w-96 m-2"><img className="h-14 ml-4" src='/six.png'/><h1 className="mt-5 ml-4">Other</h1></div>
        <button className="bg-gray-400 text-white mx-auto flex px-10 py-2 rounded-md">Continue</button>
</div>   
    </div>

    {/* second */}
    <div className="text-center text-4xl">
            <h1 className="text-4xl mt-4 font-semibold">which are you most intrested in?</h1>
            <p className="text-lg my-4">Choose just one.This will help us get you started(but won't limit your experience).</p>
        </div>

    <div className="flex items-center justify-center">          
<div className=" ">
        <div className="flex border-gray-300 border-2 w-full mt-2"><img className="h-14" src='/a.png'/><h1 className="mt-5">Learning specific skills to advance my career</h1></div>
        <div className="flex border-gray-300 border-2 w-full mt-2"><img className="h-14 ml-5" src='/b.png'/><h1 className="mt-5">Exploring new topics I'm interested in</h1></div>
        <div className="flex border-gray-300 border-2 w-full mt-2"><img className="h-14 ml-2" src='/c.png'/><h1 className="mt-5">Refreshing my math foundations</h1></div>
        <div className="flex border-gray-300 border-2 w-full mt-2"><img className="h-14" src='/d.png'/><h1 className="mt-5">Exercising my brain to stay sharp</h1></div>
        <div className="flex border-gray-300 border-2 w-full mt-2"><img className="h-14 ml-4" src='/e.png'/><h1 className="mt-5">Something else</h1></div> 
        <button className="bg-black text-white mx-auto flex px-10 py-2 mt-4 rounded-md">Continue</button>
</div>   
    </div>
    {/* third */}
    <div className="lg:flex mt-10 lg:ml-40">
      <div><img className="h-96 w-96" src="/f.png"/></div>
      <div className="text-center lg:ml-36 mt-28"> 
        <h1 className="text-4xl mb-4 font-semibold">You're in the right place</h1>
        <p>Brilliant gets you hands-on to help improve your Professional<br/>
          skills and knoledge. You'll interact with concepts and solve <br/>
          fun problems in math, science, and computer science.
        </p>
      </div>
    </div>
    <button className="bg-black text-white mx-auto flex px-10 py-2 rounded-md">Continue</button>
    {/* fourth */}
    <div className="mt-14">
      <h1 className="text-4xl text-center font-semibold">What is your math comfort level?</h1>
      <p className="text-center">Choose the higest level you feel confident in - you can always adjust later.</p>
      <div className="lg:flex ml-28 mt-8">
        <div className=" border-2 border-gray-300 p-14 w-60 h-60 text-center ml-3">
          <h1>5x1/2=?</h1>
          <h1 className="text-center">Arithmetic</h1>
          <h1>introductory</h1>
        </div>
        <div className=" border-2 border-gray-300 p-14 w-60 h-60 text-center ml-3">
          <h1>3𝑥+5=4</h1>
          <h1>Basic Algebra</h1>
          <h1>Foundational</h1>
        </div>
        <div className=" border-2 border-gray-300 p-12 w-60 h-60  text-center ml-3">
          <h1>𝑥=-𝐛±√b²-4ac/2a</h1>
          <h1>Intermediate Algebra</h1>
          <h1>Intermediate</h1>
        </div>
        <div className=" border-2 border-gray-300 p-14 w-60 h-60 text-center ml-3">
          <h1>ʃ₀ᴸ 𝑥²d𝑥=?</h1>
          <h1>calculas</h1>
          <h1>advanced</h1>
        </div>
      </div>
      <button className="bg-black text-white mx-auto flex px-10 py-2 mt-4 rounded-md">Continue</button>
    </div>
    {/* fifth */}
    <div className="lg:flex mt-10 lg:ml-40">
      <div><img className=" h-80 w-68" src="/g.png"/></div>
      <div className="text-start lg:ml-28"> 
        <h1 className="text-4xl text-center font-semibold">You're on your way!</h1>
        <img className="h-28 w-40" src="/fiveStar.png"/>
        <p className="-mt-8">"Though its engaging and well-structured courses, brilliant has taught me<br/>
          mathematical concepts that I previously struggled to understand.I now feel<br/>
          confident approaching both technical job interviews and real world problem<br/>
          solving situations."
        </p>
        <h1>-Jacob S.</h1>
      </div>
    </div>
    <button className="bg-black text-white mx-auto flex px-10 py-2 mt-4 rounded-md">Continue</button>
    </>
  )
}

export default LandingPage