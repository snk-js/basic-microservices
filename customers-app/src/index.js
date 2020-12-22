import React from "react"
import { render } from "react-dom"
import Root from '../src/components/Root'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/react-hooks';
import graphqlClient from './api/graphqlClient'

import * as theme from "./theme"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
`

render(
      <ApolloProvider client={graphqlClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <Root />
        </ThemeProvider>
      </ApolloProvider>, document.getElementById("root"))