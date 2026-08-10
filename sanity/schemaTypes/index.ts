import { type SchemaTypeDefinition } from "sanity";

import { homestayPage } from "./homestayPage";
import { menuItem } from "./menuItem";
import { nhaHangPage } from "./nhaHangPage";
import { priceListCategory } from "./priceListCategory";
import { priceListItem } from "./priceListItem";
import { room } from "./room";
import { spaPage } from "./spaPage";
import { spaService } from "./spaService";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homestayPage,
    nhaHangPage,
    spaPage,
    room,
    menuItem,
    spaService,
    priceListItem,
    priceListCategory,
  ],
};
