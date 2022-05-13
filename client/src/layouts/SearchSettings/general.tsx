import { ToggleSwitch } from "react-flatifycss";
import { useSettings } from "../../contexts/settings";
import { useSearch } from "../../contexts/search";
import { setLocalStorage, setLocalStorageProp } from "../../utils/localStorage";

export default function GeneralSettings() {
  const { autoSearch, setAutoSearch, fuzzySearch, setFuzzySearch, limitHeight, setLimitHeight } = useSettings();
  const { searchValue, setSearchValue } = useSearch();

  const handleAutoSearchToggle = (value: boolean) => {
    setAutoSearch(value);
    setLocalStorageProp("settings", "autoSearch", value);
  };

  const handleFuzzySearchToggle = (value: boolean) => {
    setFuzzySearch(value);
    setLocalStorageProp("settings", "fuzzySearch", value);

    // reset cached results on fuzzy search toggle
    setLocalStorage("cached_dehkhoda", {});
    setLocalStorage("cached_teyfi", {});
    setLocalStorage("cached_motaradef", {});
    setLocalStorage("cached_sereh", {});
    setLocalStorage("cached_farhangestan", {});
    setLocalStorage("cached_ganjvar", {});
  };

  const handleLimitHeightToggle = (value: boolean) => {
    setLimitHeight(value);
    setLocalStorageProp("settings", "limitHeight", value);

    // reset the search value to update results
    const oldValue = searchValue;
    setSearchValue("");
    setTimeout(() => {
      setSearchValue(oldValue);
    }, 100);
  };

  return (
    <>
      <p className="menu-item heading">جستجو</p>
      <ToggleSwitch checked={autoSearch} isAfterLabel={true} onChange={(value) => handleAutoSearchToggle(value)}>
        جستجو خودکار پس از یک ثانیه
      </ToggleSwitch>
      <ToggleSwitch checked={fuzzySearch} isAfterLabel={true} onChange={(value) => handleFuzzySearchToggle(value)}>
        جستجو واژگان مشابه
      </ToggleSwitch>
      <ToggleSwitch checked={limitHeight} isAfterLabel={true} onChange={(value) => handleLimitHeightToggle(value)}>
        محدود کردن ارتفاع جعبه‌ها
      </ToggleSwitch>
    </>
  );
}
