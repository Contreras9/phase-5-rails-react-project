# require "cgi"
# require "json"
# require "httparty"


# params = {
#    "pagination" => {},
#    "usersSearchTerm" => "Houston",
#    "mapBounds" => {
#       "west" => -96.04132331103514,
#       "east" => -95.63963568896483,
#       "south" => 29.697633970555042,
#       "north" => 29.783188919799006
#    },
#    "mapZoom" => 12,
#    "regionSelection" => [{"regionId" => 91982,"regionType" => 7}],
#    "isMapVisible" => true,
#    "filterState" => {"isAllHomes" => {"value" => true},"sortSelection"=>{"value" => "globalrelevanceex"}},
#    "isListVisible" => true
# }

# paramString = CGI::escape(params.to_json)

# myURL = "https://www.zillow.com/search/GetSearchPageState.htm?searchQueryState=#{paramString}&wants={%22cat1%22:[%22mapResults%22]}&requestId=2"

# puts myURL

# houses = JSON.parse(HTTParty.get(myURL, { headers: {"User-Agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0" }} ).body)["cat1"]["searchResults"]["mapResults"]

# houses.each { |house| 

#       puts house["zpid"] + " for " +  house["price"]

# }