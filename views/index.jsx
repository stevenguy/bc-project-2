const React = require('react')
const Nav = require('./components/nav')
const Content = require('./components/content')
const Footer = require('./components/footer')
const Head = require('./components/head')
const Script = require('./components/script')

const Page = () =>
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Armata|Bitter|Cabin|Quattrocento" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0/dist/css/foundation.min.css" integrity="sha256-VEEaOnBKVRoYPn4AID/tY/XKVxKEqXstoo/xZ6nemak= sha384-D46t32f421/hB30qwnim2pIcisNN5GU9+6m2Mfnd3dKpTSFidZLa08/1StEiCFId sha512-WkgzH8VKemDfwrp18r+wgbx+oHXOkfd2kJs7ocAXdGDgonXDXh88E90IRtRZRXtO0IHprxYHYlY14h+wyTsUDA==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="/css/app.css" />
            <title>Deez Polls</title>
        </head>
        <body>
            <Nav />
            <Content />
            <Footer />
            <Script />
        </body>
    </html>

module.exports = Page