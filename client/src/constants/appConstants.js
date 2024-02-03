import box from "../../public/images/mall-bag.png";
import hand from "../../public/images/hold.png";
import heart from "../../public/images/heart-ballon.png";
import money from "../../public/images/paper-money-two.png";

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
