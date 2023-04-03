import { ReactElement } from "react";
import Title from "./shared/Title";
import { lightTheme } from "@/themes";
import styled from "styled-components";
import Carousel from "./Carousel";

const projects = [
  {
    title: "San Francisco – Oakland Bay Bridge, United States",
    img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    description: "This is a test ",
  },
  {
    title: "Bird",
    img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    description: "This is a test 2",
  },
];

export default function Projects(): ReactElement {
  return <Carousel data={projects} />;
}

const Top = styled.div`
  height: 10%;
  width: 100%;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;
