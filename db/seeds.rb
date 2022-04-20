def get_property_details(zpid)


   postdata = {"operationName" => "ForSaleShopperPlatformFullRenderQuery",
      "variables" => {"zpid" => zpid},
      "clientVersion" => "home-details/6.1.219.master.3a2c501",
      "queryId" => "1f44ed82b4848872105cc51b74bcb249"}.to_json

      headers = {
         "User-Agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0", 
         "Content-Type" => "application/json",
         "Content-Length" => postdata.length.to_s,
         "Host" => "www.zillow.com"
       }

      post_url = "https://www.zillow.com/graphql/"

      JSON.parse(HTTParty.post(post_url, headers: headers, body: postdata).body)["data"]["property"]
end

def getPropertiesByTerm(term)
   params = {
   "pagination" => {},
   "usersSearchTerm" => term,
   "mapBounds" => {
      "west" => -96.04132331103514,
      "east" => -95.63963568896483,
      "south" => 29.697633970555042,
      "north" => 29.783188919799006
   },
   "mapZoom" => 12,
   "regionSelection" => [{"regionId" => 91982,"regionType" => 7}],
   "isMapVisible" => true,
   "filterState" => {"isAllHomes" => {"value" => true},"sortSelection"=>{"value" => "globalrelevanceex"}},
   "isListVisible" => true
}

   paramString = CGI::escape(params.to_json)
   myURL = "https://www.zillow.com/search/GetSearchPageState.htm?searchQueryState=#{paramString}&wants={%22cat1%22:[%22mapResults%22]}&requestId=2"
   JSON.parse(HTTParty.get(myURL, { headers: {"User-Agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0" }} ).body)["cat1"]["searchResults"]["mapResults"]
end


houses = JSON.load(File.read("allHouses.json"))
# houses = getPropertiesByTerm("Houston")

begin
   
   houses.each { |house| 

      if (!house.key?("house_details"))
         sleep 4
         house_details = get_property_details(house["zpid"].to_s)
         house["house_details"] = house_details
         puts "house details fetched successfully"
      end
   
   }
rescue
   puts "Failed to fetch house details"
else
   puts "All house details successfully fetched"
ensure
   File.write("allHouses.json",JSON.dump(houses))
   puts "Saved current state"
end


accountJ = Account.create(first_name: "John", last_name: "Doe", email: "john@example.com", password: "123456", url: "")

houses.each { |house| 

   begin
   if (house.key?("house_details"))
      # puts house["zpid"]
      address = house["house_details"]["address"]["zipcode"]
      puts address
      Property.create(account_id: accountJ.id, address: house["house_details"]["address"]["streetAddress"], price: house["price"], rooms: house["beds"], bathrooms: house["baths"], photo: house["imgSrc"], sqft: house["area"], zipcode: house["hdpData"]["homeInfo"]["zipcode"], city: house["hdpData"]["homeInfo"]["city"], state: house["hdpData"]["homeInfo"]["state"], home_type: house["hdpData"]["homeInfo"]["homeType"], home_status: house["hdpData"]["homeInfo"]["homeStatus"], property_status: house["statusText"], property_type: (house["statusType"] == "FOR_SALE" ? 1 : 2), lat: house["latLong"]["latitude"], lng: house["latLong"]["longitude"], detail_url: house["detailUrl"], time_on_zillow: house[":timeOnZillow"]) 
   end
   rescue
      puts "invalid house found"
   end

}


# houses.each { |house| 

   
#       puts house["zpid"]
#       #  get_property_details(house["zpid"].to_s)
#       # address = home_details["address"]["streetAddress"]
#       # puts address
      
#       Property.create(account_id: accountJ.id, name: house["statusText"], address: house["zipcode"], price: house["price"], rooms: house["beds"], bathrooms: house["baths"], photo: house["imgSrc"], sqft: house["area"], zipcode: house["hdpData"]["homeInfo"]["zipcode"], city: house["hdpData"]["homeInfo"]["city"])


# }