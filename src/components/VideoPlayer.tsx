import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

const VideoPlayer = ({ src, poster, title, className = '' }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('video') as HTMLVideoElement;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-3d ${className}`}>
      <video
        id="video"
        className="w-full h-full object-cover"
        poster={poster}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <motion.button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white ml-1" size={20} />}
          </motion.button>
          
          <motion.button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX className="text-white" size={16} /> : <Volume2 className="text-white" size={16} />}
          </motion.button>
        </div>
        
        {title && (
          <div className="absolute top-4 left-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;