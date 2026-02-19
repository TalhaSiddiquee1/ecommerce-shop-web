import React from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';


const Home = () => {
  return (
    <Container className=" bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta
        amet sint sapiente delectus deserunt labore omnis! Reprehenderit dolores
        hic tempora vero, asperiores non eos placeat aliquid voluptas vitae
        laborum recusandae atque minima quam quo quasi, exercitationem beatae
        at? Ad eos accusantium, excepturi provident quia necessitatibus itaque
        reiciendis quas? Sint!
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  );
};

export default Home;
