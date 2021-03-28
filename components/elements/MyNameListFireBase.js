import React, { useEffect, useState } from "react";
import getFirebase from "../../lib/firebase";

const MyNameListFirebase = () => {
  const [names, setNames] = useState([]);
  const firebase = getFirebase();

  useEffect(() => {
    const fetchNames = async () => {
      try {
        if (!firebase) return;
        const db = firebase.firestore();
        const ref = db.collection("names");

        const docs = await ref.get();

        let allNames = [];
        docs.forEach((doc) => {
          const data = doc.data();
          allNames.push(data.name);
        });
        setNames(allNames);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchNames();
  });
  return (
    <div>
      <h1 className="text-black">All names saved in the database</h1>
      {names.map((name, index) => {
        return (
          <h2 className="text-black" key={index}>
            {name}
          </h2>
        );
      })}
    </div>
  );
};

export default MyNameListFirebase;
