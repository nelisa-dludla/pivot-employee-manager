function Footer() {
  const date = new Date();

  return (
    <>
      <div className="p-10 border-t-2 border-gray-300">
        <div className="w-96 mx-auto mb-5">
          <ul className="flex flex-row justify-between">
            <li className="font-semibold hover-action">Privacy Policy</li>
            <li className="font-semibold hover-action">Terms of Service</li>
            <li className="font-semibold hover-action">Contact Us</li>
          </ul>
        </div>
        <div>
          <p className="text-center text-gray-400">
            Copyright &copy; Pivot {date.getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
