import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
function createCard(contact){
  return <Card 
         id={contact.id}
         key={contact.id}
         name={contact.name}
         imgURL={contact.imgURL}
         phone={contact.phone}
         email={contact.email}
    />;
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
       {contacts.map(createCard)}
      {/* <Card 
          name={contacts[0].name}
          imgURL={contacts[0].imgURL}
          phone={contacts[0].phone}
          email={contacts[0].email}
      />
      <Card 
          name={contacts[1].name}
          imgURL={contacts[1].imgURL}
          phone={contacts[1].phone}
          email={contacts[1].email}
      />
      <Card 
          name={contacts[2].name}
          imgURL={contacts[2].imgURL}
          phone={contacts[2].phone}
          email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
