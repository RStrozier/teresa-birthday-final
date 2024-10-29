import greenLineImage from "../assets/good-green-line.png"; 
const GreenLine = () => {
  return (
    <div>
      <img 
        src={greenLineImage} 
        alt="Green Line" 
        style={{ maxWidth: '100%', height: '90px' }} 
      />
    </div>
  );
}

export default GreenLine;