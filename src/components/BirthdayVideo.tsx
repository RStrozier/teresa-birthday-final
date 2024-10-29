const BirthdayVideo = () => {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <iframe 
        src="https://player.vimeo.com/video/1024390671?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" // Updated link with parameters to hide title and username
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
        frameBorder="0" 
        allowFullScreen 
        title="Teresa-Birthday-Movie-Final-Edit" 
      ></iframe>
    </div>
  );
};

export default BirthdayVideo;