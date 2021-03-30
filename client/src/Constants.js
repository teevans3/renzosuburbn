import KabukiPunk from './public/albums/KabukiPunk.png';
import Josuburbn from './public/albums/Josuburbn.png';
import BANAR15 from './public/albums/BANAR15.png';
import AggyJargon from './public/albums/AggyJargon.png';
import Cowabunga from './public/albums/Cowabunga.png';
import Down from './public/albums/Down.png';
import FindMyGirl from './public/albums/FindMyGirl.png';
import Friends from './public/albums/Friends.png';
import Jo from './public/albums/Jo.png';
import JustGotUnemployed from './public/albums/JustGotUnemployed.png';
import KnowYouDont from './public/albums/KnowYouDont.png';
import Mosh from './public/albums/Mosh.png';
import OffTop from './public/albums/OffTop.png';
import SongsToClapTo from './public/albums/SongsToClapTo.png';
import T1 from './public/merch/T1.png';
import T2 from './public/merch/T2.png';
import T3back1245 from './public/merch/T3back1245.png';
import T4 from './public/merch/T4.png';
import T5 from './public/merch/T5.png';
import T6back7 from './public/merch/T6back7.png';
import T7 from './public/merch/T7.png';
import T8 from './public/merch/T8.png';
import T9back8 from './public/merch/T9back8.png';
import GlobieSticker from './public/merch/GlobieSticker.png';
import MonstersUnderTheBedSticker from './public/merch/MonstersUnderTheBedSticker.png';
import NauseousSodaSticker from './public/merch/NauseousSodaSticker.png';
import RenzoSuburbnLogoSticker from './public/merch/RenzoSuburbnLogoSticker.png';
import RSSmileySticker from './public/merch/RSSmileySticker.png';
import TechnicianRenzo from './public/articles/TechnicianRenzo.png';
import TechnicianDotwav from './public/articles/TechnicianDotwav.png';



// New music for home page (either single or album)
const newMusic = {
    title: 'Nauseous',
    musicType: 'Single',
    link: 'https://unitedmasters.com/m/6058e5446b55ac371bab484f'
};

const albums = [
    {
        title: 'Nauseous',
        musicType: 'Single',
        image: '',
        tracks: [
            'Nauseous',
        ],
        id: '0',
        releaseDate: new Date(2020, 4, 9),
        link: 'https://unitedmasters.com/m/6058e5446b55ac371bab484f',
    },
    {
        title: 'Kabuki Punk',
        musicType: 'Album',
        image: KabukiPunk,
        tracks: [
            'Kabuki Punk',
            'Quacks',
            'Sorry Not Sorry',
            'Aggy Jargon',
            'Selfish Lover',
            'Deep End',
            'Jingle',
            'BAN AR-15',
            'Usual Suspects',
            'I Need a Bar of Space',
            'Purple Submarine',
            'Nameless'
        ],
        id: '1',
        releaseDate: new Date(2019, 12, 12),
        link: 'https://fanlink.to/JOSUBURBN'
    },
    {
        title: 'Josuburbn',
        musicType: 'Album',
        image: Josuburbn,
        tracks: [
            'Black Rainbow',
            'Evening News',
            'Mosh!',
            'Find a Way',
            'Ilivewithmymombutcomethru',
            'Cowabunga',
            'Nickelodeon Orange',
            'Know You Don\'t',
            '1-800-Find-My-Girl',
            'Golden Hour Image',
            'Ralph Ellison',
            'Aquaman Fusion',
            '90\'s Baby',
            'Xans & Suicide',
        ],
        id: '2',
        releaseDate: new Date(2018, 6, 14),
        link: 'https://fanlink.to/JOSUBURBN'
    },
    {
        title: 'Just Got Unemployed',
        musicType: 'Single',
        image: JustGotUnemployed,
        tracks: ['Just Got Unemployed'],
        id: '3',
        releaseDate: new Date(2020, 4, 10),
        link: '#'
    },
    {
        title: 'Down',
        musicType: 'Single',
        image: Down,
        tracks: ['Down'],
        id: '4',
        releaseDate: new Date(2020, 3, 18),
        link: '#'
    },
    {
        title: 'Aggy Jargon',
        musicType: 'Single',
        image: AggyJargon,
        tracks: ['Aggy Jargon'],
        id: '5',
        releaseDate: new Date(2019, 11, 1),
        link: '#'
    },
    {
        title: 'Songs to Clap To',
        musicType: 'Album',
        image: SongsToClapTo,
        tracks: [
            'BAN AR-15',
            'Kabuki Punk',
            'Sorry Not Sorry'
        ],
        id: '6',
        releaseDate: new Date(2019, 11, 12),
        link: '#'
    },
    {
        title: 'BAN AR-15',
        musicType: 'Single',
        image: BANAR15,
        tracks: ['BAN AR-15'],
        id: '7',
        releaseDate: new Date(2019, 11, 8),
        link: '#'
    },
    {
        title: 'Fr!ends',
        musicType: 'Single',
        image: Friends,
        tracks: ['Fr!ends'],
        id: '8',
        releaseDate: new Date(2019, 7, 22),
        link: '#'
    },
    {
        title: 'Jo',
        musicType: 'Single',
        image: Jo,
        tracks: ['Jo'],
        id: '9',
        releaseDate: new Date(2019, 5, 8),
        link: '#'
    },
    {
        title: 'Cowabunga',
        musicType: 'Single',
        image: Cowabunga,
        tracks: ['Cowabunga'],
        id: '10',
        releaseDate: new Date(2018, 4, 19),
        link: '#'
    },
    {
        title: '1-800-Find-My-Girl',
        musicType: 'Single',
        image: FindMyGirl,
        tracks: ['1-800-Find-My-Girl'],
        id: '11',
        releaseDate: new Date(2018, 4, 2),
        link: '#'
    },
    {
        title: 'Mosh!',
        musicType: 'Single',
        image: Mosh,
        tracks: ['Mosh!'],
        id: '12',
        releaseDate: new Date(2018, 3, 26),
        link: '#'
    },
    {
        title: 'Off Top',
        musicType: 'Single',
        image: OffTop,
        tracks: ['Off Top'],
        id: '13',
        releaseDate: new Date(2018, 3, 1),
        link: '#'
    },
    {
        title: 'Know You Don\'t',
        musicType: 'Single',
        image: KnowYouDont,
        tracks: ['Know You Don\'t'],
        id: '14',
        releaseDate: new Date(2018, 2, 20),
        link: '#'
    },
];

