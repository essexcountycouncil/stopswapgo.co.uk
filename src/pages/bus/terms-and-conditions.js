// import React from 'react'
// import { graphql, useStaticQuery } from "gatsby"
// import Layout from "../../layout/bus/page"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const BusTCSPage = () => {
//   const data = useStaticQuery(graphql`
//   {
//     contentfulBusTCs {
//       banner {
//         file {
//           url
//         }
//         title
//         description
//       }
//       content {
//         json
//       }
//     }
//   }
//   `);

//   return (
//     <div>
//       <Layout bannerUrl={data.contentfulBusTCs.banner.file.url}>
//         {documentToReactComponents(data.contentfulBusTCs.content.json)}
//       </Layout>
//     </div>
//   )
// }

// export default BusTCSPage

export default function() {
  return null;
}
