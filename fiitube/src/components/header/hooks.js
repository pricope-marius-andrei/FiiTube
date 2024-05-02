import { useRef, useEffect } from 'react';

export const useHeader = () => {
	const widgetRef = useRef();
	const cloudinaryRef = useRef();

	useEffect(() => {
		cloudinaryRef.current = window.cloudinary;
		widgetRef.current = cloudinaryRef.current.createUploadWidget(
			{
				cloudName: 'dvowumf2k',
				uploadPreset: 'otxanyar',
				sources: ['local'],
				showAdvancedOptions: true,
				getUploadPresets: ['otxanyar'],

				styles: {
					palette: {
						window: '#212130',
						windowBorder: '#white',
						tabIcon: 'white',
						menuIcons: '#E4DFED',
						textDark: '#FFFFFF',
						textLight: '#00000',
						link: 'white',
						action: '#FF620C',
						inactiveTabIcon: '#0E2F5A',
						error: '#F44235',
						inProgress: '#0078FF',
						complete: '#20B832',
						sourceBg: '#E4EBF1',
					},
					frame: {
						background: '#212130',
					},
					fonts: {
						// "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
					},
				},
			},
			function (error) {
				console.log(error);
			},
		);
	}, []);

	return {
		widgetRef,
	};
};
