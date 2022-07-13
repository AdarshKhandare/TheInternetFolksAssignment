import React from 'react'
import Image from "next/image";

const BrandRec = () => {
  return (
      <BrandRecContainer>
          <BrandRecHeading>Brand Recognition</BrandRecHeading>
          <BrandRecDescription>Boost your brand recognization with one click.Generic links don't mean a thing.Branded links help instil confidence in your content</BrandRecDescription>
          <BrandRecImgDiv>
          <Image src="/brand-recognition.png" alt="brand-recognition" width={300} height={300} />
          </BrandRecImgDiv>
      </BrandRecContainer>
  )
}

export default BrandRec