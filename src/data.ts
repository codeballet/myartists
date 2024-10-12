import { IArtist, IImageCredits, IWork, IWorkArtist } from "./interfaces";

// name structure for images: artist_image, nnn_nn
export const artists: IArtist[] = [
    {
        family_name: "möller",
        first_name: "david",
        id: "000",
        images: [
            "https://www.dropbox.com/scl/fi/h6s65304hur77wynokyb5/david_00.jpg?rlkey=5rcd3md15spe05ibh9cfz0phz&st=049wfkpc&raw=1",
        ],
    },
    {
        family_name: "stjernholm",
        first_name: "johan",
        id: "001",
        images: ["001_00"],
    },
    {
        family_name: "brorsson",
        first_name: "christine",
        id: "002",
        images: ["002_00"],
    },
];

export const imageCredits: IImageCredits[] = [
    {
        image_id: "000_00",
        credit: "David Möller",
    },
    {
        image_id: "000_000_00",
        credit: "David Möller",
    },
    {
        image_id: "000_000_01",
        credit: "David Möller",
    },
    {
        image_id: "000_001_00",
        credit: "David Möller",
    },
    {
        image_id: "000_001_01",
        credit: "David Möller",
    },
    {
        image_id: "000_002_00",
        credit: "David Möller",
    },
    {
        image_id: "000_002_01",
        credit: "David Möller",
    },
    {
        image_id: "000_003_00",
        credit: "David Möller",
    },
    {
        image_id: "000_003_01",
        credit: "David Möller",
    },
    {
        image_id: "001_00",
        credit: "Johan Stjernholm",
    },
    {
        image_id: "001_000_00",
        credit: "Johan Stjernholm",
    },
    {
        image_id: "002_00",
        credit: "Emil Forsander",
    },
    {
        image_id: "002_000_00",
        credit: "Emil Forsander",
    },
    {
        image_id: "002_001_00",
        credit: "AdeY",
    },
    {
        image_id: "002_001_01",
        credit: "AdeY",
    },
];

// name structure for id: artist_work, nnn_nnn
// name structure for images: artist_work_image, nnn_nnn_nn
export const works: IWork[] = [
    {
        dates: [],
        description: "Get stuff sold!",
        id: "000_000",
        images: [
            "https://www.dropbox.com/scl/fi/soburdr6h1lf4cvg7tgim/advertise_00.jpg?rlkey=icovk7j5ns6z3wx215zjf6qor&st=y6s1jsy4&raw=1",
            "https://www.dropbox.com/scl/fi/qqryeorusq0b757ruypf3/advertise_01.jpg?rlkey=n09oj6ua9hnlfeoejfiv0j0hr&st=bx61qabm&raw=1",
        ],
        places: [],
        times: [],
        title: "Advertising",
    },
    {
        dates: [],
        description: "Enhance your professional image!",
        id: "000_001",
        images: [
            "https://www.dropbox.com/scl/fi/47cwykuho4r2vtal3q7mv/business_00.jpg?rlkey=ugbon50e8syeztgm7kizqrwyj&st=j0dewn40&raw=1",
            "https://www.dropbox.com/scl/fi/g65f6h1fzdbttdw5uqeqc/business_01.jpg?rlkey=9z3hsdaqyt2ej1ea6niasgthl&st=077uelbj&raw=1",
        ],
        places: [],
        times: [],
        title: "Business Portraits",
    },
    {
        dates: [],
        description: "Live with style!",
        id: "000_002",
        images: [
            "https://www.dropbox.com/scl/fi/mi35mepbaysk9lcjl05ar/fashion_00.jpg?rlkey=otg2t1kt8pnac0qu2xlq0bake&st=zc0fm9m5&raw=1",
            "https://www.dropbox.com/scl/fi/xqzgt83bnace1nnkibrrl/fashion_01.jpg?rlkey=k2f3zcsg6sfcg747as7x1kse3&st=bz7csozj&raw=1",
        ],
        places: [],
        times: [],
        title: "Fashion",
    },
    {
        dates: [],
        description: "Who are you?",
        id: "000_003",
        images: [
            "https://www.dropbox.com/scl/fi/c98m9a81a87i5reb9rdne/portrait_00.jpg?rlkey=4am4a3eemn1z673vawoti1f6q&st=hjup2ay6&raw=1",
            "https://www.dropbox.com/scl/fi/38h85h3uhldg2oyrwzgrz/portrait_01.jpg?rlkey=p8ug8x1ewgeyhvboe1sqvppg8&st=qmq7ft5h&raw=1",
        ],
        places: [],
        times: [],
        title: "Portraits",
    },
    {
        dates: [],
        description: "Immersive Performance Art with Generative AI.",
        id: "001_000",
        images: [
            "https://www.dropbox.com/scl/fi/rn6k9m87hec665q784zhe/mazu_00.jpg?rlkey=q2ezygbpuj2fw78c8er27l0xk&st=s8qwbm9y&raw=1",
        ],
        places: [],
        times: [],
        title: "Mazu: Water Legends",
    },
    {
        dates: [],
        description: "Platsspecifikt verk på Kronohäktet i Ängelholm.",
        id: "002_000",
        images: [
            "https://www.dropbox.com/scl/fi/0ec0n5vqjc6hodtjyx3ut/christine_00.jpg?rlkey=wgdk76szkea6wp6s5ffekkwzu&st=28sdor02&raw=1",
        ],
        places: [],
        times: [],
        title: "Dans genom väggarna",
    },
    {
        dates: [],
        description: "Christine Brorsson in RoomX Palladium.",
        id: "002_001",
        images: [
            "https://www.dropbox.com/scl/fi/vnce0whep6773geaim003/roomx_00.jpg?rlkey=rb2r8wgee6psb09t2wqudgjwc&st=fqmpt6eb&raw=1",
            "https://www.dropbox.com/scl/fi/64nbovb9f42hkmlrpwhvz/roomx_01.jpg?rlkey=fay123k0zkyskg9csscvjofm0&st=qcj5gnjt&raw=1",
        ],
        places: [],
        times: [],
        title: "RoomX Palladium",
    },
];

export const worksArtists: IWorkArtist[] = [
    {
        id: "0001",
        work_id: "000_000",
        artist_id: "000",
    },
    {
        id: "0002",
        work_id: "000_001",
        artist_id: "000",
    },
    {
        id: "0003",
        work_id: "000_002",
        artist_id: "000",
    },
    {
        id: "0004",
        work_id: "000_003",
        artist_id: "000",
    },
    {
        id: "0005",
        work_id: "001_000",
        artist_id: "001",
    },
    {
        id: "0006",
        work_id: "002_000",
        artist_id: "002",
    },
    {
        id: "0007",
        work_id: "002_001",
        artist_id: "002",
    },
];
