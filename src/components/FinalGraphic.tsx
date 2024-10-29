const FinalGraphic = () => {
  return (
    <>
      <div style={{ position: 'relative', padding: 0, margin: 0, height: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          src="https://player.vimeo.com/video/1024303963?badge=0&autopause=0&controls=0&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0" // Updated link with parameters
          allow="autoplay; fullscreen;"
          style={{ width: '100%', maxWidth: '800px', height: 'auto', aspectRatio: '16/9', border: 'none' }}
          title="Teresa-Wonderfully-Made"
        ></iframe>
      </div>
      <div className="spacer"></div>
    </>
  );
}

export default FinalGraphic;