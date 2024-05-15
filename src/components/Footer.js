const Footer = () => {
  return (
    <div
      className="footerWrapper wow bounceInDown center"
      data-wow-delay="0.5s"
    >
      <h4>
        <emphasis>
          Thank you for reading my portfolio. Any contacts or inquiries, please
          redirect it to this{" "}
          <a href="mailto:sean.yz.lee@gmail.com">
            <strong>email 📩</strong>
          </a>
        </emphasis>
      </h4>
      <img src="../assets/goose.jpg"></img>

      <div class="danger">
        <p>
          <strong>More Website Updates to Come!!</strong> 
        </p>
      </div>
    </div>
  );
};

export default Footer;
