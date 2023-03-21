/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import * as React from "react"
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews"

import { linkResolver } from "./src/utils/linkResolver"

import Homepage from "./src/templates/homepage"
import Blogpage from "./src/templates/blogpage"

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          Homepage: Homepage,
          Blog: Blogpage,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)
