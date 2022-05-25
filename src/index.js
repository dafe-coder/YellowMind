import alex from './alex.MP4';
import vladyk from './vladyk.MP4';
import dimas from './dimas.MP4';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';
const team = [
	{
		name: 'Aleksandr',
		position: 'Ui / Ux Designer',
		fistText: [
			{
				text: "Hi! My name is Alex and I'm professional Ui/Ux designer from Ukraine, Kyiv.",
			},
			{
				text: 'How  would you like to Power Up your business with modern design while staying the best one in your niche??',
			},
			{
				text: 'I know how to help you!! ',
			},
		],
		imgPath: alex,
		hobbies: [
			{
				hobbiesTitle: 'I love sport',
				hobbiesImg: '',
			},
			{
				hobbiesTitle: 'I love sport',
				hobbiesImg: '',
			},
			{
				hobbiesTitle: 'I love sport',
				hobbiesImg: '',
			},
			{
				hobbiesTitle: 'I love sport',
				hobbiesImg: '',
			},
		],
		secondText: [
			{
				text: 'We guarantee high level Services, and since we only work on one project at a time, we do not lose speed and deliver highest Quality. We are every time open for your needs and success.',
			},
			{
				text: 'For more than six years I wokred on the various projects for various companies in the cybersecurity, fashion, food, entertainment, public services and other sectors.',
			},
		],
	},
	{
		name: 'Dmitry',
		position: 'Front-End Developer',
		fistText: [
			{
				text: "Hi! My name is Dmitry and I'm professional Front-End Developer from Ukraine, Kyiv.",
			},
			{
				text: 'How  would you like to Power Up your business with modern design while staying the best one in your niche??',
			},
			{
				text: 'I know how to help you!! ',
			},
		],
		imgPath: dimas,
		hobbies: [
			{
				hobbiesTitle: 'I love sport',
				hobbiesImg:
					'https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740__340.jpg',
			},
			{
				hobbiesTitle: 'I love coding',
				hobbiesImg:
					'https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig=',
			},
			{
				hobbiesTitle: 'I love money',
				hobbiesImg:
					'https://media.istockphoto.com/photos/dollars-in-100-bills-in-a-mans-hand-closeup-on-a-dark-background-picture-id1227594879?b=1&k=20&m=1227594879&s=170667a&w=0&h=k_AOnTOTZ14PNME4lmbpj8X4XNtoDymfXSNkVJ8bhbE=',
			},
			{
				hobbiesTitle: 'I love Crypto',
				hobbiesImg:
					'https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728__340.jpg',
			},
		],
		secondText: [
			{
				text: 'We guarantee high level Services, and since we only work on one project at a time, we do not lose speed and deliver highest Quality. We are every time open for your needs and success.',
			},
			{
				text: 'For more than six years I wokred on the various projects for various companies in the cybersecurity, fashion, food, entertainment, public services and other sectors.',
			},
		],
	},
	{
		name: 'Vladyslav',
		position: 'Back-End Developer',
		fistText: [
			{
				text: "Hi! My name is Vladyslav and I'm professional Back-End Developer from Ukraine, Kyiv.",
			},
			{
				text: 'How  would you like to Power Up your business with modern design while staying the best one in your niche??',
			},
			{
				text: 'I know how to help you!! ',
			},
		],
		imgPath: vladyk,
		hobbies: [
			{
				hobbiesTitle: 'I love write games',
				hobbiesImg: '',
			},
			{
				hobbiesTitle: 'I love tiktok',
				hobbiesImg: '',
			},
		],
		secondText: [
			{
				text: 'We guarantee high level Services, and since we only work on one project at a time, we do not lose speed and deliver highest Quality. We are every time open for your needs and success.',
			},
			{
				text: 'For more than six years I wokred on the various projects for various companies in the cybersecurity, fashion, food, entertainment, public services and other sectors.',
			},
		],
	},
];
ReactDOM.render(
	<StrictMode>
		<App team={team} />
	</StrictMode>,
	document.getElementById('root')
);
