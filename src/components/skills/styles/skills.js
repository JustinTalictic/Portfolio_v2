import styled from 'styled-components';

export const Container = styled.div`
	background: #f1f1f1;
	height: 800px;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		height: 1300px;
	}
`;

export const Wrapper = styled.div`
    max-width: 1000px;
    margin 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;s
    padding: 0 50px;
`;

export const H1 = styled.h1``;

export const Icon = styled.img``;

export const H2 = styled.h2``;

export const Card = styled.div`
	background: #fff;
	display: flex;
	flex-direction: flex-start;
	align-items: center;
	border-radius: 15px;
	max-height: 100px;
	padding: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
		transition: all 0.2s ease-in-out;
	}
`;

export const Resume = styled.div`
	background: #fff;
	display: flex;
	align-items: center;
	border-radius: 15px;
	max-height: 150px;
	padding: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const Picture = styled.img``;
