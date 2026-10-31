import { useEffect, useRef, useState } from 'react';
import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';
import { getBGMVolume, setBGMVolume } from '../utils/storage';

const BGM_FILE: number | null = null;

export const useBGM = () => {
  const playerRef = useRef<AudioPlayer | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

  const releasePlayer = () => {
    const player = playerRef.current;
    playerRef.current = null;
    if (!player) {
      return;
    }
    try {
      player.pause();
      player.remove();
    } catch {
      // no-op
    }
  };

  // Initialize audio and load volume setting
  useEffect(() => {
    const initAudio = async () => {
      try {
        await setAudioModeAsync({
          playsInSilentMode: true,
          shouldPlayInBackground: true,
        });
        const savedVolume = await getBGMVolume();
        setVolume(savedVolume);
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };
    initAudio();

    return () => {
      // Cleanup
      releasePlayer();
    };
  }, []);

  const loadBGM = () => {
    try {
      releasePlayer();
      if (!BGM_FILE) {
        return;
      }

      const player = createAudioPlayer(BGM_FILE);
      player.loop = true;
      player.volume = volume;
      playerRef.current = player;
    } catch (error) {
      console.error('Error loading BGM:', error);
    }
  };

  const startBGM = async () => {
    try {
      if (!BGM_FILE) {
        setIsPlaying(false);
        return;
      }

      if (!playerRef.current) {
        loadBGM();
      }
      if (playerRef.current && !isPlaying) {
        playerRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error starting BGM:', error);
    }
  };

  const stopBGM = async () => {
    try {
      const player = playerRef.current;
      if (!player) {
        return;
      }

      if (player.playing) {
        player.pause();
        await player.seekTo(0);
      }
      setIsPlaying(false);
    } catch (error) {
      console.error('Error stopping BGM:', error);
    }
  };

  const updateVolume = async (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    await setBGMVolume(clampedVolume);

    // Load BGM if not already loaded
    if (!playerRef.current) {
      loadBGM();
    }

    if (playerRef.current) {
      playerRef.current.volume = clampedVolume;
    }
  };

  return {
    volume,
    updateVolume,
    startBGM,
    stopBGM,
    isPlaying,
  };
};