const merch = [
    {
        title: '"RS Smiley" Sticker',
        price: '5.00',
        sizes: [],
        imageFront: RSSmileySticker,
        imageBack: RSSmileySticker,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: '"Nauseous Soda" Sticker',
        price: '3.00',
        sizes: [],
        imageFront: NauseousSodaSticker,
        imageBack: NauseousSodaSticker,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: '"Globie" Sticker (designed by DOOMSDAY SOOIRE)',
        price: '4.00',
        sizes: [],
        imageFront: GlobieSticker,
        imageBack: GlobieSticker,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: '"Monsters Under The Bed" Sticker (designed by DOOMSDAY SOOIRE)',
        price: '4.00',
        sizes: [],
        imageFront: MonstersUnderTheBedSticker,
        imageBack: MonstersUnderTheBedSticker,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: '"Renzo Suburbn Logo" Sticker',
        price: '5.00',
        sizes: [],
        imageFront: RenzoSuburbnLogoSticker,
        imageBack: RenzoSuburbnLogoSticker,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: 'Smiley T-Shirt 1',
        price: '59.99',
        sizes: ['XS', 'SM', 'MED', 'LG', 'XL'],
        imageFront: T1,
        imageBack: T3back1245,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: 'Smiley Rainbow T-Shirt 1',
        price: '59.99',
        sizes: ['XS', 'SM', 'MED', 'LG', 'XL'],
        imageFront: T2,
        imageBack: T3back1245,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: 'Smiley T-Shirt 2',
        price: '59.99',
        sizes: ['XS', 'SM', 'MED', 'LG', 'XL'],
        imageFront: T4,
        imageBack: T3back1245,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: 'Smiley Rainbow T-Shirt 2',
        price: '59.99',
        sizes: ['XS', 'SM', 'MED', 'LG', 'XL'],
        imageFront: T5,
        imageBack: T3back1245,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: 'Smiley T-Shirt 3',
        price: '59.99',
        sizes: ['XS', 'SM', 'MED', 'LG', 'XL'],
        imageFront: T7,
        imageBack: T6back7,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
    {
        title: 'Nauseous T-Shirt',
        price: '59.99',
        sizes: ['XS', 'SM', 'MED', 'LG', 'XL'],
        imageFront: T8,
        imageBack: T9back8,
        soldOut: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf48w30POm-5ANWq3RUO4yHIoE2KJaWs19lrn1STOXFpwjg1A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
    },
];

// const tours = [
//     {  
//         venue: 'Cat\'s Cradle',
//         city: 'Carrboro',
//         state: 'NC',
//         country: 'USA',
//         date: new Date(2021, 4, 1),
//         soldOut: false
//     },
// ]
const tours = [];


const videos = [
    'https://www.youtube.com/embed/ODrIIPyYKls',
    'https://www.youtube.com/embed/wjnaBiV5AGs',
    'https://www.youtube.com/embed/etgBYZb7yow',
    'https://www.youtube.com/embed/UWFUOK_LB7Q',
    'https://www.youtube.com/embed/W8MXMoLMxNk',
    'https://www.youtube.com/embed/ppSz6CmPhf8',
    'https://www.youtube.com/embed/UVPwyvtStfY',
    'https://www.youtube.com/embed/A0bp6cjKqu4'
]

const articles = [
    {
        title: 'NC State student artist debuts solo music',
        link: 'http://www.technicianonline.com/arts_entertainment/article_39e87e26-069c-11ea-a54b-9f2a5d5a6578.html',
        publishDate: new Date(2019, 11, 14),
        publisher: 'Technician',
        image: TechnicianRenzo,
    },
    {
        title: 'Meet Dotwav Media, making music to inspire their generation',
        link: 'http://www.technicianonline.com/arts_entertainment/article_d8484ea8-d374-11e9-bede-87943c39465f.html',
        publishDate: new Date(2019, 9, 9),
        publisher: 'Technician',
        image: TechnicianDotwav,
    },
]

export {newMusic}

export {albums};

export {merch};

export {tours};

export {videos};

export {articles};