import React from 'react';
import styled from 'styled-components';

import { Heading2 } from '../components/Heading';

const Albums = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
`;

const Album = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 10px;
  align-items: center;
  color: #261447;
  font-weight: 100;
`;

const Artwork = styled.img`
  width: 100%;
`;
const Details = styled.div``;
const Artist = styled.p``;
const Description = styled.p``;

const AlbumLayout = () => (
  <div>
    <Heading2>Album Layout</Heading2>
    <Albums>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=1" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=2" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=3" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=4" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=5" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=6" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=7" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=8" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=9" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
      <Album>
        <Artwork src="https://source.unsplash.com/random/300x300?v=10" />
        <Details>
          <h2>Album Title</h2>
          <Artist>Artist Name</Artist>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            sint doloremque repellat, iste debitis.
          </Description>
        </Details>
      </Album>
    </Albums>
  </div>
);

export default AlbumLayout;
