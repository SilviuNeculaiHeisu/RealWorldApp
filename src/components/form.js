import styled from "styled-components";

export const FormGroup = styled.div`
border: none;
box-sizing: border-box;
margin-bottom: 8px;
padding: 10px;
position: relative;
width: 350px;
margin: auto;
`;

export const Button = styled.button`
  color: grey;
  padding: 6px;
  width: 100%;
  height: 40px;
  margin-top: 25px;
  background-color: #3073c4;
  border: none;
  color: white;
  border-radius: 4px;
  &:hover {
    background-color: blue;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #3073c4;
  font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
  margin-top: 50px;
  margin-bottom: 0;
`;

export const Text = styled.h2`
  font-size: 0.7 em;
  font-weight: 400;
  text-align: center;
  color: black;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 15;
`;
