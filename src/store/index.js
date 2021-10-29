import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: [
      {
        title: 'Web Development',
        img: 'web-dev.png',
        tools: ['php', 'WordPress', 'HTML', 'CSS', 'JS', 'Vue Js', 'React Js', 'Laravel'],
        desctiption: 'This is Desctiption'
      },
      {
        title: 'Graphics Designing',
        img: 'graphics-design.png',
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Corel Draw', 'HTML/CSS/JS'],
        desctiption: 'This is Desctiption'
      },
      {
        title: 'Lead Generation',
        img: 'Lead-Generation-transparent.png',
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Corel Draw', 'HTML/CSS/JS'],
        desctiption: 'This is Desctiption'
      },
      {
        title: 'Skip Tracing',
        img: 'skip-tracing.jpg',
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Corel Draw', 'HTML/CSS/JS'],
        desctiption: 'This is Desctiption'
      }
    ],
    projects: [
      {
        title: 'US Security',
        url: 'https://ussecurity.biz/',
        img: 'ussecurity.png',
        technology: 'PHP/JS',
        workType: 'Adding Captcha in Registration Form',
        rating: 5,
        feedback: 'Excellent'
      },
      {
        title: 'find dynamics',
        url: 'https://findynamics.com/',
        img: 'finddynamics.png',
        technology: 'WordPress',
        workType: 'Restructure the Registration Forms',
        rating: 5,
        feedback: "On top of super strong knowledge of the technology, Seller demonstrated best attitude and business approach to dealing with clients I've seen."
      },
      {
        title: 'teatro trail',
        url: 'https://teatrotrail.com/',
        img: 'teatrotrail.png',
        technology: 'PHP/MySQL',
        workType: 'MySQL connection with PHP and Data Fetching from Database',
        rating: 5,
        feedback: 'Excellent Work with Great Communication Skills'
      },
      {
        title: 'sunmar',
        url: 'https://usa.sun-mar.com/',
        img: 'sunmar.png',
        technology: 'WordPress',
        workType: 'Consultation about site management',
        rating: 5,
        feedback: 'Did a full quote and kept to it. Very quick to communicate will use again'
      },
      {
        title: 'cocreative wakening summit',
        url: 'http://cocreativeawakeningsummit.com/',
        img: 'cocreativeawakening.png',
        technology: 'WordPress',
        workType: 'Landing Page Design using DIVI',
        rating: 5,
        feedback: 'I enjoy working with MBD. I will be back!'
      },
      {
        title: 'Ask Kathy Mason',
        url: 'http://askkathymason.com/',
        img: 'askkathymason.png',
        technology: 'WordPress',
        workType: 'Design Home Page using DIVI',
        rating: 5,
        feedback: ''
      },
      {
        title: 'My Top Selling SEO Tools',
        url: 'https://mytopsellingseo.com/',
        img: 'mytopselling.png',
        technology: 'PHP',
        workType: 'Debugging and Deployment on Server',
        rating: 5,
        feedback: 'This is my first time buying a gig from fiverr and I met this seller. This seller is a good guy and really quickly respond to buyer needs. On the first day recognize him, directly he ask everything to do the job. I think is about a day / 24 hours, then he ask me the final data. Maybe it is about one or two hour later, I got the messages that the job is done. Alright then, this is first come with satisfaction result I get now. Thank you Bilal. I told you man, I give good recomendation, when you need something about installing PHP script or something have relation about the website asswell and of course you want to get good result. Just contact him here in Fiverr. Cheers'
      },
      {
        title: 'The Book Worm',
        url: 'https://thebookworm.nl/',
        img: 'bookworm.png',
        technology: 'WordPress',
        workType: 'Redesign Website and set up Ecommerce Store',
        rating: 5,
        feedback: "Highly professional and expert in his field. Very helpful, patient and understanding of what our company needs. This is the second time we 'work' together and surely not the last. This is our first business and we hope to maintain this business relationship. Highly"
      },
      {
        title: 'Don Lynch',
        url: 'http://donlynch.net/',
        img: 'donlynch.png',
        technology: 'WooCommerce',
        workType: 'Uploading Virtual Downloadable Products to Store',
        rating: 5,
        feedback: 'Very engaged and committed to helping to solve the problems that arise. It has a personal commitment to help the client, even after the projects are closed. If you have serious problems with your WP, this is the guy!'
      },
      {
        title: 'mastering mind sets',
        url: 'https://masteringmindsets.org/',
        img: 'masteringmindset.jpg',
        technology: 'WordPress',
        workType: 'Website Debugging',
        rating: 5,
        feedback: "I needed something done fast, and he was right on it. I'll definitely work with him again. Communication was top-notch."
      },
      {
        title: 'Meet Clincs',
        url: 'http://meetclinics.com/',
        img: 'meetclinics.png',
        technology: 'Laravel',
        workType: 'Designing and Development',
        rating: 5,
        feedback: "He was great. Patient and a good listener. I didn't repeat my requests to him. On time. I Recommend him to you for your future projects."
      },
      {
        title: 'nutrition 2 change',
        url: 'https://academy.nutrition2change.com',
        img: 'nutrition2change.png',
        technology: 'WordPress',
        workType: 'CSS redesigning',
        rating: 5,
        feedback: 'all great and good communication thank you'
      },
      {
        title: 'oscar seuba',
        url: 'https://www.oscarseuba.com/',
        img: 'oscarseuba.png',
        technology: 'CSS',
        workType: 'Redesign Blog Post',
        rating: 5,
        feedback: 'Quick and perfect job!'
      }
    ]
  },
  getters: {
    getServices: state => {
      return state.services
    },
    getProjects: state => {
      return state.projects
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
