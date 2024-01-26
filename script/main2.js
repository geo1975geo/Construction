var html = "";

html += `<div class="modal-form-head">
  <div class="modal-form-logo">
     <img src="image/Logo-header.svg" alt="CONCTRUCTION">
     <img src="image/CONCTRUCTION.svg" alt="CONCTRUCTION">
  </div>
  <div class="modal-form-close">
      <img src="image/close.svg" alt="close">
  </div>
</div>
<div class="modal-form-body">
  <div class="modal-form-title">Order call</div>
  <form>
    <input type="text" placeholder="Your name" required>
    <input type="text" placeholder="Your phone" required>
    <button class="form-button">Send</button>
  </form>
</div>`;

document.getElementById("modal-form").innerHTML = html;




var headerrow = "";

headerrow += `<div class="header-mobail-logo">
<a href="">
    <img src="image/Logo-header.svg" alt="Construction">
   
</a>
<a href="">
    <img src="image/CONCTRUCTION.svg" alt="Construction">
</a>
</div>
<div class="header-burger">
<span></span>
<span></span>
</div>
<div class="header-desk">Construction work of all types</div>
<div class="header-right">
<div class="header-info">
<img src="image/location.svg" alt="st. Pshavela 5, Tbilisi">
<span>st. Pshavela 5, Tbilisi</span>
</div>
<a href="tel: +995 032 222 222" class="header-info">
<img src="image/phone.svg" alt="+995 032 222 222">
<span>+995 032 222 222</span>
</a>
<div class="header-social">
<a href="">
    <img src="image/twitter.svg" alt="Twitter">
</a>
<a href="">
    <img src="image/vk.svg" alt="Vkontakte">
</a>
<a href="">
    <img src="image/facebook.svg" alt="Facebook">
</a>
<a href="">
    <img src="image/telegram.svg" alt="Telegram">
</a>
</div>
</div>`;

document.getElementById("headerrow").innerHTML = headerrow;






let myheader = [
    {
      menu: "Home"

},
    {
      menu: "About"

},
    {
      menu: "Services"

},
    {
      menu: "Gallery"

},
    {
      menu: "Reviews"

},
    {
      menu: "Contacts"

}

]


let doc = " ";

myheader.forEach(myheader => {
    doc += `
    
    <li><a data-link="${myheader.menu}">${myheader.menu}</a></li>
    `;
});


document.getElementById("headerdoc").innerHTML = doc;




let mymodalheaders = [
    {
      menu: "Home"

},
    {
      menu: "About"

},
    {
      menu: "Services"

},
    {
      menu: "Gallery"

},
    {
      menu: "Reviews"

},
    {
      menu: "Contacts"

}

]


let mymodalheader = " ";

mymodalheaders.forEach(mymodalheaders => {
    mymodalheader += `
    
    <li><a data-link="${mymodalheaders.menu}">${mymodalheaders.menu}</a></li>
    `;
});


document.getElementById("mymodalheader").innerHTML = mymodalheader;





  
  

 
let aboutrow = " ";



aboutrow += `     
<div class="about-left">
<h2 class="def-title">About our company</h2>
<div class="def-desk"><strong>Construction</strong> — is a full-service building design company with a simple and unique design and construction philosophy.We believe in one building designer taking the job from concept on paper to implementation on your property.Cause; By doing this, you can communicate and work with one person, where you can share your thoughts and ideas to bring them to life in collaboration.
 </div>
<a href="#" class="def-btn">Order service</a>
</div>
<div class="about-right">
<img src="image/image.jpg" alt="about us">
</div>
`;



document.getElementById("About").innerHTML = aboutrow;





var numbers = [
    {
number: "800",
numberstext: "Satisfied<br> clients"

},
{
number: "20",
numberstext: "Years of work experience<br> clients"

},
{

number: "90",
numberstext: "Awards<br> clients"

},

{
number: "150",
numberstext: "Implemented<br> projects"

}

]


var numbersone = " ";




numbers.forEach(numbers => {
    numbersone += `
    <div class="numbers-item">
    <div class="numbers-num">${numbers.number}</div>
    <div class="numbers-desk">${numbers.numberstext}</div>
    </div>
    `
});


document.getElementById("numbers").innerHTML = numbersone;




let myservices = [
    {
        image: "image/image2.jpg",
        title: "Home repairs"
     },
    {
        image: "image/image3.jpg",
        title: "Construction of houses"
     },
    {
        image: "image/image4.jpg",
        title: "Building design"
     }
]

let services = " ";

myservices.forEach(myservices => {
    services += `
    <div class="services-item">
    <div class="services-thumb">
        <img src="${myservices.image}" alt="Construction of houses">
    </div>
    <div class="services-body">
    <h4 class="services-title">${myservices.title}</h4>
    <a href="#modal-form" data-effect="mfp-with-fade" class="def-btn services-btn">Order service</a>
    </div>
    </div>
    `
})

document.getElementById("Services").innerHTML = services;




var mygallery = [
    {
        image: "image/gallery-1.jpg"
    },
    {
        image: "image/gallery-2.jpg"
    },
    {
        image: "image/gallery-3.jpg"
    },
    {
        image: "image/gallery-4.jpg"
    },
    {
        image: "image/gallery-5.jpg"
    },
    {
        image: "image/gallery-6.jpg"
    },
    {
        image: "image/gallery-7.jpg"
    },
    {
        image: "image/gallery-8.jpg"
    },
    {
        image: "image/gallery-9.jpg"
    },
    {
        image: "image/gallery-10.jpg"
    },
    {
        image: "image/gallery-11.jpg"
    },
    {
        image: "image/gallery-12.jpg"
    }
]



