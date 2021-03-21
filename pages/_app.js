import '../styles/globals.css'
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// import '@movie-app/styles/bootstrap.min.css'

class MovieApp extends App {

    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext);
        return {...appProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <div>
                <Head>
                    <title>Home</title>
                    {/*/!*Darkly Theme*!/*/}
                    {/*<link rel="stylesheet"*/}
                    {/*      href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css"/>*/}
                    {/*/!*Cyborg Theme*!/*/}
                    {/*<link rel="stylesheet"*/}
                    {/*      href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css"/>*/}
                    {/*Slate Theme*/}
                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css"/>
                    {/*/!*Space Lab Theme*!/*/}
                    {/*<link rel="stylesheet"*/}
                    {/*      href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/spacelab/bootstrap.min.css"/>*/}
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                            crossOrigin="anonymous"/>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                            crossOrigin="anonymous"/>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                            crossOrigin="anonymous"/>
                </Head>
                <Navbar/>
                <div className="base-page">
                    <Component {...pageProps}/>
                </div>
                <Footer/>
                <style jsx>{`
                  .base-page {
                    padding: 80px;
                  }
                `}
                </style>
            </div>

        );
    }
}

export default MovieApp;
