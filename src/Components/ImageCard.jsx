import React from 'react';
import ImageFlip from './ImageFlip';

function ImageCard () {
  return (
    <>
       <div className='py-20 sm:py-24 flex flex-col justify-center items-center w-full h-auto bg-slate-100'>
      <h2 className='text-center text-3xl sm:text-4xl mb-20 font-bold'>Versatile Interior Design Works for Homes and Offices</h2>
    <div className="App flex flex-wrap justify-center gap-4 p-4">
      <ImageFlip src="images/living-room.jpg" alt="Living Room" text="Living Room" description="Homely interior design for the living room focuses on creating a cozy and inviting space with comfortable seating, warm colors, and personal touches like family photos or artwork"/>
      <ImageFlip src="images/bedroom.jpg" alt="Bed Room" text="Bed Room" description="Homely bedroom design emphasizes comfort and relaxation with soft bedding, soothing colors, ambient lighting, and personalized decor to create a tranquil retreat."/>
      <ImageFlip src="images/kitchen.jpg" alt="Kitchen" text="Kitchen" description="Homely kitchen design prioritizes functionality and warmth, featuring practical layouts, ample storage, inviting seating areas, and colors for a welcoming cooking and dining experience."/>
      <ImageFlip src="images/bath-room.jpg" alt="Bath Room" text="Bath Room" description=" Homely bathroom design combines functionality with comfort, incorporating features like a spacious layout, soft lighting, and storage solution and organized space."/>
      <ImageFlip src="images/office-cabin.jpg" alt="Office Cabin" text="Office Cabin" description="Homely office cabin design integrates functionality and personal style, offering a productive workspace with efficient storage solutions and a comfortable atmosphere conductive to work."/>
      <ImageFlip src="images/meeting-room.jpg" alt="Meeting Room" text="Meeting Room" description=" Homely interior design for meeting rooms aims to foster collaboration and creativity with comfortable seating, integrated technology, and a professional yet relaxed ambiance."/>
      <ImageFlip src="images/workspace.jpg" alt="Office Workspace" text="Office Workspace" description="Homely interior design for office workspaces focuses on creating a warm and comfortable environment that promotes productivity and well-being."/>
      <ImageFlip src="images/store-interior.jpg" alt="Store Interior" text="Store Interior" description="Creating visually appealing and customer-friendly retail environments by selecting attractive displays, and using lighting and colors strategically to enhance the shopping experience"/>
    </div>
    </div>
    </>
  );
}

export default ImageCard;
