import asyncHandler from 'express-async-handler'
import {prisma} from "../config/prismaConfig.js"


export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, area, address, city, state, country, facilities, type, property, images, userEmail, ac, wifi, cable, pool, heating, laundry, dryer, microwave, gym, washer, refrigerator, shower } = req.body.data;

    console.log(req.body.data)
    try{

        const residency = await prisma.residency.create({
            data: {
                title, 
                description, 
                price, 
                area,
                address, 
                city,
                state,
                country, 
                facilities, 
                type,
                property,
                images, 
                ac,
                        wifi,
                        cable,
                        pool,
                        heating,
                        laundry,
                        dryer,
                        microwave,
                        gym,
                        washer,
                        refrigerator,
                        shower,
                owner : { connect : {email: userEmail}},
                // resdInfo: {
                //     create: {
                //         ac,
                //         wifi,
                //         cable,
                //         pool,
                //         heating,
                //         laundry,
                //         dryer,
                //         microwave,
                //         gym,
                //         washer,
                //         refrigerator,
                //         shower
                //     }
                // }
            },
        });

        res.send({ message: "Residency Created Succesfully", residency})
    } catch (err) {
        if (err.code === "P2002")
        {
            throw new Error("A residency with address already there")
        }
        throw new Error(err.message)
    }
});


export const getAllResidencies = asyncHandler(async(req, res) => {
    const query = req.query;
    const residencies = await prisma.residency.findMany({
        where:{
            city: query.city || undefined,
            type: query.type || undefined,
            property: query.property || undefined,
            bedroom: parseInt(query.bedroom) || undefined,
            price: {
              gte: parseInt(query.minPrice) || undefined,
              lte: parseInt(query.maxPrice) || undefined, 
            }
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    res.send(residencies);
})

export const getResidency = asyncHandler(async (req, res) => {
    const {id} = req.params;

    try{

        const residency = await prisma.residency.findUnique({
            where: {id},
        })
        res.send(residency);
    } catch(err){
        throw new Error(err.message);
    }
})