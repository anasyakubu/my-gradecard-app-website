export default function video() {
  return (
    <div className="Video bg-gray-900">
      <div className="p-10">
        <video className="h-full w-full rounded-lg" controls autoPlay>
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
