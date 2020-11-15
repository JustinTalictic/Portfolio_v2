import React from 'react';
import { About } from '../components';

export function AboutContainer({ children }) {
	return (
		<About id="about">
			<About.Container>
				<About.Title>About Me</About.Title>
				<About.Text>I'm from Houston Texas Hoe</About.Text>
			</About.Container>
			<About.Container>
				<About.Picture></About.Picture>
			</About.Container>
		</About>
	);
}
