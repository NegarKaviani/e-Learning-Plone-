import { SliderBlockView, SliderBlockEdit } from "./components/";
import heroSVG from "@plone/volto/icons/hero.svg";


config.blocks.blocksConfig.slider = {
    id: "courses",
    title: "Course",
    icon: heroSVG,
    group: "common",
    view: SliderBlockView,
    edit: SliderBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };