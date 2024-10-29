import happyBirthdayGif from '../assets/Happy-Birthday-Confetti.gif';

const BirthdayGraphic = () => {
    return (
        <>
        <div style={{ textAlign: 'center' }}>
        <img 
          src={happyBirthdayGif} 
          alt="Happy Birthday" 
          style={{ width: '90%', height: 'auto' }} 
        />
      </div>
        </>
   
    );
};

export default BirthdayGraphic;