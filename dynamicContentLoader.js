////TEXTS
const productName = "Antonis Vasileiadis";

const newsletter_button_text = "Join the Newsletter";
const download_button_text = "Download the Rules";

//const youtubeVideoUrl = "https://www.youtube.com/embed/wDd_-Wi-rPs?autoplay=1&mute=1";

const section_1_button_text = "Introduction";
const section_2_button_text = "About";
const section_3_button_text = "More";
const section_4_button_text = "Newsletter";

const heading_1_1 = "Antonis Vasileiadis"
const heading_2_1 = "Introduction"
const section_text_1 = `Welcome to the official website of Antonis Vasileiadis, a gifted musician, composer, and songwriter from Greece. With a passion for creating captivating music and years of expertise, Antonis offers a harmonious blend of creativity and professionalism. Whether you’re seeking original compositions, top-notch music production, or expert instruction, you’re in the right place.​`;

const heading_2_2 = "About"
const section_text_2 = `Antonis Vasileiadis is a versatile and accomplished musician based in Greece, known for his exceptional talent and dedication to the art of music. A graduate of the prestigious Music Science and Arts department at the University of Macedonia, he specializes in percussion instruments and has earned recognition for his mastery and innovation in this field.

As a freelance artist, Antonis provides comprehensive music services, covering every stage of creation from composition to production. His all-in-one approach ensures a seamless and personalized experience for artists, filmmakers, and businesses seeking professional soundscapes that resonate.

Beyond his creative endeavors, Antonis is also a passionate music instructor, sharing his knowledge and inspiring the next generation of musicians. Whether crafting original scores, producing music, or mentoring aspiring artists, Antonis’s work reflects his unwavering commitment to excellence and his deep love for music.

Explore the world of Antonis Vasileiadis and discover how his artistry can bring your vision to life.`

const heading_2_3 = "More"
const section_text_3 = ""

const heading_2_4 = "Newsletter"
const section_text_4 = "We’d love to keep you updated with all the latest news and exciting developments!"

const footer_copyright = "Antonis Vasileiadis - 2024 All rights reserved. v2024.11.21.1"   

////Image URLS

//const og_image = "./images/promo-material/qr_promo_image.png";
//const twitter_image = "./images/promo-material/qr_promo_image.png";

const backgroundImage = "./images/background.png";

const promo_image = "./images/promo_image.png";

const promoImage1 = "./images/promo_image (1).png";
const promoImage2 = "./images/promo_image (2).png";
const promoImage3 = "./images/promo_image (3).png";

//URLS
const pdfDownloadLink = "https://drive.google.com/uc?export=download&id=1Cds_M21xMTD5AIUeogazMVGbxfBvywOF";


function updatePageContent() {
    ////IMAGES
    //document.querySelector('meta[property="og:image"]').setAttribute("content", og_image);
    //document.querySelector('meta[name="twitter:image"]').setAttribute("content", twitter_image);

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    document.getElementById('intro-image').src = promo_image;
    
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;

    ////TEXTS

    document.getElementById('page-title').textContent = productName;
    document.getElementById('header-title').textContent = productName;

    document.getElementById('heading-1-1').textContent = heading_1_1;

    //document.getElementById('heading-2-1').textContent = heading_2_1;
    document.getElementById('section-text-1').textContent = section_text_1;
    document.getElementById('heading-2-2').textContent = heading_2_2;
    document.getElementById('section-text-2').textContent = section_text_2;
    document.getElementById('heading-2-3').textContent = heading_2_3;
    //document.getElementById('section-text-3').textContent = section_text_3;
    document.getElementById('heading-2-4').textContent = heading_2_4;
    document.getElementById('section-text-4').textContent = section_text_4;

    document.getElementById('footer-copyright').textContent = footer_copyright;    
    
    ////BUTTONS
    
    document.getElementById('section-1-button').textContent = section_1_button_text;
    document.getElementById('section-2-button').textContent = section_2_button_text;
    document.getElementById('section-3-button').textContent = section_3_button_text;
    document.getElementById('section-4-button').textContent = section_4_button_text;

    document.getElementById('rules-download-button').innerHTML = `<i class="fas fa-download"></i> ${download_button_text}`;

    //document.getElementById('rules-download-button').href = pdfDownloadLink;
    document.getElementById('newsletter-button').innerHTML = `<i class="fas fa-envelope"></i> ${newsletter_button_text}`;

    ////URLS
    document.getElementById('rules-download-button').href = pdfDownloadLink;
    //document.getElementById('youtube-video-iframe').src = youtubeVideoUrl;

}

updatePageContent();
