/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

import SimpleImageSlider from "react-simple-image-slider";

// to use slide show run:  npm install react-simple-image-slider --save
// https://www.npmjs.com/package/react-simple-image-slider


const posters = [
    { url: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BMTQ3NDA1ZWYtYjBmMC00NmJjLWI1NjgtYjg2NDhmMTY2YWQ4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg" },
];

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);
    display: flex;
    justify-content: flex-start;

    .text-container{
        width: 60%;
        margin: 15px;
    }

    .img-container{
        margin: 30px;
    }
`;

const WebsiteTitle = styled.h1`
    padding: 0px;
    margin: 0;
    color: #ffffff;
    font-size: 75px;
    text-decoration: underline;
  text-decoration-color: #77CBB9;
`;

const DescriptionBox = styled.div`
    width: 50%;
`;


function Home() {
    return (
        <Page>
            <div className="text-container">
                <br></br>
                <br></br>
                <br></br>
                <WebsiteTitle>iWannaWatch</WebsiteTitle>
                <DescriptionBox>
                    <p>Welcome! Use this website to look up information about movies and tv shows. Navigate to the Movies tab to search movies and use the
            TV Shows tab to search through TV Shows. </p>
                </DescriptionBox>
            </div>

            <div className="img-container">
                <SimpleImageSlider
                    height={445}
                    width={300}
                    images={posters}
                    showBullets={true}
                    showNavs={true}
                />
            </div>

        </Page>

    );
}

export default Home;