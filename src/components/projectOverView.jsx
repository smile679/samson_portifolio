

function ProjectOverView() {
  const projectImages = [{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn3_yz6lwo.jpg",
    title : "Merkato Gebeya Full-Stack App",
    link: "https://ecommerce-app-1-q5og.onrender.com/",
  },
{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763417061/bakerFront_xvptpc.jpg",
    title : "Bakery Full-Stack App",
    link : "https://bakery-full-stack-webisite-front.onrender.com/",
},
{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763846372/foodiehome2_hlitdu.webp",
    title : "Foodie Delight",
    link : "https://foodiedelightapp.netlify.app/",
},
{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763846926/movieScope_vhccly.webp",
    title : "Movie Scope",
    link : "https://moviescopapp.netlify.app/",
}]

  return (
    <div className="flex flex-col text-center mt-10">
      <h1 className="text-4xl text-gray-800 font-extrabold text-shadow-emerald-800 text-shadow-lg py-15">Project Highlight</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {
          projectImages && projectImages.map(pro=> (
            <div className="relative w-full max-w-md max-h-70 rounded-2xl hover:scale-110 overflow-hidden shadow-md">
              <img src={pro.image} className="w-full h-full object-cover"/>
              <h2 className="absolute bottom-3 left-6 text-lg">{pro.title}</h2>
            </div>
          ))
        }
      </div>
    </div>
   );
}

export default ProjectOverView;