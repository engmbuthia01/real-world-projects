export const DUMMY_FEATURES = ["Full access to all video lectures", "Self-paced curriculum", "Real-time progress tracking", "Lifetime access", "Certificate of Completion"];

export const DUMMY_FAQS = [
    {
        question: "Are the courses on GreatSkills free to watch?",
        answer: "Yes. All featured video curricula and lectures are 100% free with no hidden subscriptions or paywalls.",
    },
    {
        question: "How does progress tracking work?",
        answer: "When you mark a lecture complete in the classroom player, your progress updates automatically to your personal learning dashboard.",
    },
    {
        question: "Can I create and publish my own courses?",
        answer: "Yes! Any instructor account can immediately access the Instructor Panel to author courses, upload modules, and organize lectures.",
    },
    {
        question: "Do I need to install any external apps or plugins?",
        answer: "No. GreatSkills runs entirely inside modern web browsers with lightning-fast streaming and zero setup required.",
    },
    {
        question: "How do I create and publish my own courses?",
        answer: "Yes! Any instructor account can immediately access the Instructor Panel to author courses, upload modules, and organize lectures.",
    },
];

export const DUMMY_COURSES = [
    {
        _id: "6adf51b565b2191156e7f38e",
        title: "Full Stack Web Development",
        description: "Master modern web development from frontend to backend and learn how to build complete, production-ready web applications from scratch.",
        category: "Development",
        level: "Intermediate",
        price: 0,
        thumbnail: "/images/course_cover_3.jpg",
        instructor: "6adf50ad65b2191156e7f388",
        instructorName: "John Doe",
        lectures: [
            {
                title: "Introduction",
                videoUrl: "https://videos.pexels.com/video-files/36328529/15406859_1280_720_25fps.mp4",
                duration: "10 mins",
                freePreview: false,
                _id: "6ae1d05878ccd75290de84ba",
            },
            {
                title: "Syllabus we cover",
                videoUrl: "https://videos.pexels.com/video-files/854053/854053-hd_1280_720_25fps.mp4",
                duration: "10 mins",
                freePreview: false,
                _id: "6ae1e9f356e7a9ee91a44722",
            },
        ],
        enrolledStudents: [],
        createdAt: "2026-10-26T13:12:21.845Z",
        updatedAt: "2026-11-02T13:34:20.545Z",
        progressPercentage: 0,
        completedLecturesCount: 0,
        isCompleted: false,
    },
    {
        _id: "6adb1351fca76571a44319f1",
        title: "Modern Fullstack Engineering: React & Node",
        description: "Architect scalable MERN applications with modern React 19, TypeScript, and cloud-native databases.",
        category: "Development",
        level: "Intermediate",
        price: 49.99,
        thumbnail: "/images/course_cover_2.jpg",
        instructor: "6adb1351fca76571a44319e9",
        instructorName: "Natalie Storm, Design Department",
        lectures: [
            {
                title: "01. Introduction to Web Architecture",
                videoUrl: "https://videos.pexels.com/video-files/36328529/15406859_1280_720_25fps.mp4",
                duration: "8 mins",
                freePreview: true,
                _id: "6adb1351fca76571a44319f2",
            },
            {
                title: "02. Building RESTful APIs with Express",
                videoUrl: "https://videos.pexels.com/video-files/854053/854053-hd_1280_720_25fps.mp4",
                duration: "16 mins",
                freePreview: false,
                _id: "6adb1351fca76571a44319f3",
            },
        ],
        enrolledStudents: ["6adb1351fca76571a44319ea", "6adf50ad65b2191156e7f388"],
        createdAt: "2026-10-23T07:57:05.744Z",
        updatedAt: "2026-10-29T10:13:02.241Z",
        progressPercentage: 0,
        completedLecturesCount: 0,
        isCompleted: false,
    },
    {
        _id: "6adb1351fca76571a44319eb",
        title: "Masterclass: Designing for web",
        description: "Master modern web design, interaction principles, visual hierarchy, and component systems with Natalie Storm.",
        category: "Design",
        level: "Beginner",
        price: 0,
        thumbnail: "/images/course_cover_1.jpg",
        instructor: "6adb1351fca76571a44319e9",
        instructorName: "Natalie Storm, Design Department",
        lectures: [
            {
                title: "Fundamentals of Web Design",
                videoUrl: "https://videos.pexels.com/video-files/36328529/15406859_1280_720_25fps.mp4",
                duration: "18 mins",
                freePreview: true,
                _id: "6adb1351fca76571a44319ee",
            },
            {
                title: "What is Interaction Design",
                videoUrl: "https://videos.pexels.com/video-files/854053/854053-hd_1280_720_25fps.mp4",
                duration: "10 mins",
                freePreview: true,
                _id: "6adb1351fca76571a44319ec",
            },
            {
                title: "Motion in UI Design",
                videoUrl: "https://videos.pexels.com/video-files/36328529/15406859_1280_720_25fps.mp4",
                duration: "15 mins",
                freePreview: true,
                _id: "6adb1351fca76571a44319ed",
            },
            {
                title: "Improving Visual Skills",
                videoUrl: "https://videos.pexels.com/video-files/854053/854053-hd_1280_720_25fps.mp4",
                duration: "12 mins",
                freePreview: false,
                _id: "6adb1351fca76571a44319ef",
            },
            {
                title: "Finding inspiration",
                videoUrl: "https://videos.pexels.com/video-files/36328529/15406859_1280_720_25fps.mp4",
                duration: "16 mins",
                freePreview: false,
                _id: "6adb1351fca76571a44319f0",
            },
        ],
        enrolledStudents: [],
        createdAt: "2026-10-23T07:57:05.697Z",
        updatedAt: "2026-10-29T10:39:40.430Z",
        progressPercentage: 0,
        completedLecturesCount: 0,
        isCompleted: false,
    },
];

