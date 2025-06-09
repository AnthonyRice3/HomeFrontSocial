import "./Hero.css";
import { TextInput, Select, Button, Modal, Container, Grid, SimpleGrid, Skeleton, rem, Checkbox, MantineProvider, createTheme, RangeSlider } from "@mantine/core";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import useProperties from "../../hooks/useProperties";
import { HiLocationMarker } from "react-icons/hi";
import PropertyCard from "../PropertyCard/PropertyCard";
import AdvancedSearchModal from "../AdvancedSearchModal/AdvancedSearchModal";
import OutsideClickHandler from "react-outside-click-handler";
import { useDisclosure } from "@mantine/hooks";

const Hero = () => {
  const { data} = useProperties();
  const [filter, setFilter] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const theme = createTheme({
    cursorType: 'pointer',
  });

  return (
    <section className="hero-wrapper">
      
      <div className="paddings flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Strength <br />
              You Can Trust,
              <br /> Beauty That Lasts.
            </motion.h1>
          </div>
          {/* <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div> */}

          {/* <SearchBar filter={filter} setFilter={setFilter} /> */}
          {/* <div className="flexCenter properties">
            <div className="flexCenter search-bar">
              <div className="keyword">
                
                <TextInput 
                label="Enter" 
                placeholder="Enter Keyword..." 
                 
                />
              </div>
              <div className="paddings">
                <Select 
                  mt="md"
                  comboboxProps={{ withinPortal: true }}
                  data={['Family House', 'Apartment', 'Condo', 'Land']}
                  placeholder="Property Type"
                  label="Which type of property?"
                  
                />
              </div>
              <div className="paddings">
                <Select 
                    mt="md"
                    comboboxProps={{ withinPortal: true }}
                    data={['Miami', 'Cape Coral', 'Naples', 'Fort Lauderdale', 'Hialeah', 'West Palm Beach']}
                    placeholder="Location"
                    label="Where are you looking?"
                    
                  />
              </div>
              <div className="">
              <OutsideClickHandler
              onOutsideClick={() => {
                
              }}>
                <div className="paddings search-button">
                   <Button onClick={open} color="white">Advanced Search <HiLocationMarker color="var(--blue)" size={25} /></Button>
                </div>
                <Modal 
                opened={opened} 
                onClose={close} 
                title="Advanced Search"
                size={"90rem"}
                
                >
                  <Container>
                    <div className="paddings flexCenter properties">
                      <div className="paddings ">
                        <Select 
                          mt="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['For Sale', 'For Rent']}
                          placeholder="Property Status"
                          label="Current status of property"
                          
                        />
                      </div>
                      <div className="paddings">
                        <Select 
                          mt="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['1 ', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                          placeholder="Bedrooms"
                          label="Amount of Bedrooms"
                          
                        />
                      </div>
                      <div className="paddings">
                        <Select 
                            mt="md"
                            comboboxProps={{ withinPortal: true }}
                            data={['Miami', 'Cape Coral', 'Naples', 'Fort Lauderdale', 'Hialeah', 'West Palm Beach']}
                            placeholder="Location"
                            label="Where the property is located"
                            
                          />
                      </div>
                    </div>
                  </Container>
                  <Container my="md" >
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                      <Grid>
                        <MantineProvider theme={theme}>
                          <div className="properties paddings">
                            <Checkbox label="Air Conditioning" mt="md"/>
                            <Checkbox label="Swimming Pool" mt="md"/>
                            <Checkbox label="Central Heating" mt="md"/>
                            <Checkbox label="Laundry Room" mt="md"/>
                            <Checkbox label="Gym" mt="md"/>
                            <Checkbox label="Alarm" mt="md"/>
                            <Checkbox label="Window Covering" mt="md"/>
                          </div>
                          <div className="properties paddings">
                            <Checkbox label="WiFi" mt="md"/>
                            <Checkbox label="TV Cable" mt="md"/>
                            <Checkbox label="Dryer" mt="md"/>
                            <Checkbox label="Microwave" mt="md"/>
                            <Checkbox label="Washer" mt="md"/>
                            <Checkbox label="Refrigerator" mt="md"/>
                            <Checkbox label="Outdoor Shower" mt="md"/>
                          </div>
                        </MantineProvider> 
                      </Grid>
                      
                      <div className="paddings">  
                      <Grid gutter="sm">
                        <Grid.Col>
                          <h1 className="flexCenter">Area Size (sq ft)</h1>
                        <div className="properties paddings">
                          <RangeSlider 
                            min={0}
                            max={10000}
                            labelAlwaysOn
                          />
                        </div>
                        </Grid.Col>
                        <Grid.Col>
                        <h1 className="flexCenter">Price Range (usd)</h1>
                        <div className="properties paddings">
                          <RangeSlider 
                            min={0}
                            max={1000000}
                            labelAlwaysOn
                          />
                        </div>
                        </Grid.Col>
                      </Grid>
                      </div>
                    </SimpleGrid>
                    <button className="button search" ><a href="/properties">Search</a></button>
                  </Container>
                </Modal>
              </OutsideClickHandler>
              </div>
              <div className="">
              <button className="button search" ><a href="/properties">Search</a></button>
              </div>
              
              {
                    data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

                    data
                      .filter(
                        (property) =>
                          property.title.toLowerCase().includes(filter.toLowerCase()) ||
                          property.city.toLowerCase().includes(filter.toLowerCase()) ||
                          property.country.toLowerCase().includes(filter.toLowerCase())
                      )
                      .map((card, i) => (
                        <PropertyCard card={card} key={i} />
                      ))
                  }
            </div>
          
          </div> */}

          {/* <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div> */}
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          {/* <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
