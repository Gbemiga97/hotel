import { images } from "../utils"


const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex font-primary justify-between">
        <a href="/">
        <img src={images.LogoWhite} alt="logo" />
        </a>
        <small>
       Copyright &copy; {new Date().getFullYear()} - All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer