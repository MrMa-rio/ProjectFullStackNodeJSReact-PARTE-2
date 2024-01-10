import { SearchContext } from "@/contexts/SearchContext";
import { useContext } from "react";

export const useSearchContext = () => useContext(SearchContext);
