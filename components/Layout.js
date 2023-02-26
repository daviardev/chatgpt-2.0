export default function Layout ({ children }) {
  return (
    <>
      <html>
        <head />
        <body>
          <div className='flex'>
            {/* Sidebar */}
            {/* ClientProvider - Notification */}

            <div className='bg-[#343541] flex-1'>
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
