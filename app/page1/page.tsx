// app/page1/page.tsx
import { Mode } from "@mui/icons-material";
import Model from "../components/Model";
import Page from "./mainpage";
export default function Page1() {
  //<Model />
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "200px" }}>
      <Page />
      <Model />
    </div>
  );
}
