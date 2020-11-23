import React from 'react';
import {
	Background,
	Frame,
	Title,
	CardFrame,
	Card,
	CardTitle,
	InfoFrame,
	Info,
	InfoTitle,
	Desc,
	Image,
	BtnWrapper,
	Button,
} from './styles/projects';

export default function Projects({ children, ...restProps }) {
	return <Background {...restProps}>{children}</Background>;
}

Projects.Frame = function ProjectsFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Projects.Title = function ProjectsTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Projects.CardFrame = function ProjectsCardFrame({ children, ...restProps }) {
	return <CardFrame {...restProps}>{children}</CardFrame>;
};

Projects.Card = function ProjectsCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

Projects.CardTitle = function ProjectsCardTitle({ children, ...restProps }) {
	return <CardTitle {...restProps}>{children}</CardTitle>;
};

Projects.InfoFrame = function ProjectsInfoFrame({ children, ...restProps }) {
	return <InfoFrame {...restProps}>{children}</InfoFrame>;
};

Projects.Info = function ProjectsInfo({ children, ...restProps }) {
	return <Info {...restProps}>{children}</Info>;
};

Projects.InfoTitle = function ProjectsInfoTitle({ children, ...restProps }) {
	return <InfoTitle {...restProps}>{children}</InfoTitle>;
};

Projects.Desc = function ProjectsDesc({ children, ...restProps }) {
	return <Desc {...restProps}>{children}</Desc>;
};

Projects.Image = function ProjectsImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};

Projects.BtnWrapper = function ProjectsBtnWrapper({ children, ...restProps }) {
	return <BtnWrapper {...restProps}>{children}</BtnWrapper>;
};

Projects.Button = function ProjectsButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
