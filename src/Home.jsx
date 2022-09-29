import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/04/29/39/61/360_F_429396118_tuFnY6bl2ENWzLdQWa6gp0zcQG3uQVSA.jpg"
          alt="banner1"
        />
        <Carousel.Caption>
          <h3>Evening Glam</h3>
          <p>on styles you'll love.</p>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/04/25/82/11/360_F_425821130_Oh4R8ZLDwcg2YuqFwB1LlPU4qa4iCXAR.jpg"
          alt="banner2"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/04/29/39/74/360_F_429397409_XXnAsiGy0QiuYOZLzh21RpN0o3u9MAOk.jpg"
          alt="banner3"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