var gallery = " ";

mygallery.forEach(mygallery => {
    gallery += `<a href="${mygallery.image}" class="gallery-item"  data-effect="mfp-zoom-in">
             <span class="gallery-border"></span>
            <img src="${mygallery.image}" alt="image 1" class="gallery-image">
     </a>
      `;
})

document.getElementById("Gallery").innerHTML = gallery;




let myfeatures = [
    {
        image: "image/check-mark.svg",
        title: "Quality materials",
        text: "Over 10 years of work, we have tested different materials  and selected the most necessary ones."
    },

    {
        image: "image/check-mark.svg",
        title: "Work on time",
        text: "When ordering work from us, you are guaranteed to get results in a short time."
    }

   

]



var features = "";


myfeatures.forEach(myfeatures => {

    features += `<div class="why-features-item">
<div class="why-features-icon">
    <img src="${myfeatures.image}" alt="check-mark">
</div>
<div class="why-features-right">
<div class="why-features-ftitle">${myfeatures.title}</div>
<div class="why-features-desk">${myfeatures.text}</div>
</div>
</div>
`;
})  
document.getElementById("features").innerHTML = features;



let myfeatures_image = [
 {
    image: "image/image5.jpg"
}
]

let features_image = "";
myfeatures_image.forEach(myfeatures_image => {
 features_image += `
    <img src="image/image5.jpg" alt="Why us">
   `;
})

document.getElementById("features_image").innerHTML = features_image;



let myteam = [
    {
       image: "image/team-1.jpg",
       title: "Director",
       name: "Ioseb Bzhalava"
   },
    {
       image: "image/team-2.jpg",
       title: "Manager",
       name: "Besik Varlamidze"
   },
    {
       image: "image/team-3.jpg",
       title: "Worker",
       name: "Saba Adamia"
   }
]
   
   let team = "";
   myteam.forEach(myteam => {
    team += `
    <div class="team-item">
    <div class="team-thumb">
        <img src="${myteam.image}" alt="Ioseb Bzhalava">
    </div>
    <div class="team-body">
        <div class="team-profi">${myteam.title}</div>
        <div class="team-name">${myteam.name}</div>
    </div>
</div>`;
   })
   
   document.getElementById("team").innerHTML = team;


    let mypartners = [
    {
       image: "image/partners-5.svg",
     },
    {
       image: "image/partners-4.svg",
     },
    {
       image: "image/partners-3.svg",
     },
    {
       image: "image/partners-1.svg",
     },
    {
       image: "image/partners-2.svg",
     },
    {
       image: "image/partners-5.svg",
     },
    {
       image: "image/partners-4.svg",
     },
    {
       image: "image/partners-3.svg",
     },
    {
       image: "image/partners-1.svg",
     },
    {
       image: "image/partners-2.svg",
     }
]
   
   let partners = "";
   mypartners.forEach(mypartners => {
    partners += `
    <div class="partners-item"><img src="${ mypartners.image}"></div>
   `;
   })
   
   document.getElementById("partners").innerHTML =  partners;






   let form = "";
   
    form += `
    <div class="form-left">
    <h2 class="def-title">Are still questions?</h2>
    <div class="def-desk">If you have any questions or would like to order our services from us, fill out the form on the right.
        Our managers work around the clock and will call you back during the day.
    </div>
    <div class="form-image">
        <img src="image/image6.jpg" alt="Форма обратной связи">
    </div>
   </div>
   <div class="form-right">
    <form>
        <input type="text" placeholder="Your name*" required>
        <input type="text" placeholder="Your phone*" required>
        <input type="text" placeholder="Your Email">
        <textarea  cols="30" rows="5" placeholder="Comments"></textarea>
        <button class="def-btn form-button">Send</button>
    </form>
   </div>
   `;
   
   document.getElementById("form").innerHTML = form;




 


  
   let footer = "";
   
    footer += `
     <nav class="footer-nav">
    <h5 class="footer-title">Our services</h5>
    <ul>
      <li><a href="">Construction of houses</a></li>
      <li><a href="">Home repairs</a></li>
      <li><a href="">Building design</a></li>
    </ul>
  </nav>

  <div class="footer-nav">
    <h5 class="footer-title">Schedule work</h5>
    <ul>
      <li>Monday: 8:30 - 9:00</li>
      <li>Tuesday: 8:00 - 9:00</li>
      <li>Wednesday: 8:00 - 9:00</li>
      <li>Thursday: 8:30 - 9:00</li>
      <li>Friday: 10:00 - 4:00</li>
      <li>Saturday: day off</li>
      <li>Sunday: Closed</li>
    </ul>
  </div>

  <div class="footer-nav">
    <h5 class="footer-title">Contacts</h5>
   <div class="footer-info-item">
    <div class="footer-info-icon"><img src="image/footer-local.svg" alt="Location"></div>
    <div class="footer-info-text">st. Pshavela 5, Tbilisi</div>
   </div>
   <a href="tel:+7 950 457 5654" class="footer-info-item">
    <div class="footer-info-icon"><img src="image/footer-contact.svg" alt="Location"></div>
    <div class="footer-info-text">+995 032 222 222</div>
   </a>
   <div class="footer-social">
   <a href="">
       <img src="image/social-twitter.svg" alt="Twitter">
   </a>
   <a href="">
       <img src="image/social-vk.svg" alt="Vkontakte">
   </a>
   <a href="">
       <img src="image/social-facebook.svg" alt="Facebook">
   </a>
   <a href="">
       <img src="image/social-telegram.svg" alt="Telegram">
   </a>
</div>
   `;
   
   document.getElementById("footer").innerHTML = footer;