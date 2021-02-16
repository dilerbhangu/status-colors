import React from "react";
import Link from "next/link";

function SubMenuItemsCard({ menu_items, submenu_id, submenuItemClick }) {
  const sub_menu_items_filter = menu_items.filter(
    (menu_item) => menu_item.Menu_ID === submenu_id
  );
  const sub_menu_items = sub_menu_items_filter[0].menu_sub_items;
  // console.log("submenuitem", sub_menu_items_filter[0].Menu_ID);
  return (
    <>
      {sub_menu_items.map((key, i) => {
        return (
          <div key={i}>
            <a href={`/${sub_menu_items_filter[0].Menu_ID}/${key.subitem_id}`}>
              <div
                className="flex divide-y divide-gray-300 flex-col cursor-pointer"
                onClick={submenuItemClick}
              >
                <div className="bg-white p-4 px-8 flex justify-between items-center ">
                  <div className="font-light tracking-normal">
                    {key.subitem_name}
                  </div>
                </div>
                <div></div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default SubMenuItemsCard;
