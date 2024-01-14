import React, { useState, useEffect } from "react"
import Router, {useRouter} from "next/router";
import { Component } from "react";
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

class App extends Component {
  componentDidMount(){
  const {url} = this.props
    Router.replace(`https://forever-love-animals.com${url}`);
  }

  static async getInitialProps({ctx}) {
    const url = ctx.asPath
    return {url};
  }

render() {

    return(
  <div className={styles.container}>
  <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title></title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="" />
                <meta property="og:description" content=" ..." />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="" />
                <meta property="article:section" content="Animal" />
                <meta property="og:image" content="" />
                <meta property="og:image:alt" content="" />
       
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   img { width: 100%; height: auto; }\n          ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }\n                  li {float: left; }\n                  li a { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }\n                  li a:hover:not(.active) { background-color: #111; }\n                  .active { background-color: #4CAF50; }\n       "
    }}
  />
      </Head>
      {this.props.children}
    <div>
 </div>
</div>
)
  }
}
export default App;