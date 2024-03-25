

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto rounded-xl hero min-h-screen bg-base-200">
  <div className="hero-content  lg:gap-32 flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/nBPmbQp/img2.jpg" className="lg:max-w-sm  shadow-2xl" />
    <div className="">
      <h1 className=" mb-10 text-xl  md:text-5xl font-bold">Books to freshen
      <br/> up your bookshelf</h1>
     
      <button className="btn  bg-green-400">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;