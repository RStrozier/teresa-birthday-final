const BirthdayVideo = () => {
    return (
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe 
          src="https://player.vimeo.com/video/1024227363?badge=0&autopause=0&controls=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&app_id=58479" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
          frameBorder="0" 
          allowFullScreen 
          title="Happy-Birthday-Final"
        ></iframe>
      </div>
    );
  };
  
  export default BirthdayVideo;