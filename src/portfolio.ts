/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harsha vardhani rachagiri",
  description:
    "I am a detail oriented and goal driven individual, passionate about problem solving and always eager to learn and grow. I've a deep understanding in both frontend and backend web technologies along with cloud services like AWS.",
  og: {
    title: "Harsha vardhani rachagiri",
    type: "website",
    url: "https://github.com/harsharachagiri23",
  },
};

//Home Page
const greeting = {
  title: "Harsha vardhani rachagiri",
  logo_name: "HarshaRachagiri",
  nickname: "a Full-Stack Developer",
  subTitle:
    "I am a detail oriented and goal driven individual, passionate about problem solving and always eager to learn and grow. I've a deep understanding in both frontend and backend web technologies along with cloud services like AWS.",
  resumeLink:
    "https://docs.google.com/document/d/1XNcHV__sCYBInu0fSJJaYwyhY7Yrtih9/edit?usp=sharing&ouid=102650290336238016486&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/harsharachagiri23",
  githubProfile: "https://github.com/harsharachagiri23",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/harsharachagiri23",
    fontAwesomeIcon: "github.png", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    active: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harsha-rachagiri/",
    fontAwesomeIcon: "linkdin.png", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    active: true,
  },
  {
    name: "Medium",
    link: "https://medium.com/@vardhani.h02",
    fontAwesomeIcon: "medium1.jpg", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    active: false,
  },
  {
    name: "Gmail",
    link: "mailto:vardhani.h02@gmail.com",
    fontAwesomeIcon: "gmail.png", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    active: true,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/vardhanih02/",
    fontAwesomeIcon: "leetcode.png", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "", // Reference https://simpleicons.org/?q=twitter
    active: true,
  },
  {
    name: "Medium",
    link: "https://medium.com/@vardhani.h02",
    fontAwesomeIcon: "medium1.jpg", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    active: false,
  },
];

const skills = {
  data: [
    {
      img: "BackendImg.png",
      title: "Backend Dev",
      fileName: "BackendImg",
      skills: [
        "⚡ Developed application backend using Node.js, Express, and MongoDB.",
        "⚡ Designed and implemented complex APIs for the application.",
        "⚡ Implemented authentication and authorization mechanisms for security.",
        "⚡ Managed database operations, including schema design and queries.",
      ],
      softwareSkills: [
        {
          skillName: "Typescript",
          fontAwesomeClassname: "typescript.png",
          imgurl: "typescript.png",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "node.png",
          imgurl: "node.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "expressJs",
          fontAwesomeClassname: "express.png",
          imgurl: "express.png",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "mongoDb",
          fontAwesomeClassname: "mongodb.png",
          imgurl: "mongodb.png",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      img: "heatmap.png",
      title: "Frontend Dev",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed responsive website using React and state management by React-Redux.",
        "⚡ Designed intricate website styles with Material UI and styling libraries.",
        "⚡ Implemented specific website functionalities using Vanilla JS, ES6, and jQuery as required.",
        "⚡ Utilized microfrontend technology for modular and scalable frontend architecture.",
        "⚡ Adhered to SOLID principles to ensure maintainable and robust code.",
        "⚡ Developing mobile applications React Native.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "html.png",
          imgurl: "html.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "css.png",
          imgurl: "css.png",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap5",
          fontAwesomeClassname: "bootstrap.png",
          imgurl: "bootstrap.png",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Tailwind css",
          fontAwesomeClassname: "tailwindcss.png",
          imgurl: "tailwindcss.png",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "javascript.png",
          imgurl: "javascript.png",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "react.png",
          imgurl: "react.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "reactnative.png",
          imgurl: "reactnative.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "materialui.png",
          imgurl: "materialui.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "typescript.png",
          imgurl: "typescript.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Webpack 5",
          fontAwesomeClassname: "webpack.png",
          imgurl: "webpack.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "nextjs.png",
          imgurl: "nextjs.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "npm.png",
          imgurl: "npm.png",
          style: {
            color: "#CB3837",
          },
        },
        
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },

   /* {
      img: "projectManagement.png",
      title: "Project Management & OS",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficiently maintained the codebase on both GitHub and Bitbucket, ensuring version control and repository integrity.",
        "⚡ Effectively utilized Jira boards for comprehensive project management, including task tracking and milestone monitoring.",
        "⚡ Demonstrated the ability to operate on multiple systems, including macOS, Linux, and Windows, ensuring seamless adaptation across diverse computing environments.",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "git.png",
          imgurl: "git.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "github.png",
          imgurl: "github.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "jira.png",
          imgurl: "jira.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "bitbucket.png",
          imgurl: "bitbucket.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Mac OS",
          fontAwesomeClassname: "mac.png",
          imgurl: "mac.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Linux OS",
          fontAwesomeClassname: "Linux.png",
          imgurl: "linux.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Window OS",
          fontAwesomeClassname: "window.png",
          imgurl: "window.png",
          style: {
            color: "#E34F26",
          },
        },
      ],
    }, */

    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },   <FontAwesomeIcon icon="f" />
    {
      img: "heatmap.png",
      title: "Full Stack Dev",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux & design complex styles of a website using bootstrap5 and styling library",
        "⚡ Build narrow funcnality of website using vanila js and ES6 also used jQuery as required & creating application backend in Nodejs, Express & mangobd ",
        "⚡ Expertise with cloud services like AWS for modernizing development & deployment of workflows through CI/CD pipelines", 
        "⚡ Additionally, leveraging Amazon S3 for scalable and secure data storage, AWS Lambda for serverless computing, enabling seamless execution of code.",
      ],
      softwareSkills: [ 
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    }, 
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   img: 'designtool.png',
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing intermidate level designs of web application",
    //     "⚡ Customizing logo designs and building logos from Coral-Draw",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe PhotoShop",
    //       fontAwesomeClassname: "photoshop.png",
    //       imgurl:
    //         "data:image/png;base64,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",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Coral-Draw",
    //       fontAwesomeClassname: "coral.png",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //       imgurl:
    //         "data:image/jpeg;base64,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",
    //     },
    //     {
    //       skillName: "Adobe Lightroom",
    //       fontAwesomeClassname: "lightroom.png",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //       imgurl:
    //         "data:image/png;base64,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",
    //     },
    //     // {
    //     //   skillName: "Inkscape",
    //     //   fontAwesomeClassname: "simple-icons:inkscape",
    //     //   style: {
    //     //     color: "#000000",
    //     //   },
    //     //},
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "leetcode.png",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://leetcode.com/mercydsasolver/",
    },
   /* {
      siteName: "HackerRank",
      iconifyClassname: "hackerrank.png",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    }, 
    {
      siteName: "Codechef",
      iconifyClassname: "codechef.png",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "codeforce.png",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },*/
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "hackerearth.png",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "",
    // },
  ],
};

