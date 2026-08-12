import { type SchemaTypeDefinition } from "sanity";

import { customerReview } from "./customerReview";
import { eventFeature } from "./eventFeature";
import { exploreSpot } from "./exploreSpot";
import { gioiThieuPage } from "./gioiThieuPage";
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
import { staffMember } from "./staffMember";
import { storyBlock } from "./storyBlock";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    homestayPage,
    nhaHangPage,
    spaPage,
    gioiThieuPage,
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
    exploreSpot,
    storyBlock,
    staffMember,
    customerReview,
  ],
};
