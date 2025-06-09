
function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        bedroom: searchParams.get("bedroom") || "",
      });
    const handleChange = (e) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value,
        });
    };
    const handleFilter = () => {
        setSearchParams(query);
      };
      
      return (
        <div className="filter">

        </div>
      )
}

export default Filter