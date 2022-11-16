import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
                <div id="page" className="hfeed site">
                        <a className="skip-link screen-reader-text" href="#main">Skip to content</a>
        <Alert preview={preview} />
        <main>{children}</main>
        
        <Footer />
      </div> </div>
     
    </>
  )
}
