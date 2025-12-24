/**
 * @fileoverview FAQ content data for FAQ section flip cards.
 * 
 * Contains question and answer pairs displayed in the FAQ section.
 * Each item renders as a flippable card using the Box component.
 * 
 * @module constants/faqData
 */

/**
 * FAQ data array for homepage FAQ section.
 * 
 * @constant
 * @type {Array<Object>}
 * 
 * @property {number} id - Unique FAQ identifier
 * @property {string} question - Question text (displayed on front of card)
 * @property {string} answer - Answer text (revealed on hover/flip)
 */
export const faqData = [
    {
        id: 1,
        question: "When is Meraki held?",
        answer: "Usually in the spring semester (March–April), though dates vary each year."
    },
    {
        id: 2,
        question: "Who organizes it?",
        answer: "The festival is managed by student clubs and committees, with faculty guidance."
    },
    {
        id: 3,
        question: "What events are included?",
        answer: "A mix of coding contests, hackathons, robotics, music, dance, drama, and sports."
    },
    {
        id: 4,
        question: "Are workshops part of Meraki?",
        answer: "Yes, sessions on AI, coding, robotics, and entrepreneurship are often conducted."
    },
    {
        id: 5,
        question: "Is it open to other colleges?",
        answer: "Yes, students from nearby and national institutes can participate."
    },
    {
        id: 6,
        question: "Is there a registration fee?",
        answer: "Some events are free, while others require a small fee depending on sponsorship."
    },
    {
        id: 7,
        question: "Does Meraki have sponsors?",
        answer: "Yes, supported by corporates, startups, and local businesses."
    },
    {
        id: 8,
        question: "What are the flagship events?",
        answer: "Coding marathon, robotics challenge, battle of bands, and cultural showcase."
    },
    {
        id: 9,
        question: "Are prizes awarded?",
        answer: "Yes, winners get cash prizes, certificates, and goodies."
    },
    {
        id: 10,
        question: "Why is Meraki important?",
        answer: "It helps students develop skills, network, and showcase creativity beyond academics."
    },
    {
        id: 11,
        question: "How does it impact the community?",
        answer: "It promotes local culture, tourism, and industry–academia collaboration."
    },
    {
        id: 12,
        question: "Are prizes given?",
        answer: "Yes, cash, certificates, goodies."
    }
];
