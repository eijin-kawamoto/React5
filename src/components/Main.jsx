import { useEffect, useState } from "react";
import React from "react";
import Gallery from "./Gallery";
import fetchshibe from "../fetchshibe";

export default function Main() {
  const [shibe, setshibe] = useState("");
  

    useEffect(() => {
      async function fetchData() {
        const shibeImage = await fetchshibe();
        setshibe(shibeImage);
      }
      fetchData();
    },[]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
}