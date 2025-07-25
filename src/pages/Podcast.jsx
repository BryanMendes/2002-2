import React, { useRef, useState } from 'react';
import LazyImage from '../components/LazyImage/LazyImage';

const audioSrc = '/trailer%20puro%20som%205.wav';
const coverImg = '/capa-trailer.jpeg'; // Nova imagem de capa

function Podcast() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: 'rgba(34, 34, 34, 0.45)', borderRadius: 16, padding: 24, color: '#fff', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 16, fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase' }}>trailer</h2>
      <LazyImage src={coverImg} alt="Capa do Podcast" style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={handlePlayPause} style={{ fontSize: 32, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          {isPlaying ? '❚❚' : '►'}
        </button>
        <div style={{ flex: 1 }}>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            step={0.1}
            style={{ width: '100%' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 4 }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }} aria-label="Volume">
          <path d="M3 9v6h4l5 5V4L7 9H3z" fill="#F0F0C0"/>
          <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06A4.978 4.978 0 0016.5 12z" fill="#F0F0C0"/>
          <path d="M14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.5-.51 8-4.31 8-8.77s-3.5-8.26-8-8.77z" fill="#F0F0C0"/>
        </svg>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
}

export default Podcast;