import React from 'react';
import {
    Background,
    Title,
    Wrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    InfoTitle,
    SubTitle,
    Desc,
    BtnWrapper,
    Button,
    ImgWrap,
    Img,
} from './styles/projects';

export default function Projects({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Projects.Title = function ProjectsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Projects.Wrapper = function ProjectsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Projects.InfoRow = function ProjectsInfoRow({ children, ...restProps }) {
    return <InfoRow {...restProps}>{children}</InfoRow>;
};

Projects.Column1 = function ProjectsColumn1({ children, ...restProps }) {
    return <Column1 {...restProps}>{children}</Column1>;
};

Projects.Column2 = function ProjectsColumn2({ children, ...restProps }) {
    return <Column2 {...restProps}>{children}</Column2>;
};

Projects.TextWrapper = function ProjectsTextWrapper({
    children,
    ...restProps
}) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Projects.InfoTitle = function ProjectsInfoTitle({ children, ...restProps }) {
    return <InfoTitle {...restProps}>{children}</InfoTitle>;
};

Projects.SubTitle = function ProjectsSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Projects.Desc = function ProjectsDesc({ children, ...restProps }) {
    return <Desc {...restProps}>{children}</Desc>;
};

Projects.BtnWrapper = function ProjectsBtnWrapper({ children, ...restProps }) {
    return <BtnWrapper {...restProps}>{children}</BtnWrapper>;
};

Projects.Button = function ProjectsButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};

Projects.ImgWrap = function ProjectsImgWrap({ children, ...restProps }) {
    return <ImgWrap {...restProps}>{children}</ImgWrap>;
};

Projects.Img = function ProjectsImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>;
};
