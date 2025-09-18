// src/data/placesData.js
import parasnath from "../assets/Pics/LEAD IMAGE_MAN_3231.jpg"
import baidyanath from "../assets/Pics/Deoghar-Baidyanath-Temple.jpeg"
import dassam from "../assets/Pics/dassam-falls-ranchi-jharkhand-ranchi-1-attr-hero.jpeg"
import jonha from "../assets/Pics/1662583016Jonha_Waterfalls,_Ranchi,_Jharkhand.jpg"

export const placesData = {
  "jonha-falls": {
    id: "jonha-falls",
    name: "Jonha Falls",
    description: "Also known as Gautamdhara, Jonha Falls is a stunning hanging valley waterfall. The Kanchi River falls from a height of 43 meters (141 ft). Visitors have to descend around 700 steps to reach the bottom, offering a close-up view of the cascade and the beautiful surrounding forest.",
    imageUrl: `${jonha}`,
    location: "Ranchi, Jharkhand, India",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58529.13543665812!2d85.57865242377363!3d23.34491787229558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e6d97c3ffffff%3A0x4c75c3b9b9a4b3d3!2sJonha%20Falls!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin",
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1758225061097!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGQ3TUtDWkE.!2m2!1d23.34230689656271!2d85.61020548630665!3f0!4f0!5f0.7820865974627469",
    reviews: [
      { user: "Amit S.", rating: 5, comment: "Absolutely breathtaking, especially after the monsoon. The steps are a bit tiring but totally worth it!" },
      { user: "Priya K.", rating: 4, comment: "A perfect spot for a day trip from Ranchi. Be careful as the rocks can be slippery." },
    ],
  },
  "dassam-falls": {
    id: "dassam-falls",
    name: "Dassam Falls",
    description: "A natural cascade where the Kanchi River falls from a height of 44 meters (144 ft). The area is known for its unique rock formations and the echo point. The sound of the falling water is mesmerizing and the surrounding greenery makes it a serene getaway.",
    imageUrl:`${dassam}`,
    location: "Taimara, Jharkhand, India",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58529.13543665812!2d85.45!3d23.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4c33a9aaaaaab%3A0x7d6f5c5e8b4e4b1c!2sDassam%20Falls!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin",
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1758225562098!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2xxNUR5YlE.!2m2!1d23.14625149397734!2d85.46722033848455!3f279.65894!4f0!5f0.7820865974627469",
    reviews: [
      { user: "Rohan V.", rating: 5, comment: "The force of the water is incredible. One of the best waterfalls in Jharkhand." },
      { user: "Anjali M.", rating: 4, comment: "Good place for a picnic. Make sure to carry your own food and water." },
    ],
  },
  "baidyanath-temple": {
    id: "baidyanath-temple",
    name: "Baidyanath Temple",
    description: "One of the twelve Jyotirlingas, the most sacred abodes of Shiva. It's a major pilgrimage destination for Hindus, featuring a large complex of 22 temples with various deities. The architecture and spiritual atmosphere attract millions of devotees annually.",
    imageUrl:`${baidyanath}`,
    location: "Deoghar, Jharkhand, India",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58309.5813709127!2d86.6663980238128!3d24.48202497677761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1165dc136d391%3A0x68b5ea236a54331!2sBaidyanath%20Temple!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin",
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1758225723280!6m8!1m7!1sbu1qwf1V573Ukt1XOfctWw!2m2!1d24.4968473182151!2d86.69965973508145!3f351.0457209929268!4f0.8542765182026386!5f0.7820865974627469",
    reviews: [
      { user: "Rajesh P.", rating: 5, comment: "A truly divine experience. The atmosphere is filled with positive energy. A must-visit for any devotee." },
      { user: "Sneha G.", rating: 4, comment: "Very powerful place, but be prepared for large crowds, especially during Shraavana mela." },
    ],
  },
  "parasnath-hills": {
    id: "parasnath-hills",
    name: "Parasnath Hills",
    description: "Also known as Shikharji, it's the highest mountain in Jharkhand and one of the most important pilgrimage sites for Jains. It is believed that 20 of the 24 Tirthankaras attained moksha here. The trek to the top is challenging but offers breathtaking panoramic views.",
    imageUrl: `${parasnath}`,
    location: "Giridih, Jharkhand, India",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58309.5813709127!2d86.11!3d23.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f41e5e3bffffff%3A0x3f5e3e3b1c5e3e3b!2sParasnath%20Hill!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin",
    streetViewEmbed:"https://www.google.com/maps/embed?pb=!4v1758225813516!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHFxSmpCQ0E.!2m2!1d23.96250001454352!2d86.13277782355351!3f235.95291!4f0!5f0.7820865974627469",
    reviews: [
      { user: "Vikram Jain", rating: 5, comment: "The trek is difficult but spiritually rewarding. The view from the top is simply divine. A life-changing experience." },
      { user: "Pooja S.", rating: 4, comment: "An arduous but fulfilling pilgrimage. Start early in the morning to avoid the heat. The path is well-maintained." },
    ],
  },
};
