

function Project(props) {
  return (
    <div
      className='max-w-2/5 p-1 rounded-sm text-white'>

      {props.video &&
        <video
          src={props.video} autoplay loop controls>
        </video>
      }
      {props.image &&
        <img
          src={props.image} />}
      <p className="sourGummy font-medium text-sm text-gray-100 mt-3 mr-2">
        {props.text}
      </p>

    </div>

  )
}

export default Project