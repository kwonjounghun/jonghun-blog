import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ title }: { title: string }) {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (<title>{data.site.siteMetadata.title} | {title}</title>);
}

export default SEO;