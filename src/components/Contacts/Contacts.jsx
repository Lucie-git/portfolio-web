import './Contacts.css';

export const Contacts = () => {
  return (
    <>
      <h1 className="contacts-header">Contacts</h1>
      <p className="contacts">
        E-mail: <a href="mailto:lucie.vadkerti@gmail.com">lucie.vadkerti@gmail.com</a>
      </p>
      <p className="contacts">
        Phone: <a href="tel:+420774868955">+420 774 868 955</a>
      </p>
      <p className="contacts">
        Linked In: <a href="https://www.linkedin.com/in/lucie-vadkerti/">Lucie Vadkerti</a>
      </p>
      <p className="contacts">
        Git Hub: <a href="https://github.com/Lucie-git">Lucie-git</a>
      </p>
    </>
  );
};
