import PlatformSelect from "@/app/(routes)/services/sections/platform-select/PlatformSelect";
import SearchBox from "@/app/(routes)/services/sections/search-box/SearchBox";
import SearchTableResult from "@/app/(routes)/services/sections/search-table-result/SearchTableResult";
import SearchTopSales from "@/app/(routes)/services/sections/search-top-sales/SearchTopSales";

export default function page() {
  return (
    <main className="new-order user-panel">
   

      <PlatformSelect />
      <SearchBox />
      <SearchTopSales/>
      <SearchTableResult />


    </main>
  )
}
