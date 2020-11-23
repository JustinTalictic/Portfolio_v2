import styled from 'styled-components';

export const Background = styled.div`
	height: 1000px;
	padding-top: 5rem;
`;

export const Frame = styled.div`
	margin: 0 150px;
	background: red;
`;

export const Title = styled.h1``;

export const CardFrame = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	display: none;
`;

export const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: blue;
	border-radius: 10px;
	height: 250px;
	width: 250px;
	padding: 20px 10px;
	margin: 1rem;
	transition: all 0.5s ease-in-out;

	&:hover {
		transform: scale(1.03);
		transition: all 0.5s ease-in-out;
		cursor: pointer;
		background-image: linear-gradient(
			rgba(255, 255, 255, 0.75),
			rgba(255, 255, 255, 0.75)
		);
	}
`;

export const CardTitle = styled.h2`
	color: white;
`;

export const InfoFrame = styled.div`
	height: 600px;
	align-items: center;
	justify-content: center;
	padding: 2rem;
`;

export const Info = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	grid-template-rows: 20% auto 20%;
	grid-template-areas:
		'img title'
		'img desc'
		'btnwrapper btnwrapper';
`;

export const InfoTitle = styled.h2`
	grid-area: title;
	background: green;
`;

export const Desc = styled.p`
	grid-area: desc;
`;

export const Image = styled.img`
	grid-area: img;
	height: 500px;
	width: 500px;
	object-fit: cover;
	justify-self: center;
`;

export const BtnWrapper = styled.div`
	grid-area: btnwrapper;
	display: flex;
	background: green;
	height: 100%;
	justify-content: center;
`;

export const Button = styled.button`
	background: rgb(255, 195, 15);
	border-radius: 4px;
	font-size: 16px;
	font-weight: bold;
	padding: 16px;
	border: 0;
	color: white;
	cursor: pointer;
	width: 400px;
	height: 50px;
	margin: auto 2rem;
	transition: all 0.5s ease-in-out;

	&:hover {
		transform: scale(1.03);
		transition: all 0.5s ease-in-out;
	}

	&:disabled {
		opacity: 0.5;
	}
`;
