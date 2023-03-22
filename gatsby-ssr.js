/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import * as React from "react"
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews"

import { linkResolver } from "./src/utils/linkResolver"
import { PrismicProvider } from "@prismicio/react"

import Homepage from "./src/templates/homepage"
import Blogpage from "./src/templates/blogpage"

export const wrapRootElement = ({ element }) => (
  <PrismicProvider linkResolver={linkResolver}>
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: "tsredi",
          linkResolver,
          componentResolver: componentResolverFromMap({
            homepage: Homepage,
            blogpage: Blogpage,
          }),
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)
