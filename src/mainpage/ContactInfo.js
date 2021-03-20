function ContactInfo({ phone, address }) {
  return (

    <div div className="section contact-info" >
      <h3>Contact Info</h3>
      <div>
        <p> Phone Number: {phone}</p>
        <p> Address: {address} </p>
      </div>
    </div >
  );
}

export default ContactInfo;
