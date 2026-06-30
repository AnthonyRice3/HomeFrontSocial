import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group } from '@mantine/core';


const UploadImage = ({
    propertyDetails,
    setPropertyDetails,
    nextStep,
    prevStep,
  }) => {

    const [imageURL, setImageURL] = useState(propertyDetails.image);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const handleNext = () => {
        setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
        nextStep();
      };

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dix8yzuue",
                uploadPreset: "i38z7unr",
                maxFiles: 1
            },
            (err, result) => {
                if(result.event === "success")
                setImageURL(result.info.secure_url)
            }
        )
    }, [])
  return (
    <div className="flexColCenter gap-8 mt-12">
        {
            !imageURL ? (
                <div
                  className="flexColCenter w-4/5 h-[25rem] border-2 border-dashed border-gray-400 cursor-pointer"
                  onClick={() => widgetRef.current?.open()}
                >
                    <AiOutlineCloudUpload size={50} color="grey" />
                    <span>Upload</span>
                </div>
            ) : (
                <div
                  className="w-4/5 h-[25rem] rounded-[10px] cursor-pointer overflow-hidden"
                  onClick={() => widgetRef.current?.open()}
                >
                    <img src={imageURL} alt='/' className="w-full h-full object-cover" />
                </div>
            )
        }
        <Group position="center" mt={"xl"}>
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={handleNext} disabled={!imageURL}>Next</Button>
        </Group>
    </div>
  );
};

export default UploadImage