import React from "react";

import getFirebase from "../../lib/firebase";
import "firebase/firestore";

import useInput from "../../lib/useInput";

const MyForm = () => {
  const firebase = getFirebase();
  const name = useInput("");

  const submitForm = async () => {
    event.preventDefault();

    if (firebase) {
      try {
        const db = firebase.firestore();
        const docRef = db.collection("names").doc();

        await docRef.set(
          {
            name: name.value,
          },
          { merge: true }
        );
        alert("Successfully added to Firestore!");
        name.value = "";
      } catch (error) {
        alert(`An error occured: ${error}`);
        console.log("error", error);
      }
    }
  };

  return (
    <form className="text-black" onSubmit={() => submitForm()}>
      <h1>Submit your name below</h1>
      <input placeholder="Name" {...name} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
