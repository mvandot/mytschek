import React from "react";

export const About = () => {
  return (
    <section id="about" className="h-full mt-20 font-extralight">
      <div className="flex flex-col gap-10 sm:flex-col sm:justify-center md:flex-row md:justify-center md:mx-auto lg:flex-row lg:justify-center lg:mx-auto align-items">
        <div className="flex flex-col gap-2 h-full">
          <div className="mx-auto md:w-48 lg:w-64 xl:w-80">
            <img src="assets/about/cotton.png" alt="t-shirts crafted out of extremly soft brushed turkish cotton"/>
          </div>
          <div className="w-[280px] mx-auto md:w-48 lg:w-64 xl:w-70 xl:mx-0">
            <h2 className="text-2xl">quality</h2>
            <p className="text-xl mt-2">
            crafted out of extremely soft turkish brushed cotton.
            the fabric is tightly woven and feels 
            thicker and more substantial. 
            this adds to its durability and makes 
            it feel luxurious and sturdy while still being soft.  
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full">
          <div className="mx-auto md:w-48 lg:w-64 xl:w-80">
            <img src="assets/about/design.jpg" alt="carefully and precisely sewn t-shirts to fit well and look polished" />
          </div>
          <div className="w-[280px] mx-auto md:w-48 lg:w-64 xl:w-70 xl:mx-0">
            <h2 className="text-2xl">design</h2>
            <p className="text-xl mt-2">
            classic white t-shirts that combine simplicity and sophistication in 
            both design and maintenance.
            carefully and precisely sewn to fit well and look polished, showing 
            attention to details with delicate
            finishing edges. 
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <div className="mx-auto">
            <img src="assets/about/cotton.png" />
          </div>
          <div className="px-5 md:px-10 w-[300px] mx-auto">
            <h2 className="text-2xl">our story</h2>
            <p className="text-xl mt-2">
            kjlfkjslkjlkajlkajlkjlkjlkjkljkljfkjlkjlkj
            kjlfkjslkjlkajlkajlkjlkjlkjkljkljfkjlkjlkj
            kjlfkjslkjlkajlkajlkjlkjlkjkljkljfkjlkjlkj
            kjlfkjslkjlkajlkajlkjlkjlkjkljkljfkjlkjlkj
            </p>
          </div>
        </div> */}
        <div className="flex flex-col gap-2 h-full">
          <div className="mx-auto md:w-48 lg:w-64 xl:w-80">
            <img src="assets/about/models.jpg" alt="5 essential t-shirt styles" />
          </div>
          <div className="w-[280px] mx-auto md:w-48 lg:w-64 xl:w-70 xl:mx-0">
            <h2 className="text-2xl">models</h2>
            <p className="text-xl mt-2">
              mytschek brand focuses on essentials and starts with 5 different styles that are made from quality fabrics: 
            <br/>
                longline, boyfriend, oversized, longline deep v-neck & longline deep back. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
