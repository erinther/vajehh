import { SearchProvider } from "../../contexts/search";
import { SettingsProvider } from "../../contexts/settings";
import { DictionaryProvider } from "../../contexts/dictionary";
import SearchArea from "../../layouts/SearchArea";
import ResultTabs from "../../layouts/ResultTabs";
import ShareBox from "../../components/ShareBox";

export default function SearchPage() {
  return (
    <main className="search-main container-lg">
      <SettingsProvider>
        <SearchProvider>
          <DictionaryProvider>
            <SearchArea />
            <ResultTabs />
          </DictionaryProvider>
        </SearchProvider>
        <ShareBox />
      </SettingsProvider>
    </main>
  );
}
