//


import { logo4, wordpress } from "../assets/images";

import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    tailwindcss,
    threads
} from "../assets/icons";

// skilss 

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },


    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];

// experiences

export const experiences = [
    {
        title: "Mobile App Development using Flutter",
        company_name: "Kharayoo,Inc",
        icon: logo4,
        iconBg: "#accbe1",
        date: "September 2026 - Present",
        points: [
            "Developing and maintaining android applications using Flutter framework  and other related technologies.",

        ],
    },
    {
        title: "WebApp development using reactjs, nextjs",
        company_name: "Freelance",
        icon: nextjs,
        iconBg: "#b7e4c7",
        date: "Jan 2022- Jan 2024",
        points: [
            "Developing Some of the freelancher work in reactjs and nextjs and nothing more than that only that ",
        ],
    },

    {
        title: "Website Development using Wordpress",
        company_name: "Freelance",
        icon: wordpress,
        iconBg: "#b7e4c7",
        date: "Jan 2020 - Jan 2022",
        points: [
            "Developing Some of the freelancher work in wordpress and nothing more than that only that ",

        ],
    },



];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'WholeSale Gayatri HandiCraft ',
        description: 'WholeSale Gayatri HandiCraft is an e-commerce website developed to showcase and promote handcrafted products, traditional gift items, and elegant home décor accessories. The platform provides customers with an easy way to explore different handcrafted collections, view product details, and discover unique items suitable for weddings, festivals, anniversaries, housewarming ceremonies, and other special occasions.',

        link: 'https://wholesalegayatrihanddicraft.com/',
    },

    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'To do app Using Bloc State-Management',
        description: 'The To-Do App is a Flutter-based task management application developed using **BLoC state management**. It allows users to add, update, delete, complete, and manage their daily tasks. BLoC separates the business logic from the user interface, making the application organized, maintainable, and easier to manage. The project uses **Flutter, Dart, BLoC, and Equatable** to provide efficient state management and a smooth user experience.',
        link: 'https://github.com/sonu25r2e5/todoappusing_bloc',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'NEC APP using Firebase for DataStore',
        description: 'The NEC Quiz App is a Flutter-based quiz application that uses Firebase as its backend and datastore. It provides users with quiz questions, allows them to attempt quizzes, and stores quiz data and user results securely in Firebase. The app also helps users track their scores and improve their preparation through an interactive and user-friendly interface.',
        link: 'https://github.com/sonu25r2e5/quizAPp',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Paropakar Sanastha Anusand Kendra a webiste for Old age Care',
        description: 'The Paropakar Sanstha website is a responsive website developed to present information about an organization providing care and support for elderly and vulnerable people in Birtamode, Jhapa. The website highlights its residential care services, medical and nursing support, beneficiaries, organization history, team members, and contact information. It provides a simple and accessible platform for visitors to learn about the organization and get in touch for assistance or support.',
        link: 'https://crcnepal23.org/',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];