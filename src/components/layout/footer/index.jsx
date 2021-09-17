import Logo from '@public/logo.svg'
const Footer = () => {
    return (
        <footer className="relative bottom-0 flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          MarceloDeveloper{' '}
          <Logo className="flex justify-center items-center h-5 w-auto ml-2"/>
        </a>
      </footer>
    );
}

export default Footer;