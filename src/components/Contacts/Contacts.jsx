import './Contacts.css';

export const Contacts = () => {
  return (
    <>
      <main className="contacts-container">
        <h1 className="contacts-header">Contacts</h1>
        <div className="contact-container">
          <p className="contacts">E-mail: </p>
          <a className="contact-links" href="mailto:lucie.vadkerti@gmail.com">
            lucie.vadkerti@gmail.com
          </a>
          <p className="contacts">Phone: </p>
          <a className="contact-links" href="tel:+420774868955">
            +420 774 868 955
          </a>
          <p className="contacts">Linked In: </p>
          <a className="contact-links" href="https://www.linkedin.com/in/lucie-vadkerti/">
            /in/lucie-vadkerti/
          </a>
          <p className="contacts"> Git Hub: </p>
          <a className="contact-links" href="https://github.com/Lucie-git">
            Lucie-git
          </a>
          <p className="contacts">Bussines card:</p>
          <img className="qr-code" src="/assets/qr-code.png" alt="QR vizitka" />
        </div>
      </main>
    </>
  );
};
