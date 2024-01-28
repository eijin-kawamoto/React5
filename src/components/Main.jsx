import { useEffect, useState } from "react";
import React from "react";
import Gallery from "./Gallery";
import fetchshibe from "../fetchshibe";

export default function Main() {
  const [shibe, setshibe] = useState("");
  

    useEffect(() => {
      async function fetchData() {
        try {
          const shibeImage = await fetchshibe();
          setshibe(shibeImage);
        } catch (error) {
          console.error('Error fetching shibe image: ', error);
        }
      }

      fetchData();
    },[]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery shibe={shibe}/>
        </div>
      </section>
    </main>
  );
}