// import React from "react"
// import Header from "../../components/header/header-bus"
// import Footer from "../../components/footer/footer"
// import SEO from "../../components/seo"
// // SignupNewsletter is the component that uses integration directly to GovDelivery 
// // import SignupNewsletter from "../../components/signup-newsletter/signup-newsletter"

// import Signup from "../../components/signup/signup"

// export default ({ bannerUrl, children }) => {
//   return (
//     <>
//       <SEO title="Stop.Swap.GO! - Essex County Council" />
//       <Header />
//       <section className="banner-background" aria-label="Stop Swap Go! mantra" title="" style={{ backgroundImage: `url(${bannerUrl})` }}>
//         <div className="overlay"></div>
//         <div className="ms-ie-notification"><p>This website is not optimised for Internet Explorer, please switch browser for a better experience</p></div>
//       </section>
//       <main id="content">
//         <div className="container">
//           <div className="main only">
//             <section className="content">
//               <div>{children}</div>
//             </section>
//           </div>
//         </div>
//       </main>
//       <Signup />
//       <Footer />
//     </>
//   )
// }