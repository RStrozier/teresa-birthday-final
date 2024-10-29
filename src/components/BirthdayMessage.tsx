import ColorWave from '../assets/Transparent-Wave.png'

const BirthdayMessage = () => {
  return (
    <>
      <img 
      className='color-wave-image'
      src={ColorWave}></img>
        <div className="birthday-message-container">
        <div className="text-lg poppins-medium">Happy Birthday! 
          <br />
          <span className='accent-text'>Dear Teresa,</span></div>
        <p className="quicksand-text">You are such a delightful person to know! You exude all of the fruits of the 
            spirit. You are patient, generous, and loving. You are constantly pouring back
            into others whether that be your family, friends, or church community. <u>You walk 
            into a room and instantly it becomes a better space</u>. Some days you even bless 
            those around you with your <span className='banana-text'>delicious banana pudding</span> and homemade chocolate chip
            oatmal cookies. I mean who does that?! Well... you do. <b>You are always enhancing 
            whatever is around you.</b> 365 days a year you are pouring out your wisdom and grace.
            But for today, I pray that everything you have poured out this year gets <span className='purple-text'>
            returned to sender </span>. Hope for blessings to pour over into your life. May the next 365 days be
            better than you could ever expect. Today is DAY ONE! 
        </p>
        <div className="signiture">-Rashida</div>
        <div className="spacer"></div>
    </div>
    </>
  )
}

export default BirthdayMessage