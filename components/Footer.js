function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 text-sm text-gray-500
    bg-gray-100 ">
    <div className="px-8 py-3">
        <p className="cursor-pointer">Pakistan</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
       <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
       Made with ❤️ by Azhar Mehmood for Educational Purposes.
       </div>
       <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
        <a href="https://ads.google.com/">Advertising</a>
        <a href="https://www.google.com/services">Bussiness</a>
        <a href="https://www.google.com/search/howsearchworks">How Search works</a>
       </div>
       <div className="flex justify-center space-x-8 md:ml-auto">
        <a href="https://policies.google.com/privacy">Privacy</a>
        <a href="https://policies.google.com/terms">Terms</a>
        <p className="cursor-pointer">Settings</p>
       </div>
    </div>
    </footer>
  )
}

export default Footer