function ContactInfo(propc) {
  return (
    <div className="section contact-info">
      <h3>Contact Info</h3>
      <div>
        <a>{propc.name}</a>
        <a>{propc.email}</a>
      </div>
    </div>
  );
}

export default ContactInfo;
