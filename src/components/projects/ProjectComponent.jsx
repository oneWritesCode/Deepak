function Project(props) {
  return (
    <div
      className='w-full sm:max-w-xs md:max-w-sm lg:max-w-md p-2 sm:p-3 rounded-sm text-white flex flex-col items-center'>

      {props.video &&
        <video
          src={props.video} autoPlay loop controls className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover mb-2">
        </video>
      }
      {props.image &&
        <img
          src={props.image} className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover mb-2" />}
      <p className="sourGummy font-medium text-xs sm:text-sm text-gray-100 mt-2 sm:mt-3 mr-0 sm:mr-2 text-center">
        {props.text}
      </p>

    </div>
  )
}

export default Project