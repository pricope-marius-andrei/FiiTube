import { useState, useRef, useEffect } from 'react';

export const useHome = () => {
  const [enableHamburger, setEnableHamburger] = useState(false);
	const [maximaizedVideo, setMaximaizedVideo] = useState(null);
	const [notificationStatus, setNotificationStatus] = useState(false);

	useEffect(() => {
		console.log(maximaizedVideo);
	}, [maximaizedVideo]);

	const headerRef = useRef(null);
	const videos = [1, 2, 3, 5, 6, 7, 9, 10];

  return{
    enableHamburger,
    setEnableHamburger,
    maximaizedVideo,
    setMaximaizedVideo,
    notificationStatus,
    setNotificationStatus,
    headerRef,
    videos
  }
}