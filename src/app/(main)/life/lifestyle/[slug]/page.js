import NewsDetails from "@/components/newsDetails/NewsDetails";




const page = ( {params} ) => {

    
  return <div>
    <NewsDetails params={params} />
  </div>;
};

export default page;
