let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Removido o '#' incorreto
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active'); // Corrigido o seletor
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // ou outro serviço de e-mail
        auth: {
            user: 'machinex.fourmaq@gmail.com',
            pass: 'hgwc idpr upeg gkmj'
        }
    });

    let mailOptions = {
        from: 'machinex.fourmaq@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado: ' + info.response);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
}

var name = document.getElementById("name").value;
var content = document.getElementById("content").value;

// Exemplo de uso:
sendEmail('leonardo.capistrano445@gmail.com', name, content);
