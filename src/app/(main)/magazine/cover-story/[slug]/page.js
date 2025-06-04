import MagazineDetails from "@/components/singleMagazine/MagazineDetails";




const page = ( {params} ) => {

    
  return <div>
    <MagazineDetails params={params} />
  </div>;
};

export default page;
