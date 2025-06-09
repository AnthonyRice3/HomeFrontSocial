import "./ListPage.css";
import Filter from "../../components/Filters/Filter.jsx";

import useProperties from "../../hooks/useProperties";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useContext } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import ResidencyDataContext from "../../Context/ResidencyContext.js";
import { PuffLoader } from "react-spinners";
import { Checkbox, Container, Grid, RangeSlider, Select, SimpleGrid, TextInput } from "@mantine/core";

const ListPage = () => {
  const { data, isError, isLoading } = useProperties();
  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
      </div>
    )
  }

  

  return (
    <div>

      <div className="wrapper">
        <div className="flexColStart paddings innerWidth property-container">
          
          <p>Home / Listings</p>
          
          <div className="flexCenter property-details" >
            
            <div className="flexColStart left paddiings">
              {
                data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
              }
            </div>
            <div className="rightcol ">
              <h1>Find your house</h1>

              <Container>
                <TextInput label="Keyword" description="Input Desc" />
                <Select 
                    mt="md"
                    comboboxProps={{ withinPortal: true }}
                    data={['Miami', 'Cape Coral', 'Naples', 'Fort Lauderdale', 'Hialeah', 'West Palm Beach']}
                    placeholder="Location"
                    label="Where are you looking?"
                    
                  />
                <Select 
                  mt="md"
                  comboboxProps={{ withinPortal: true }}
                  data={['Family House', 'Apartment', 'Condo', 'Land']}
                  placeholder="Property Type"
                  label="Which type of property?"
                  
                />
                <Select 
                          mt="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['For Sale', 'For Rent']}
                          placeholder="Property Status"
                          label="Current status of property"
                          
                        />
                        <Select 
                          mt="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['1 ', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                          placeholder="Bedrooms"
                          label="Amount of Bedrooms"
                          
                        />
                        <Select 
                          mt="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['1 ', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                          placeholder="Bathrooms"
                          label="Amount of Bathrooms"
                          
                        />
                        <div className="paddings">
                        <h1 className="flexCenter">Area Size (sq ft)</h1>
                        <div className="properties paddings">
                          <RangeSlider 
                            min={0}
                            max={10000}
                            labelAlwaysOn
                          />
                        </div>
                        <h1 className="flexCenter">Price Range (usd)</h1>
                        <div className="properties paddings">
                          <RangeSlider 
                            min={0}
                            max={1000000}
                            labelAlwaysOn
                          />
                        </div>
                        </div>
                        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                        <Grid>
                          <div className="properties paddings">
                            <Checkbox label="Air Conditioning" mt="md"/>
                            <Checkbox label="Swimming Pool" mt="md"/>
                            <Checkbox label="Central Heating" mt="md"/>
                            <Checkbox label="Laundry Room" mt="md"/>
                            <Checkbox label="Gym" mt="md"/>
                            <Checkbox label="Alarm" mt="md"/>
                            <Checkbox label="Window Covering" mt="md"/>
                          </div>
                        </Grid>
                        <Grid>
                          <div className="properties paddings">
                            <Checkbox label="WiFi" mt="md"/>
                            <Checkbox label="TV Cable" mt="md"/>
                            <Checkbox label="Dryer" mt="md"/>
                            <Checkbox label="Microwave" mt="md"/>
                            <Checkbox label="Washer" mt="md"/>
                            <Checkbox label="Refrigerator" mt="md"/>
                            <Checkbox label="Outdoor Shower" mt="md"/>
                          </div>
                        </Grid>
                        </SimpleGrid>
                        <div className="">
              <button className="button search" ><a href="/properties">Search</a></button>
              </div>
              </Container>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
  
}

export default ListPage;