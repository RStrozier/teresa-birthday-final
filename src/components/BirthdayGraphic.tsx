import happyBirthdayGif from '../assets/Happy-Birthday-Confetti.gif';

const BirthdayGraphic = () => {
    return (
        <>
        <div style={{ textAlign: 'center' }}>
        <img 
          src={happyBirthdayGif} 
          alt="Happy Birthday" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
      <div className="mini-spacer"></div>
        </>
   
    );
};

export default BirthdayGraphic;