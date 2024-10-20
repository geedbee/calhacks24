// app/page1/page.tsx
import Model from "../components/Model";
import VoicePage from "./VoicePage";
export default function Page1() {
  //<Model />
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "200px" }}>
      <VoicePage />
      <Model />
    </div>
  );
}
