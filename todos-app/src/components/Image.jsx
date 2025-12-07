
export default function Image({url, name}) {
  return (
    <div className="image">
    <img src={url} alt={`Image of ${name}`} className='list-image'/>
 </div>
  );
};