const degrees = {
  degree: [
    {
      title: "Northeastern University, Boston",
      subtitle: "MS in Information Systems",
      logo_path: "neu2023.jpg",
      alt_name: "NU",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Application Engineering",
        "⚡ Database design & management",
        "⚡ User Interaction/User Experience Design/Testing",
        "⚡ Web Design and Development",
        "⚡ Development and Operations",
        "⚡ Object oriented programming & design",
      ],
      website_link: "https://www.northeastern.edu/",
    },
    {
      title: "National Institute of Technology, Bhopal",
      subtitle: "Btech in Computer Science",
      logo_path: "manit.jpg",
      alt_name: "Manit",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Data Structures & Algorithms",
        "⚡ Operating System",
        "⚡ Computer Architecture",
        "⚡ Computer Networks",
        "⚡ Programming principles & algorithms",
      ],
      website_link: "https://masaischool.com/",
    },
  ],
};

const certifications = {
  isShow: false,
  certifications: [
    // {
    //   title: "TYPING TEST",
    //   subtitle: " ",
    //   logo_path: "typing.png",
    //   certificate_link:
    //     "https://www.typing.com/apiv1/student/tests/205645423/133385846/certificate?language=en",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Fullstack WEB Development",
      subtitle: "",
      logo_path: "Masai.png",
      certificate_link:
        "https://drive.google.com/file/d/1HGchSoEpLXsM5b8HVLkOLWHOAQwvNpRw/view?usp=sharing",
      alt_name: "MASAI SCHOOL",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Advance Diploma In Information Technology",
    //   subtitle: "",
    //   logo_path: "jms.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/14FT8lxa4YvhgcpCFGcGtGa_lVDzr1mVX/view?usp=sharing",
    //   alt_name: "JMS EDUCATION POINT",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "EXPERIENCE",
  subtitle: "Instructor, Intern, Volunteer",
  description:
    " From a teaching assistant guiding students to volunteering in a startup on web technology to work as an Intern/developer in developing innovative applications, I thrive on turning ideas into reality.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Instructor ",
          company: "Icode",
          company_url: "https://icodeschool.com/manchester/",
          logo_path: "Icode.jpg",
          duration: "October 2023 - Present",
          location: "Connecticut, USA",
          description:
            "Facilitated comprehensive instruction to enable students to articulate the structural and functional aspects of web technology, fostering a deep understanding of the foundational principles of web development and created and maintained an engaging and fun learning environment, ensuring students were actively involved and motivated to explore STEM concepts",
          color: "#0879bf",
        },
        
         {
          title: "Web developer",
           company: "Abecedarian, LLC", 
           company_url: "https://www.linkedin.com/company/abecedarian/",
           logo_path: "",
           duration: "Aug 2023 - Feb 2024",
           location: "Boston, MA",
           description:
             "Assisted in the development of an innovative platform for students to showcase their projects, resulting in a increase in student engagement and recognition within the academic community",
           color: "#9b1578",
         },
        {
           title: "Junior Java Developer",
           company: "Arowana Engineering & Detailing Services LLC",
           company_url: "https://www.linkedin.com/company/arowanasoft/",
           logo_path: "freecopy_logo.png",
           duration: "Dec 2020 - Aug 2021",
           location: "India",
           description:
             "Collaborated on the development of an on-demand delivery web application, implementing cost-effective solutions that streamlined processes and identified valuable business-to-customer opportunities",
           color: "#fc1f20",
         },
         {
          title: "Front-end developer Intern",
          company: "Smart Krow Technology",
          company_url: "",
          logo_path: "",
          duration: "Jan 2020 - Jul 2020",
          location: "India",
          description:
            "Worked closely with the design team to translate their UI/UX designs and wireframes into fully functional web pages,ensuring a seamless user experience aligned with the company's vision ",
          color: "#fc1f20",
        },
        {
          title: "Engineering Trainee",
          company: "Rashtriya Ispat Nigam Limited (Rinl)",
          company_url: "",
          logo_path: "",
          duration: "Jun 2018 - Jul 2018",
          location: "India",
          description:
            "A study on how ERP allows companies to integrate various departmental information and developed from a human resource management application to a tool that spans an IT management system",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Projects & Self Learning",
    //   experiences: [
    //     //   {
    //     //     title: "Data Science Research Intern",
    //     //     company: "Delhivery Pvt. Ltd.",
    //     //     company_url: "https://www.delhivery.com/",
    //     //     logo_path: "delhivery_logo.png",
    //     //     duration: "May 2019 - Sept 2019",
    //     //     location: "Gurgaon, Haryana",
    //     //     description:
    //     //       "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //     //     color: "#ee3c26",
           // },
    //     //   {
    //     //     title: "Data Science Intern",
    //     //     company: "Intel Indexer LLC",
    //     //     company_url:
    //     //       "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //     //     logo_path: "intel_logo.jpg",
    //     //     duration: "Nov 2018 - Dec 2018",
    //     //     location: "Work From Home",
    //     //     description:
    //     //       "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //     //     color: "#0071C5",
    //     //   },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "PROJECTS",
  description:
    " Working on projects such as enhancing user experiences with React, building RESTful APIs using Springboot, Node.js and Express, exploring MongoDB and CI/CD pipeline implementation have sharpened my problem-solving skills and the ability to innovate",
  avatar_image_path: "projects.png",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// projects

const project = {
  data: [
    {
      id: "",
      name: " Full-stack Ecommerce website",
      Webapp: "",
      url: "https://github.com/harsharachagiri23/AmazonClone",
      description: [
        "⚡ Developed a feature-rich e-commerce site using the MERN stack, enabling users to perform actions such as registration,product browsing, cart management, and providing an admin dashboard for product and order management ",
        "⚡ Integrated external APIs like Stripe for payment processing, cloudinary for image storage, and Auth0 for user authentication, ensuring a secure and seamless shopping experience, with thorough API testing using Postman",
      ],
      isFork: false,
      link: "https://github.com/harsharachagiri23/AmazonClone",
      languages: [
        {
          name: "HTML",
          iconifyClass: "html.png",
        },
        {
          name: "Webpack 5",
          iconifyClass: "webpack.png",
        },

        {
          name: "file loader",
          iconifyClass: "fileloader.png",
        },
        {
          name: "JavaScript",
          iconifyClass: "javascript.png",
        },
        {
          name: "Git",
          iconifyClass: "github.png",
        },
        {
          name: "React",
          iconifyClass: "react.png",
        },

        {
          name: "babel",
          iconifyClass: "babel.png",
        },
      ],
    },
    {
      id: "",
      name: "To-do_list",
      Webapp: "",
      url: "https://github.com/harsharachagiri23/To-do_list",
      description: [
        "⚡ Creating a simple To-Do List application using JavaScript, HTML, and CSS.",
        "⚡ Clicking on the edit button will allow you to edit the task, clicking on the completed button will strike a line through that task to indicate completion, and clicking on the delete button will remove that particular task.",
      ],
      isFork: false,
      link: "https://to-do-list-a01b70.netlify.app/",
      languages: [
        {
          name: "HTML",
          iconifyClass: "html.png",
        },
        {
          name: "CSS",
          iconifyClass: "css.png",
        },
        {
          name: "JavaScript",
          iconifyClass: "javascript.png",
        },
        {
          name: "Git",
          iconifyClass: "github.png",
        },
        {
          name: "React",
          iconifyClass: "react.png",
        },
      ],
    },
    {
      id: "",
      name: "Shopping Website",
      Webapp: "",
      url: "https://github.com/harsharachagiri23/Shopping_website",
      description: [
        "⚡ Shopping web application marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
        "⚡ site that shoppers interact with directly and includes features like fonts, colors, drop-down menus, image sliders, shopping carts, search bars, and product detail pages.  ",
        
      ],
      isFork: false,
      link: "https://remarkable-klepon-b0037b.netlify.app/index.html",
      languages: [
        {
          name: "HTML",
          iconifyClass: "html.png",
        },
        {
          name: "CSS",
          iconifyClass: "css.png",
        },
        {
          name: "JavaScript",
          iconifyClass: "javascript.png",
        },
        {
          name: "Git",
          iconifyClass: "github.png",
        },
      ],
    },
    {
      id: "",
      name: "tic-tac-toe-game",
      Webapp: "",
      url: "https://github.com/harsharachagiri23/Tic-Tac-Toe-game",
      description: [
        "⚡ Created a Tic-Tac-Toe Game using JavaScript and we have validation checks to implement the game features.",
        "⚡ In the game, Player-1 starts playing the game and both players make their moves in consecutive turns.",
        "⚡ The player who makes a straight 3-block chain wins the game. This game is built on the front-end using simple logic and validation checks only.",
      ],
      isFork: false,
      link: "https://tic-tac-toe-game-b352a0.netlify.app/",
      languages: [
        {
          name: "HTML 5",
          iconifyClass: "html.png",
        },
        {
          name: "CSS 3",
          iconifyClass: "css.png",
        },
        {
          name: "JavaScript",
          iconifyClass: "javascript.png",
        },
        {
          name: "Git",
          iconifyClass: "github.png",
        },
        {
          name: "jQuery",
          iconifyClass: "jquery.png",
        },
      ],
    },
   /* {
      id: "",
      name: "Socialmedia_application(fullstack)",
      Webapp: "",
      url: "https://github.com/harsharachagiri23/Social_media_app_full_stack",
      description: [
        "⚡ ",
        "⚡ ",
        "⚡ ",
        "⚡ ",
      ],
      isFork: false,
      link: "https://magnificent-bublanina-64e24e.netlify.app/",
      languages: [
        {
          name: "Reactjs",
          iconifyClass: "react.png",
        },
        {
          name: "Bootstrap 5",
          iconifyClass: "bootstrap.png",
        },
        {
          name: "Chackra ui",
          iconifyClass: "chakraui.png",
        },
        {
          name: "Git",
          iconifyClass: "github.png",
        },
        {
          name: "Material ui",
          iconifyClass: "materialui.png",
        },
        {
          name: "Json-Server",
          iconifyClass: "jsonserver.png",
        },
      ],
    }, */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "CONTACT ME",
    profile_image_path: "mail.jpg",
    description:
      " 📍 Currently in Connecticut, Let's connect, grab a cup of coffee and talk about tech and everything around it!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Documenting my learning journey and growth through articles.📚| Embracing the code journey at my own pace, a story of determination, and dreams have no expiration date.",
    link: "https://medium.com/@vardhani.h02/",
    avatar_image_path: "blog.png",
  },
  addressSection: {
    title: "ADDRESS",
    subtitle: " Connecticut, USA.",
    avatar_image_path: "contact1.jpg",
    // location_map_link: "https://www.google.com/maps/@28.5006897,77.3152116,12z",
  },
  phoneSection: {
    name: "PHONE NUMBER",
    number: "+1 860 938 0339",
  },
};

export const pathNavigation = [
  { name: "Home", id: "Home", path: "/home", active: true },
  { name: "Education", id: "Education", path: "/education", active: true },
  { name: "Experience", id: "Experience", path: "/experience", active: true },
  { name: "Projects", id: "Projects", path: "/projects", active: true },
  { name: "Open Source", id: "Projects", path: "/projects", active: false },
  { name: "Contact Me", id: "Contact Me", path: "/contact", active: true },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  project,
};
