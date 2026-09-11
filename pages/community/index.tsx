import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";


const CommunityPage: NextPage = () => {
  const [title, setTitle] = useState<string>("Welcome to the Community Page!");

  return (
    <div>
      <h1>Community Page</h1>
      <p>{title}</p>
        <button onClick={() => { alert("Button clicked!"); 
            setTitle("You clicked the button!"); }} 
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", 
            backgroundColor: "#0070f3", color: "#fff", border: "none", borderRadius: "5px" }}>
          Click Me!
        </button>
    </div>
  );
};

export default withLayoutBasic(CommunityPage);