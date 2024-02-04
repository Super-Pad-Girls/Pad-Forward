import box from "/images/mall-bag.png";
import hand from "/images/hold.png";
import heart from "/images/heart-ballon.png";
import money from "/images/paper-money-two.png";

export const stepsData = [
    {
        _id: 1,
        name: "1. Collect",
        image: box,
        msg: "Gather your unused menstrual pads.",
        link: "/become-a-donor",
    },
    {
        _id: 2,
        name: "2. Donate",
        image: hand,
        msg: "Send them to closest PowerPadGirl Location.",
        link: "/become-a-donor",
    },
    {
        _id: 3,
        name: "3. Impact",
        image: heart,
        msg: "We distribute the pads to women in shelters, schools, and low-income communities.",
        link: "/become-a-donor",
    },
];

export const donationTypesData = [
    {
        _id: 1,
        name: "1. Pad Donation",
        image: heart,
        link: "",
    },
    {
        _id: 2,
        name: "2. Monetary Donations",
        image: money,
        link: "",
    },
    {
        _id: 3,
        name: "3. Be a Power Pad Girl",
        image: heart,
        link: "",
    },
];

export const  homeData = {
    firstTitle: "1. Send Unused Pads:",
    firstDescription:
        "If you have menstrual pads that you no longer need, you can send them to the nearest PowerPadGirl address. Your unused pads can make a significant difference in someone's life by providing essential menstrual hygiene products to those in need.",
    secondTitle: "2. Support Through Funds",
    secondDescription:
        "Your monetary donations are invaluable to us. The funds are primarily used to cover shipping costs for donated pads and to purchase additional pads when there's a shortfall. Every dollar you donate helps us ensure that everyone who needs menstrual hygiene products can get them.",
    thirdTitle: "3. Distribute Donated Pads:",
    thirdDescription:
        "Take an active role in our mission by becoming a Power Pad Girl. In this role, you will receive donated pads and then distribute them to those in need based on incoming requests. This is a hands-on way to contribute and make a direct impact on individuals' lives.",
};

export const homeAboutData = {
    title: '"PadForward: Together, We Can End Menstrual Inequity"',
    description:
        "At PadForward, we believe every woman deserves access to menstrual hygiene products. Our initiative connects post-menopausal women with excess menstrual supplies to those in need, ensuring dignity and health for all.",
};

export const getDonationData = {
    firstTitle: "1. Privacy and Anonymity Guaranteed",
    firstDescription:
        "We understand the importance of privacy and confidentiality. When you apply for support, your anonymity is fully guaranteed. Please feel comfortable reaching out for help without the worry of your personal information being disclosed. Your trust and comfort are paramount to us.",
    secondTitle: "2. Delivery to Your Provided Address",
    secondDescription:
        "Once your request is approved, we will ship the menstrual pads directly to the address you have provided. Our goal is to ensure that you receive the support you need promptly and efficiently",
    thirdTitle: "3. Tips and Support Alongside Your Pads",
    thirdDescription:
        "Our program operates on the principle that menstrual health is a right, not a privilege. Therefore, everyone in need of menstrual hygiene products is welcome to apply for support. We aim to ensure that no one is left without access to essential menstrual care.",
};

export const getDonationAboutData = {
    title: "Everyone Is Eligible",
    description:
        "Our program operates on the principle that menstrual health is a right, not a privilege. Therefore, everyone in need of menstrual hygiene products is welcome to apply for support. We aim to ensure that no one is left without access to essential menstrual care.",
};
