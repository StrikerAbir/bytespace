import Button from '@/libs/ui-components/Button';
import React from 'react'

export const Unlock = () => {
  return (
    <section id="unlock" className="py-20 bg-primary-800 grid-background">
      <div className="max-w-[950px] text-center flex flex-col items-center justify-center gap-[30px] mx-auto ">
        <h1 className="text-neutral-50 font-semibold text-[44px] leading-12">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h1>
        <p className="text-neutral-50 mt-4">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button>Join as a Creator</Button>
      </div>
    </section>
  );
}
