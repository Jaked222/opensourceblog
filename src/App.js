import { Typography } from "@material-ui/core";
import styled from "styled-components";
import "./index.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function App() {
  return (
    <AppContainer>
      <Typography variant="h2">Open Source Blog Using NextJS</Typography>
      <Link href="https://demo.opensourceblog.dev">
        View a demo <StyledArrow />
      </Link>
      <Link href="https://github.com/Jaked222/nextreactblog">
        Get the code
        <StyledArrow />
      </Link>
    </AppContainer>
  );
}

const StyledArrow = styled(ArrowRightAltIcon)`
  margin-left: 3px;
`;

const Link = styled.a`
  color: #daa520;
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10%;
`;

export default App;