export const DUMMY_USER = {
    _id: "6adf50ad65b2191156e7f388",
    name: "John Doe",
    email: "john@example.com",
    role: "instructor",
    createdAt: "2026-10-26T13:07:57.381Z",
    updatedAt: "2026-10-26T13:07:57.381Z",
};

export const DUMMY_PROGRESS = {
    completedLectures: ["6ae1d05878ccd75290de84ba", "6ae1e9f356e7a9ee91a44722"],
    isCompleted: true,
    percentage: 100,
};

export const DUMMY_INSTRUCTOR_DASHBOARD = [
    {
        _id: "6adf51b565b2191156e7f38e",
        title: "Full Stack Web Development",
        description: "Master modern web development from frontend to backend and learn how to build complete, production-ready web applications from scratch.",
        category: "Development",
        level: "Intermediate",
        price: 0,
        thumbnail: "/images/course_cover_3.jpg",
        instructor: "6adf50ad65b2191156e7f388",
        instructorName: "John Doe",
        lectures: [
            {
                title: "Introduction",
                videoUrl: "https://videos.pexels.com/video-files/36328529/15406859_1280_720_25fps.mp4",
                duration: "10 mins",
                freePreview: false,
                _id: "6ae1d05878ccd75290de84ba",
            },
            {
                title: "Syllabus we cover",
                videoUrl: "https://videos.pexels.com/video-files/854053/854053-hd_1280_720_25fps.mp4",
                duration: "10 mins",
                freePreview: false,
                _id: "6ae1e9f356e7a9ee91a44722",
            },
        ],
        enrolledStudents: ["6adb1351fca76571a44319ea", "6adf50ad65b2191156e7f388", "6ae89151e23f6082385ef68e"],
        createdAt: "2026-10-26T13:12:21.845Z",
        updatedAt: "2026-11-02T13:34:20.545Z",
    },
];
