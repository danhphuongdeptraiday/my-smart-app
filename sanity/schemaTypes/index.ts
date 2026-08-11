import { type SchemaTypeDefinition } from "sanity";

import { eventFeature } from "./eventFeature";
import { homePage } from "./homePage";
import { homestayPage } from "./homestayPage";
import { menuCategory } from "./menuCategory";
import { menuDish } from "./menuDish";
import { menuPriceTier } from "./menuPriceTier";
import { menuSubcategory } from "./menuSubcategory";
import { nhaHangPage } from "./nhaHangPage";
import { priceListCategory } from "./priceListCategory";
import { priceListItem } from "./priceListItem";
import { room } from "./room";
import { season } from "./season";
import { spaPage } from "./spaPage";
import { spaService } from "./spaService";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    homestayPage,
    nhaHangPage,
    spaPage,
    room,
    season,
    menuCategory,
    menuSubcategory,
    menuDish,
    menuPriceTier,
    eventFeature,
    spaService,
    priceListItem,
    priceListCategory,
  ],
};
