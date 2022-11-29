import img1 from "../../assets/b.jpg";
import img2 from "../../assets/b5.jpg";
import img3 from "../../assets/bg.jpg";
import img4 from "../../assets/bg1.jpg";
import img5 from "../../assets/bg2.jpg";
import img6 from "../../assets/bg3.jpg";
import img7 from "../../assets/bg4.jpg";
import img8 from "../../assets/2.png";
import img9 from "../../assets/bg6.jpg";
import img10 from "../../assets/bg7.jpg";
import img11 from "../../assets/post.jpg";
import img12 from "../../assets/profile.jpg";

const posts = [
  {
    id: 1,
    profile: img1,
    nom: "Aksanti Bahiga",
    temps: "Il y a 2 seconde",
    img: img2,
    likes: [img10, img12, img6, img4],
  },
  {
    id: 2,
    profile: img4,
    nom: "Ahadi Jospin",
    temps: "Il y a 2 mois",
    img: img9,
    likes: [img7, img8, img9],
  },
  {
    id: 3,
    profile: img5,
    nom: "Jessica kalola",
    temps: "Il y a un an",
    img: img12,
    likes: [img8, img9, img5],
  },
  {
    id: 4,
    profile: img7,
    nom: "Balola Germaine",
    temps: "Il y une seconde",
    img: img6,
    likes: [img8, img1, img11],
  },
  {
    id: 5,
    profile: img5,
    nom: "Pélagie Rayan",
    temps: "il y 33 min",
    img: img7,
    likes: [img6, img3, img1],
  },
];

export const notification = [
  {
    id: 1,
    img: img12,
    text: "Mukala a liker votre post avec Tacite",
    iconEnd: "remove-circle",
  },
  {
    id: 2,
    img: img1,
    text: "Laetia vous a identifié avec Kambale",
    iconEnd: "remove-circle",
  },
  {
    id: 3,
    img: img4,
    text: "Votre nouveau contact marcellin est sur marcybook",
    iconEnd: "remove-circle",
  },
  {
    id: 4,
    img: img3,
    text: "Il y a un de vos amis qui vous aime bien",
    iconEnd: "remove-circle",
  },
  {
    id: 5,
    img: img5,
    text: "L'organisation kobe, fete ses 5 ans d'anniversaire",
    iconEnd: "remove-circle",
  },
  {
    id: 6,
    img: img6,
    text: "Le créateur de cette application est génie de la RDC et il est cool",
    iconEnd: "remove-circle",
  },
  {
    id: 7,
    img: img8,
    text: "Informatique a mis à jour son status pour ses prochaines vacances",
    iconEnd: "remove-circle",
  },
];

export const users = [
  {
    id: 1,
    nom: "Aksanti Bahiga",
    img: img2,
    message: "Bonjour marcellin, je te cherche pour la vie",
    etat: false,
  },
  {
    id: 2,
    nom: "Joyce Luna",
    img: img6,
    message: "Salut grand",
    etat: true,
  },
  {
    id: 3,
    nom: "Peau Angila",
    img: img10,
    message: "Tu es en cours ?",
    etat: true,
  },
  {
    id: 4,
    nom: "Daniella Kabwe",
    img: img3,
    message: "Je t'aime bb",
    etat: false,
  },
  {
    id: 5,
    nom: "Nikita Kajungu",
    img: img1,
    message: "Salut mon fils aimé",
    etat: true,
  },
];

export const remove = () => {
  posts.pop();
};

export default posts;
