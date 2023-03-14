type FooterProps = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: FooterProps) => {

  const year: number = new Date().getFullYear();

  const pageContent = 
    <p>Shopping cart &copy; {year}</p>

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  )

  return content;
};

export default Footer;
