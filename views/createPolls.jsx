const React = require('react')
const Nav = require('./components/nav')
const Footer = require('./components/footer')
const PollsForm = require('./components/pollsform')
const Script = require('./components/script')

const CreatePolls = () =>
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/css/foundation.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
            <link rel="stylesheet" href="/css/app.css" />
            <title>Create Polls</title>
        </head>
        <body>
            <Nav />
             <div className="grid-container">
                <center>
                    <a id="commH1">Create Poll Form</a>
                </center>
            </div>
            <PollsForm />
            <Footer />
            <Script />
            <script src='./js/app.js' />
        </body>
    </html>

module.exports = CreatePolls
