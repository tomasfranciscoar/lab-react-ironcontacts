import React from "react";
import ContactTableItems from "./ContactTableItems";

const ContactTable = ({ initialContacts, deleteItem }) => (
  <div className="contact-table-container">
    <table className="contact-table">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
      <tbody>
        {initialContacts.map((initialContact, index) => (
          <ContactTableItems initialContact={initialContact} deleteItem={() => deleteItem(index)} key={index} />
        ))}
      </tbody>
    </table>
  </div>
);

export default ContactTable;
