import { useContext } from "react";
import nameContext from "./nameContext";

function Home() {
  const { text } = useContext(nameContext);
  return (
    <div>
      Home Page
      {text ? <div>{text}</div> : <div>Text is null</div>}
    </div>
  );
}

export default Home;
